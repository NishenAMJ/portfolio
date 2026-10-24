"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ResumeLink } from "@/components/ui/resume-link";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Skills", "/about#skills"],
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Contact", "/experience#contact"],
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">&lt;JN /&gt;</span>Janith Nishen
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
        <div className="header-action">
          <ResumeLink />
          <Link className="contact-button" href="/experience#contact">
            Let’s talk <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
