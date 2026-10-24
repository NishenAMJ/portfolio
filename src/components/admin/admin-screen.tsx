"use client";

import Link from "next/link";
import { useProfile } from "@/context/portfolio-provider";
import { useState } from "react";
import type { Profile } from "@/types/portfolio";
import { ProjectsManager } from "./projects-manager";
import { ProfileSettings } from "./profile-settings";
import { SkillsManager } from "./skills-manager";
import { ResumeManager } from "./resume-manager";

export function AdminScreen() {
  const { profile, save } = useProfile();
  const [status, setStatus] = useState("");

  function persist(next: Profile) {
    setStatus(
      save(next)
        ? "Saved in this browser."
        : "Could not save. Browser storage may be full.",
    );
  }

  return (
    <main className="container page admin-page">
      <div className="eyebrow">CONTENT MANAGER</div>
      <div className="page-heading">
        <div>
          <h1>Your portfolio, at a glance.</h1>
          <p>
            Manage projects, skills, and your profile. Changes are saved in this
            browser.
          </p>
        </div>
        <Link href="/" className="button secondary">
          View portfolio ↗
        </Link>
      </div>
      <p className="admin-status" role="status">
        {status}
      </p>
      <div className="admin-metrics">
        <article>
          <small>Projects</small>
          <strong>
            {profile.projects.filter((p) => p.published).length}{" "}
            <span>published</span>
          </strong>
        </article>
        <article>
          <small>Tech stack</small>
          <strong>
            {profile.skills.length} <span>skills</span>
          </strong>
        </article>
        <article>
          <small>Availability</small>
          <strong className="green">
            {profile.available ? "Open to roles" : "Not available"}
          </strong>
        </article>
      </div>
      <div className="admin-grid">
        <div>
          <ProjectsManager profile={profile} persist={persist} />
          <ProfileSettings profile={profile} persist={persist} />
        </div>
        <div>
          <SkillsManager profile={profile} persist={persist} />
          <ResumeManager
            profile={profile}
            persist={persist}
            onStatus={setStatus}
          />
        </div>
      </div>
    </main>
  );
}
