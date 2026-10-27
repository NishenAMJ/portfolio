"use client";

import Image from "next/image";
import Link from "next/link";
import { useProfile } from "@/context/portfolio-provider";
import { ResumeLink } from "@/components/ui/resume-link";
import { Tags } from "@/components/ui/tags";
import { academics, leadership } from "@/data/academics";
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
            {academics.standing} at the{" "}
            <span className="bright">{academics.institution}.</span> I work on
            REST APIs, databases, and React Native apps, and I led the
            five-person team behind Smart Credit+.
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
            {academics.institution} · {academics.faculty}
          </div>
        </div>
        <CodeEditor />
      </section>
      <div className="capabilities container">
        <span>AT A GLANCE</span>
        <Tags
          items={[
            `${academics.degree.replace("B.Sc. (Hons) in ", "BSc (Hons) ")}`,
            "Team Lead · Smart Credit+",
            `${leadership.event} volunteer`,
            "Focus: backend & mobile",
          ]}
        />
      </div>
    </main>
  );
}
