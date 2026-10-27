"use client";

import Link from "next/link";
import { useProfile } from "@/context/portfolio-provider";

export function Footer() {
  const { profile } = useProfile();
  return (
    <footer>
      <div className="footer-inner">
        <span>© 2026 Janith Nishen</span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          {process.env.NODE_ENV !== "production" && (
            <Link href="/admin">Manage content</Link>
          )}
        </div>
      </div>
    </footer>
  );
}
