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
            about resilient systems and seamless mobile experiences.
          </p>
          <p>
            I care about clean abstractions, efficient databases, and end-to-end
            type safety. From backend services to mobile applications, I turn
            complex requirements into software that is simple to use and easy to
            maintain.
          </p>
          <div className="callout">
            <h3>What I’m looking for</h3>
            <p>
              Software Engineering and Full-Stack internship opportunities where
              I can contribute, learn, and build meaningful products.
            </p>
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
