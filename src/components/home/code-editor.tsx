"use client";

import { Dots } from "@/components/ui/window-dots";
import { useProfile } from "@/context/portfolio-provider";
import { groups } from "@/data/skill-groups";

const files = [
  {
    name: "profile",
    lines: [
      "import { Developer } from '@uom/IT';",
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
      "  passionateAbout: 'Solving real world problems', ",
      "  alwaysLearning: true",
      "};",
    ],
  },
];

export function CodeEditor() {
  const { profile } = useProfile();
  const known = groups.flatMap((group) => group.items);
  const extra = profile.skills.filter((skill) => !known.includes(skill));
  const skillGroups = groups.map((group) => ({
    title: group.title,
    items: group.items.filter((skill) => profile.skills.includes(skill)),
  }));
  if (extra.length > 0) skillGroups.push({ title: "More tools", items: extra });
  const quote = (value: string) =>
    `'${JSON.stringify(value).slice(1, -1).replace(/'/g, "\\'")}'`;
  const editorFiles = [
    ...files,
    {
      name: "skills",
      lines: [
        "export const skills = {",
        ...skillGroups.flatMap((group) => [
          `  ${quote(group.title)}: [`,
          `    ${group.items.map(quote).join(", ")}`,
          "  ],",
        ]),
        "};",
      ],
    },
  ];
  return (
    <div className="code-editor">
      <div className="editor-bar">
        <Dots />
      </div>
      <div className="editor-split">
        {editorFiles.map((f) => (
          <div className="editor-pane" key={f.name}>
            <div className="pane-tab">
              <span>TS</span> {f.name}.ts
            </div>
            <div
              className="code-body"
              tabIndex={0}
              aria-label={`${f.name}.ts`}
            >
              {f.lines.map((line, i) => (
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
