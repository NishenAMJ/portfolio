"use client";

import { initial as profile } from "@/data/portfolio";

export function Footer() {

  return (
    <footer>
      <div className="footer-inner">
        <span>© 2026 Janith Nishen</span>
        <div>
          <a href={profile.medium} target="_blank" rel="noreferrer">
            Medium ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
