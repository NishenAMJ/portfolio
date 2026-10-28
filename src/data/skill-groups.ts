export type SkillGroup = {
  title: string;
  description: string;
  icon: "code" | "monitor" | "server" | "database" | "wrench";
  items: string[];
};

export const groups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Languages across web, mobile, and embedded work.",
    icon: "code",
    items: ["TypeScript", "JavaScript", "Java", "Python", "C"],
  },
  {
    title: "Frontend & Mobile",
    description: "Web and cross-platform mobile interfaces.",
    icon: "monitor",
    items: ["React.js", "Next.js", "React Native", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    description: "Server-side services and REST APIs.",
    icon: "server",
    items: ["NestJS", "Next.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases & Cloud",
    description: "Relational and document data stores.",
    icon: "database",
    items: ["Firebase", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Developer Tools & Workflow",
    description: "Version control, API testing, and editors.",
    icon: "wrench",
    items: ["Git", "GitHub", "Postman", "VS Code", "Android Studio"],
  },
];

// Devicon slugs (https://devicon.dev); skills without one fall back to a plain chip.
export const brandIcons: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Java: "java",
  Python: "python",
  C: "c",
  "React.js": "react",
  "React Native": "react",
  "Next.js": "nextjs",
  HTML5: "html5",
  CSS3: "css3",
  NestJS: "nestjs",
  "Node.js": "nodejs",
  "Express.js": "express",
  Firebase: "firebase",
  MongoDB: "mongodb",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
  "VS Code": "vscode",
  "Android Studio": "androidstudio",
};
