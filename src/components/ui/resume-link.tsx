"use client";

import { useProfile } from "@/context/portfolio-provider";

export function ResumeLink() {
  const { profile } = useProfile();
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
