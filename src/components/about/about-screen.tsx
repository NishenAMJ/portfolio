import Link from "next/link";
import { TargetIcon } from "@/components/ui/icons";
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
            <span className="accent">University of Moratuwa</span>, focused on
            backend services and mobile apps.
          </p>
          <p>
            I design REST APIs with JWT and role-based access, model data in
            PostgreSQL and Firebase, and share types end to end in TypeScript. I
            built the borrower mobile app for Smart Credit+ and designed the PCB
            for the Smart Shooting Gallery.
          </p>
          <div className="callout">
            <span className="icon-tile">
              <TargetIcon />
            </span>
            <div>
              <h3>CAREER GOAL</h3>
              <p>
                To land a Software Engineering or Full-Stack internship, work
                on real products, and keep growing my backend and mobile skills.
              </p>
            </div>
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
