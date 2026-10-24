"use client";

import { useState } from "react";
import type { EditorSectionProps } from "./types";

export function SkillsManager({ profile, persist }: EditorSectionProps) {
  const [skill, setSkill] = useState("");
  return (
    <section className="admin-section panel skills-manager">
      <h2>Skills</h2>
      <div className="editable-tags">
        {profile.skills.map((s) => (
          <span key={s}>
            {s}
            <button
              aria-label={`Remove ${s}`}
              onClick={() =>
                persist({
                  ...profile,
                  skills: profile.skills.filter((item) => item !== s),
                })
              }
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const value = skill.trim();
          if (value && !profile.skills.includes(value))
            persist({ ...profile, skills: [...profile.skills, value] });
          setSkill("");
        }}
      >
        <label>
          Add a skill
          <input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="e.g. Docker"
            maxLength={40}
            required
          />
        </label>
        <button className="button secondary" type="submit">
          + Add skill
        </button>
      </form>
    </section>
  );
}
