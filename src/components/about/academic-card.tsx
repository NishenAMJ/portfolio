import type { ReactNode } from "react";
import {
  BookIcon,
  ChipIcon,
  CodeIcon,
  GraduationIcon,
} from "@/components/ui/icons";
import { academics } from "@/data/academics";

const cards: { icon: ReactNode; label: string; title: string; sub: string }[] = [
  {
    icon: <GraduationIcon />,
    label: "UNIVERSITY",
    title: academics.institution,
    sub: academics.faculty,
  },
  {
    icon: <BookIcon />,
    label: "DEGREE",
    title: academics.degree.replace("B.Sc. (Hons) in ", "BSc (Hons) "),
    sub: academics.standing,
  },
  {
    icon: <CodeIcon />,
    label: "PRIMARY FOCUS",
    title: "Backend & Mobile Development",
    sub: "Full-Stack Engineering",
  },
  {
    icon: <ChipIcon />,
    label: "CURRENTLY EXPLORING",
    title: "Real-Time Systems & IoT",
    sub: "Learning in progress",
  },
];

export function AcademicCard() {
  return (
    <div className="info-grid">
      {cards.map((c) => (
        <article className="info-card" key={c.label}>
          <span className="icon-tile">{c.icon}</span>
          <small>{c.label}</small>
          <h3>{c.title}</h3>
          <p>{c.sub}</p>
        </article>
      ))}
    </div>
  );
}
