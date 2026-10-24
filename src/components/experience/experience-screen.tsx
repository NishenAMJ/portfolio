import { Tags } from "@/components/ui/tags";
import { ContactForm } from "./contact-form";

export function ExperienceScreen() {
  return (
    <main className="container page">
      <div className="eyebrow">EDUCATION & CONTACT</div>
      <h1>
        Experience & Journey<span className="accent">.</span>
      </h1>
      <p className="lead">
        A foundation in technology. A curiosity that keeps growing.
      </p>
      <div className="experience-grid">
        <section className="timeline" aria-label="Experience timeline">
          <article>
            <small className="accent">2022 — Present · Expected 2026</small>
            <h3>B.Sc. (Hons) in Information Technology</h3>
            <p className="accent">University of Moratuwa</p>
            <p>
              Building a strong foundation in software systems, computational
              thinking, and modern application development.
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
          <article>
            <small className="green">2024 — 2026</small>
            <h3>Organizing Committee & Technical Volunteer</h3>
            <p className="accent">Faculty Career Fair 2026</p>
            <p>
              Supporting recruitment logistics, corporate relations, and
              technical operations for the university’s annual career fair.
            </p>
            <Tags
              items={["Teamwork", "Corporate Relations", "Operational Support"]}
            />
          </article>
          <article>
            <h3>Continuous learning</h3>
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
