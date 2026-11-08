"use client";

import Link from "next/link";
import { initial as profile } from "@/data/portfolio";
import { useState } from "react";
import { ProjectCard } from "./project-card";

export function ProjectsScreen() {

  const [filter, setFilter] = useState("All");
  const projects = profile.projects.filter((p) => p.published);
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  return (
    <main className="container page">
      <div className="eyebrow">SELECTED WORK</div>
      <div className="page-heading">
        <div>
          <h1>Things I’ve built.</h1>
          <p className="lead">
            Full-stack products, mobile apps, and embedded systems.
          </p>
        </div>
        <div className="filters" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              className={filter === c ? "selected" : ""}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
            >
              {c}
              <span>
                {c === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="project-list">
        {projects
          .filter((p) => filter === "All" || p.category === filter)
          .map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              github={profile.github}
            />
          ))}
      </div>
      {projects.length === 0 && (
        <p className="empty">Projects will appear here once published.</p>
      )}
      <div className="bottom-callout">
        <div>
          <h3>Interested in how it all works?</h3>
          <p>
            I’m happy to walk you through the architecture and the decisions
            behind it.
          </p>
        </div>
        <Link className="button primary" href="/contact">
          Let’s talk →
        </Link>
      </div>
    </main>
  );
}
