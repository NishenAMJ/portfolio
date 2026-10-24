"use client";

import Image from "next/image";
import Link from "next/link";
import { useProfile } from "@/context/portfolio-provider";
import { ResumeLink } from "@/components/ui/resume-link";
import { CodeEditor } from "./code-editor";

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
            Hi, I’m <strong>Janith Nishen.</strong>
          </h1>
          <h2>{profile.headline}</h2>
          <p>
            Third-year Information Technology undergraduate at the{" "}
            <span className="bright">University of Moratuwa.</span> Building
            scalable backend systems, robust APIs, and thoughtful mobile
            experiences.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              Explore Projects{" "}
              <Image src="/design/explore.svg" alt="" width={12} height={12} />
            </Link>
            <ResumeLink />
            <Link className="button secondary" href="/about">
              About me ↗
            </Link>
          </div>
          <div className="affiliation">
            <Image
              src="/design/education.svg"
              alt=""
              width={14.667}
              height={12}
            />
            University of Moratuwa · Faculty of Information Technology
          </div>
        </div>
        <CodeEditor />
      </section>
      <div className="capabilities container"></div>
    </main>
  );
}
