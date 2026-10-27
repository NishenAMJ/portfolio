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
            I’m an Information Technology undergraduate at the{" "}
            <span className="accent">University of Moratuwa</span>, passionate
            focused on backend services and mobile apps.
          </p>
          <p>
            I design REST APIs with JWT and role-based access, model data in
            PostgreSQL and Firebase, and share types end to end in TypeScript. I
            led a five-person team on Smart Credit+ and wrote firmware for the
            Smart Shooting Gallery.
          </p>
          <div className="callout">
            <h3>Looking for</h3>
            <p>A Software Engineering or Full-Stack internship.</p>
          </div>
          <div className="actions">
            <Link className="button primary" href="/projects">
              View Projects →
            </Link>
            <Link className="button secondary" href="/experience#contact">
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
