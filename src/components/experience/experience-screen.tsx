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
        Education, experience, leadership, and certifications.
      </p>
      <div className="experience-grid">
        <section className="timeline" aria-label="Experience timeline">
          <h2 id="education" className="timeline-group">Education</h2>
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
          <h2 id="work" className="timeline-group">Work experience</h2>
          <article>
            <small className="green">Internship</small>
            <h3>Student Intern</h3>
            <p className="accent">People’s Bank</p>
          </article>
          <article>
            <small className="accent">Until 2022</small>
            <h3>Secondary education</h3>
            <p className="accent">Mahinda College</p>
            <p>Logistics committee member.</p>
          </article>
          <h2 id="leadership" className="timeline-group">Leadership & volunteering</h2>
          <article>
            <small className="green">2024 — 2026</small>
            <h3>{leadership.role}</h3>
            <p className="accent">{leadership.event}</p>
          </article>
          <h2 id="certifications" className="timeline-group">Certifications</h2>
          <article>
            <h3>Python for Beginners</h3>
            <p className="accent">University of Moratuwa</p>
          </article>
          <article>
            <small className="accent">Jul 2024</small>
            <h3>Responsive Web Design</h3>
            <p className="accent">freeCodeCamp</p>
          </article>
        </section>
        <ContactForm />
      </div>
    </main>
  );
}
