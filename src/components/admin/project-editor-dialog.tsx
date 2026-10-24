"use client";

import type { FormEvent } from "react";
import type { Project } from "@/types/portfolio";

export function ProjectEditorDialog({
  editing,
  onClose,
  onSave,
}: {
  editing: Project;
  onClose: () => void;
  onSave: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="modal-backdrop" onClick={() => onClose()}>
      <dialog
        ref={(node) => {
          if (node && !node.open) node.showModal();
        }}
        aria-labelledby="edit-title"
        onCancel={() => onClose()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="section-heading">
          <h2 id="edit-title">
            {editing.title ? "Edit project" : "New project"}
          </h2>
          <button
            className="text-button"
            onClick={() => onClose()}
            aria-label="Close project editor"
          >
            ✕
          </button>
        </div>
        <form onSubmit={onSave}>
          <label>
            Project name
            <input
              name="title"
              defaultValue={editing.title}
              required
              autoFocus
              maxLength={100}
            />
          </label>
          <label>
            Category
            <select name="category" defaultValue={editing.category}>
              <option>Fintech / Mobile</option>
              <option>Embedded / IoT</option>
              <option>Web Development</option>
            </select>
          </label>
          <label>
            Description
            <textarea
              name="description"
              defaultValue={editing.description}
              required
              rows={4}
              maxLength={1000}
            />
          </label>
          <label>
            Technologies, separated by commas
            <input
              name="tags"
              defaultValue={editing.tags.join(", ")}
              maxLength={300}
            />
          </label>
          <div className="actions">
            <button className="button primary" type="submit">
              Save project
            </button>
            <button
              className="button secondary"
              type="button"
              onClick={() => onClose()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
