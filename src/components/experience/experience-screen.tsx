import { Tags } from "@/components/ui/tags";
import { academics, leadership } from "@/data/academics";
import { ContactForm } from "./contact-form";

export function ExperienceScreen() {
  return (
    <main className="container page">
      <div className="eyebrow">EDUCATION & CONTACT</div>
      <h1>
        Experience & Journey<span className="accent">.</span>
      </h1>
      <p className="lead">
        Education, leadership, and what I’m studying now.
      </p>
      <div className="experience-grid">
        <section className="timeline" aria-label="Experience timeline">
          <h2 className="timeline-group">Education</h2>
          <article>
            <small className="accent">
              {academics.startYear} — Present · Expected{" "}
              {academics.expectedGraduation}
            </small>
            <h3>{academics.degree}</h3>
            <p className="accent">{academics.institution}</p>
            <p>
              Coursework in software architecture, algorithms, databases, and
              object-oriented design.
            </p>
            <Tags
              items={[
                "Software Architecture",
                "Data Structures & Algorithms",
                "Database Systems",
                "Object-Oriented Design",
              ]}
            />
          </article>
          <h2 className="timeline-group">Leadership & volunteering</h2>
          <article>
            <small className="green">2024 — 2026</small>
            <h3>{leadership.role}</h3>
            <p className="accent">{leadership.event}</p>
            <p>
              Supporting recruitment logistics, corporate relations, and
              technical operations for the university’s annual career fair.
            </p>
            <Tags
              items={["Teamwork", "Corporate Relations", "Operational Support"]}
            />
          </article>
          <h2 className="timeline-group">Currently learning</h2>
          <article>
            <h3>Courses & self-study</h3>
            <div className="learning-row">
              <span>Full-Stack Development & TypeScript</span>
              <span className="green">Completed</span>
            </div>
            <div className="learning-row">
              <span>Cloud & Distributed Systems</span>
              <span className="green">Completed</span>
            </div>
            <div className="learning-row">
              <span>Real-Time Systems & IoT</span>
              <span className="accent">Learning</span>
            </div>
          </article>
        </section>
        <ContactForm />
      </div>
    </main>
  );
}
