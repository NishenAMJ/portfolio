"use client";

import Image from "next/image";
import Link from "next/link";
import { useProfile } from "@/context/portfolio-provider";
import { ResumeLink } from "@/components/ui/resume-link";
import { TypedRole } from "@/components/ui/typed-role";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { academics } from "@/data/academics";
import { CodeEditor } from "./code-editor";

const roles = [
  "Aspiring Software Engineer",
  "Creative Problem Solver",
  "Curious Learner",
];

export function HomeScreen() {
  const { profile } = useProfile();
  return (
    <main className="home-main">
      <section className="hero container">
        <div className="hero-copy">
          {profile.available && (
            <div className="availability">
              <span />
              Open to internship opportunities
            </div>
          )}
          <h1>
            <span className="hi">Hi, I’m</span>
            <strong>Janith</strong>
            <strong className="grad">Nishen</strong>
          </h1>
          <TypedRole roles={roles} />
          <h2>{profile.headline}</h2>
          <p>
            {academics.standing} at the{" "}
            <span className="bright">{academics.institution}.</span> I enjoy
            exploring new technologies, turning ideas into practical solutions,
            and learning through hands-on projects. I’m eager to collaborate,
            contribute to meaningful work, and grow as a software engineer.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              View My Projects{" "}
              <Image src="/design/explore.svg" alt="" width={12} height={12} />
            </Link>
            <Link className="button secondary" href="/contact">
              Contact Me
            </Link>
            <ResumeLink />
          </div>
          <div className="socials">
            <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
            <a
              href={profile.email ? `mailto:${profile.email}` : "/contact"}
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
          <Image
            src="/profile-cutout.webp"
            alt="Janith Nishen"
            width={1003}
            height={1041}
            sizes="(max-width: 800px) 90vw, 460px"
            loading="eager"
          />
          </div>
          <div className="portrait-badge">
            <small>DRIVEN BY CURIOSITY</small>
            <strong>Building with purpose</strong>
          </div>
        </div>
      </section>
      <section id="profile-code" className="home-code container" aria-label="Profile in code">
        <CodeEditor />
      </section>
    </main>
  );
}
