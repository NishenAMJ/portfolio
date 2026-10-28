import { Dots } from "@/components/ui/window-dots";

const files = [
  {
    name: "profile",
    lines: [
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
    ],
  },
  {
    name: "skills",
    lines: [
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
    ],
  },
];

export function CodeEditor() {
  return (
    <div className="code-editor">
      <div className="editor-bar">
        <Dots />
      </div>
      <div className="editor-split">
        {files.map((f) => (
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
