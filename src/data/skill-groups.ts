export type SkillGroup = {
  title: string;
  description: string;
  icon: "code" | "monitor" | "server" | "database" | "wrench";
  items: string[];
};

export const groups: SkillGroup[] = [
  {
    title: "Programming Languages",
    description: "Languages across web, mobile, and software engineering work.",
    icon: "code",
    items: ["TypeScript", "JavaScript", "Java", "Python", "C"],
  },
  {
    title: "Frontend",
    description: "Web and cross-platform mobile interfaces.",
    icon: "monitor",
    items: ["React.js", "Next.js", "React Native", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    description: "Server-side services and REST APIs.",
    icon: "server",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    description: "Relational and document data stores.",
    icon: "database",
    items: ["Firebase", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "DevOps & Cloud",
    description: "Development environments, automation, containers, and cloud platforms.",
    icon: "wrench",
    items: ["Linux", "Bash", "Docker", "GitHub Actions", "AWS"],
  },
  {
    title: "Tools",
    description: "Version control, API testing, and development tools.",
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
  Linux: "linux",
  Bash: "bash",
  Docker: "docker",
  "GitHub Actions": "githubactions",
  AWS: "amazonwebservices",
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

export const brandIconFiles: Record<string, string> = {
  AWS: "amazonwebservices-original-wordmark.svg",
};
