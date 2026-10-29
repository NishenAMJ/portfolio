"use client";

import { initial as profile } from "@/data/portfolio";

export function ResumeLink() {

  return profile.resume ? (
    <a
      className="button secondary"
      href={profile.resume}
      download={profile.resumeName}
    >
      Download CV ↓
    </a>
  ) : null;
}
