"use client";

import { useState } from "react";
import { Dots } from "@/components/ui/window-dots";

export function CodeEditor() {
  const [tab, setTab] = useState("profile");
  const lines =
    tab === "profile"
      ? [
          "import { Developer } from '@uom/engineering';",
          "",
          "export const janithNishen: Developer = {",
          "  role: 'Software Engineer',",
          "  institution: 'University of Moratuwa',",
          "  degree: 'BSc (Hons) in IT',",
          "",
          "  focus: [",
          "    'Backend Systems',",
          "    'REST APIs',",
          "    'Mobile Applications'",
          "  ],",
          "",
          "  passionateAbout: 'Solving real problems',",
          "  alwaysLearning: true",
          "};",
        ]
      : [
          "export const skills = {",
          "  languages: [",
          "    'TypeScript', 'Java', 'Python'",
          "  ],",
          "  frontend: ['React', 'React Native'],",
          "  backend: ['NestJS', 'Node.js'],",
          "  databases: [",
          "    'PostgreSQL', 'MongoDB', 'Firebase'",
          "  ],",
          "  tools: ['Git', 'Postman', 'VS Code']",
          "};",
        ];
  return (
    <div className="code-editor">
      <div className="editor-bar">
        <Dots />
        <div role="tablist" aria-label="Code files">
          {["profile", "skills"].map((t) => (
            <button
              role="tab"
              aria-selected={t === tab}
              aria-controls="code-panel"
              id={`tab-${t}`}
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "selected" : ""}
            >
              <span>TS</span> {t}.ts
            </button>
          ))}
        </div>
      </div>
      <div
        className="code-body"
        role="tabpanel"
        id="code-panel"
        aria-labelledby={`tab-${tab}`}
        tabIndex={0}
      >
        {lines.map((line, i) => (
          <div className="code-line" key={i}>
            <span className="line-number" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <code>
              {line
                .split(/('[^']*'|\b(?:import|from|export|const|true)\b)/g)
                .map((part, j) => (
                  <span
                    key={j}
                    className={
                      part.startsWith("'")
                        ? "code-string"
                        : /^(import|from|export|const|true)$/.test(part)
                          ? "code-keyword"
                          : undefined
                    }
                  >
                    {part}
                  </span>
                ))}
            </code>
          </div>
        ))}
      </div>
      <div className="editor-footer">
        <span>TypeScript</span>
        <span>Built with curiosity.</span>
      </div>
    </div>
  );
}
