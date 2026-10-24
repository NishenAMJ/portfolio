"use client";

import type { FormEvent } from "react";
import type { EditorSectionProps } from "./types";

export function ProfileSettings({ profile, persist }: EditorSectionProps) {
  function saveProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    persist({
      ...profile,
      headline: String(d.get("headline")),
      email: String(d.get("email")),
      github: String(d.get("github")),
      available: d.get("available") === "on",
    });
  }
  return (
    <section className="admin-section panel profile-form">
      <h2>Profile & availability</h2>
      <form
        key={`${profile.headline}-${profile.email}-${profile.github}-${profile.available}`}
        onSubmit={saveProfile}
      >
        <label className="switch-label">
          <span>Open to internship opportunities</span>
          <input
            type="checkbox"
            name="available"
            defaultChecked={profile.available}
          />
        </label>
        <label>
          Headline
          <input
            name="headline"
            defaultValue={profile.headline}
            required
            maxLength={120}
          />
        </label>
        <div className="form-grid">
          <label>
            Contact email
            <input
              name="email"
              type="email"
              defaultValue={profile.email}
              placeholder="Your real email address"
            />
          </label>
          <label>
            GitHub profile
            <input
              name="github"
              type="url"
              pattern="https://.*"
              defaultValue={profile.github}
              required
            />
          </label>
        </div>
        <button className="button primary" type="submit">
          Save profile
        </button>
      </form>
    </section>
  );
}
