import { Tags } from "@/components/ui/tags";
import { academics, leadership } from "@/data/academics";

export function ExperienceScreen() {
  return (
    <main className="container page journey-page">
      <div className="eyebrow">EDUCATION & EXPERIENCE</div>
      <h1>Experience & Journey<span className="accent">.</span></h1>
      <p className="lead">My education, practical experience, and continued learning.</p>

      <section id="education" className="journey-section" aria-labelledby="education-heading">
        <div className="journey-heading"><span>01</span><h2 id="education-heading">Education</h2></div>
        <div className="education-timeline">
          <article className="journey-card">
            <small className="accent">{academics.startYear} — Present</small>
            <h3>{academics.degree}</h3>
            <p className="bright">{academics.institution}</p>
            <div className="academic-summary">
              <span>CGPA <strong>{academics.cgpa}</strong></span>
              <span>Expected graduation <strong>{academics.expectedGraduation}</strong></span>
            </div>
            <Tags items={["Software Architecture", "Data Structures & Algorithms", "Database Systems", "Object-Oriented Design"]} />
          </article>
          <article className="journey-card">
            <small className="accent">Until 2022</small>
            <h3>Mahinda College</h3>
            <p className="bright">Secondary education</p>
            <p>G.C.E. Advanced Level — Physical Science Stream (2022)</p>
            <p className="bright">Results: ABB</p>
            <Tags items={["Physics: A", "Chemistry: B", "Combined Mathematics: B"]} />
          </article>
        </div>
      </section>

      <section id="work" className="journey-section" aria-labelledby="work-heading">
        <div className="journey-heading"><span>02</span><h2 id="work-heading">Work experience</h2></div>
        <article className="journey-card">
          <small className="green">Internship</small>
          <h3>Student Intern</h3>
          <p className="bright">People’s Bank</p>
        </article>
      </section>

      <section id="leadership" className="journey-section" aria-labelledby="leadership-heading">
        <div className="journey-heading"><span>03</span><h2 id="leadership-heading">Leadership & volunteering</h2></div>
        <article className="journey-card">
          <small className="accent">{leadership.year}</small>
          <h3>{leadership.role}</h3>
          <p className="bright">{leadership.event}</p>
        </article>
      </section>

      <section id="certifications" className="journey-section" aria-labelledby="certifications-heading">
        <div className="journey-heading"><span>04</span><h2 id="certifications-heading">Certifications</h2></div>
        <div className="journey-card-grid">
          <article className="journey-card">
            <h3>Python for Beginners</h3>
            <p>University of Moratuwa</p>
          </article>
          <article className="journey-card">
            <small className="accent">Jul 2024</small>
            <h3>Responsive Web Design</h3>
            <p>freeCodeCamp</p>
          </article>
        </div>
      </section>
    </main>
  );
}
