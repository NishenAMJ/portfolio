"use client";

import { useState, type FormEvent } from "react";
import type { Project } from "@/types/portfolio";
import type { EditorSectionProps } from "./types";
import { Tags } from "@/components/ui/tags";
import { ProjectEditorDialog } from "./project-editor-dialog";

export function ProjectsManager({ profile, persist }: EditorSectionProps) {
  const [editing, setEditing] = useState<Project | null>(null);
  function saveProject(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;
    const d = new FormData(e.currentTarget);
    const next = {
      ...editing,
      title: String(d.get("title")),
      description: String(d.get("description")),
      category: String(d.get("category")),
      tags: String(d.get("tags"))
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    persist({
      ...profile,
      projects: profile.projects.some((p) => p.id === next.id)
        ? profile.projects.map((p) => (p.id === next.id ? next : p))
        : [...profile.projects, next],
    });
    setEditing(null);
  }
  return (
    <>
      <section className="admin-section">
        <div className="section-heading">
          <h2>Projects</h2>
          <button
            className="button secondary"
            onClick={() =>
              setEditing({
                id: `project-${Date.now()}`,
                title: "",
                description: "",
                tags: [],
                category: "Fintech / Mobile",
                published: false,
              })
            }
          >
            + Add project
          </button>
        </div>
        {profile.projects.map((p) => (
          <article className="admin-project" key={p.id}>
            <div>
              <small className={p.published ? "green" : "muted"}>
                {p.published ? "● Published" : "○ Draft"}
              </small>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <Tags items={p.tags} />
            </div>
            <div className="actions">
              <button
                className="button secondary"
                onClick={() => setEditing(p)}
              >
                Edit project
              </button>
              <button
                className="text-button"
                onClick={() =>
                  persist({
                    ...profile,
                    projects: profile.projects.map((item) =>
                      item.id === p.id
                        ? { ...item, published: !item.published }
                        : item,
                    ),
                  })
                }
              >
                {p.published ? "Move to draft" : "Publish"}
              </button>
            </div>
          </article>
        ))}
      </section>
      {editing && (
        <ProjectEditorDialog
          editing={editing}
          onClose={() => setEditing(null)}
          onSave={saveProject}
        />
      )}
    </>
  );
}
