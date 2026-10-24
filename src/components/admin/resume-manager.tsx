"use client";

import type { EditorSectionProps } from "./types";
import { ResumeLink } from "@/components/ui/resume-link";

export function ResumeManager({
  profile,
  persist,
  onStatus,
}: EditorSectionProps & { onStatus: (message: string) => void }) {
  return (
    <section className="admin-section panel resume-manager">
      <h2>Résumé</h2>
      <p>
        {profile.resumeName || "Upload your résumé to enable CV downloads."}
      </p>
      <label className="upload">
        Choose a PDF
        <input
          aria-label="Upload résumé PDF"
          type="file"
          accept="application/pdf"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            if (
              file.type !== "application/pdf" ||
              file.size > 2 * 1024 * 1024
            ) {
              onStatus("Choose a PDF smaller than 2 MB.");
              return;
            }
            const reader = new FileReader();
            reader.onload = () =>
              persist({
                ...profile,
                resume: String(reader.result),
                resumeName: file.name,
              });
            reader.onerror = () => onStatus("The PDF could not be read.");
            reader.readAsDataURL(file);
          }}
        />
        <small>PDF · up to 2 MB</small>
      </label>
      <ResumeLink />
    </section>
  );
}
