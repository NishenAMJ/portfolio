"use client";

import { useProfile } from "@/context/portfolio-provider";
import { Tags } from "@/components/ui/tags";
import { groups } from "@/data/skill-groups";
import type { Project } from "@/types/portfolio";

function UsedIn({ items, projects }: { items: string[]; projects: Project[] }) {
  const used = projects.filter((p) => p.tags.some((t) => items.includes(t)));
  if (!used.length) return null;
  return (
    <small className="used-in">
      Used in {used.map((p) => p.title).join(", ")}
    </small>
  );
}

export function SkillsSection() {
  const { profile } = useProfile();
  const known = groups.flatMap((g) => g.items);
  return (
    <section id="skills" className="skills-section">
      <div className="eyebrow">TECH STACK</div>
      <h2>My development toolkit.</h2>
      <p>Grouped by area, with the projects where each group was used.</p>
      <div className="skills-grid">
        {groups.map((g, i) => (
          <article className="skill-card" key={g.title}>
            <div className="card-heading">
              <h3>{g.title}</h3>
              <span>0{i + 1}</span>
            </div>
            <p>{g.description}</p>
            <Tags items={g.items.filter((s) => profile.skills.includes(s))} />
            <UsedIn
              items={g.items.filter((s) => profile.skills.includes(s))}
              projects={profile.projects.filter((p) => p.published)}
            />
          </article>
        ))}
        {profile.skills.some((s) => !known.includes(s)) && (
          <article className="skill-card">
            <h3>More tools</h3>
            <Tags items={profile.skills.filter((s) => !known.includes(s))} />
          </article>
        )}
      </div>
    </section>
  );
}
