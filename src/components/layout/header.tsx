"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DownloadIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { initial as profile } from "@/data/portfolio";

export function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Skills", "/about#skills"],
    ["Projects", "/projects"],
    ["Education", "/experience#education"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          Janith
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="main-nav"
          className={open ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={pathname === href ? "active" : ""}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <div className="header-action">
          {profile.resume ? (
            <a
              className="contact-button"
              href={profile.resume}
              download={profile.resumeName}
            >
              <DownloadIcon /> Download CV
            </a>
          ) : (
            <Link className="contact-button" href="/contact">
              Let’s talk <span>↗</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
