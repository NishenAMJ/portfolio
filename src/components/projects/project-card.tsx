import Link from "next/link";
import { Tags } from "@/components/ui/tags";
import { Dots } from "@/components/ui/window-dots";
import type { Project } from "@/types/portfolio";
import { ProjectPreview } from "./project-preview";

export function ProjectCard({
  project: p,
  index: i,
  github,
}: {
  project: Project;
  index: number;
  github: string;
}) {
  return (
    <article className="project-card">
      <div className="panel-bar">
        <Dots />
        <span>{p.title}</span>
        <span className="project-category">{p.category}</span>
      </div>
      <div className="project-content">
        <ProjectPreview kind={p.id} />
        <div className="project-info">
          <div className="eyebrow">
            0{i + 1} / {p.category}
          </div>
          <h2>{p.title}</h2>
          <h3>
            {p.id === "credit"
              ? "Decentralized P2P Lending Platform"
              : p.id === "gallery"
                ? "Wireless Control & Live Telemetry"
                : ""}
          </h3>
          <p>{p.description}</p>
          {["credit", "gallery"].includes(p.id) && (
            <div className="contributions">
              <h4>
                {p.id === "credit"
                  ? "Team Lead · 5-member team"
                  : "Firmware & Systems Engineering"}
              </h4>
              <ul>
                {(p.id === "credit"
                  ? [
                      "Cross-platform borrower app with offline caching and biometric authentication.",
                      "Modular REST backend with JWT authentication and role-based access.",
                      "Automated credit scoring and verifiable repayment workflows.",
                    ]
                  : [
                      "ESP32 and Arduino communication over UART and RF.",
                      "Gesture-controlled wearable with flex and gyroscope sensors.",
                      "Live scores and diagnostics delivered over WebSockets.",
                    ]
                ).map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}
          <Tags items={p.tags} />
          <div className="actions">
            <a
              className="button primary"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub ↗
            </a>
            <Link className="button secondary" href="/experience#contact">
              Discuss this project
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
