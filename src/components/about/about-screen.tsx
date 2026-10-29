import Link from "next/link";
import { AcademicCard } from "./academic-card";
import { SkillsSection } from "./skills-section";

export function AboutScreen() {
  return (
    <main className="container page">
      <div className="eyebrow">ABOUT ME</div>
      <section className="about-grid">
        <div>
          <h1>
            Engineering with curiosity.
            <br />
            <em>Building with purpose.</em>
          </h1>
          <p className="lead">
            I like understanding how things work, breaking down unfamiliar
            problems, and improving an idea through experimentation and feedback.
          </p>
          <p>
            Team projects have taught me to value clear communication, shared
            responsibility, and learning from different perspectives. I aim to
            bring that mindset to my work: ask thoughtful questions, stay open to
            feedback, and follow through on what I take on.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              View Projects →
            </Link>
            <Link className="button secondary" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
        <AcademicCard />
      </section>
      <SkillsSection />
    </main>
  );
}
