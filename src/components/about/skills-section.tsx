"use client";

import type { ReactNode } from "react";
import { initial as profile } from "@/data/portfolio";
import {
  CodeIcon,
  DatabaseIcon,
  MonitorIcon,
  ServerIcon,
  WrenchIcon,
} from "@/components/ui/icons";
import { brandIcons, groups } from "@/data/skill-groups";

const groupIcons: Record<(typeof groups)[number]["icon"], ReactNode> = {
  code: <CodeIcon />,
  monitor: <MonitorIcon />,
  server: <ServerIcon />,
  database: <DatabaseIcon />,
  wrench: <WrenchIcon />,
};

function SkillChip({ name }: { name: string }) {
  const slug = brandIcons[name];
  return (
    <span className="skill-chip">
      {slug && (
        // Remote SVG from the Devicon CDN; next/image would need a remotePatterns entry.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-original.svg`}
          alt=""
          width={20}
          height={20}
          loading="lazy"
        />
      )}
      {name}
    </span>
  );
}

export function SkillsSection() {

  const known = groups.flatMap((g) => g.items);
  const extra = profile.skills.filter((s) => !known.includes(s));
  return (
    <section id="skills" className="skills-section">
      <div className="eyebrow">TECH STACK</div>
      <h2>Technologies I Work With</h2>
      <p>Tools and technologies I use to build, experiment, and solve problems.</p>
      <div className="skills-grid">
        {groups.map((g) => {
          const items = g.items.filter((s) => profile.skills.includes(s));
          return (
            <article className="skill-card" key={g.title}>
              <div className="card-heading">
                <span className="icon-tile">{groupIcons[g.icon]}</span>
                <h3>{g.title}</h3>
              </div>
              <div className="chips">
                {items.map((s) => (
                  <SkillChip key={s} name={s} />
                ))}
              </div>
            </article>
          );
        })}
        {extra.length > 0 && (
          <article className="skill-card">
            <div className="card-heading">
              <span className="icon-tile">
                <WrenchIcon />
              </span>
              <h3>More tools</h3>
            </div>
            <div className="chips">
              {extra.map((s) => (
                <SkillChip key={s} name={s} />
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
