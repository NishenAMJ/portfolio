import Image from "next/image";
import { Tags } from "@/components/ui/tags";
import { Dots } from "@/components/ui/window-dots";
import type { Project } from "@/types/portfolio";
import { ProjectPreview } from "./project-preview";

const isHttps = (url?: string): url is string => !!url?.startsWith("https://");
const isImage = (src: string) => src.startsWith("/") || isHttps(src);

export function ProjectCard({
  project: p,
  index: i,
  github,
}: {
  project: Project;
  index: number;
  github: string;
}) {
  const screenshots = (p.screenshots ?? []).filter(isImage);
  const meta = [p.status, p.dateRange].filter(Boolean).join(" · ");
  return (
    <article className="project-card">
      <div className="panel-bar">
        <Dots />
        <span>{p.title}</span>
        <span className="project-category">{p.category}</span>
      </div>
      <div className="project-content">
        {screenshots.length > 0 ? (
          <div className="project-shots">
            {screenshots.map((src, n) => (
              <Image
                key={src}
                src={src}
                alt={`${p.title} screenshot ${n + 1}`}
                width={640}
                height={400}
                unoptimized={src.startsWith("https://")}
              />
            ))}
          </div>
        ) : (
          <div>
            <ProjectPreview kind={p.id} />
            <small className="preview-caption">
              Illustrative preview, not live data.
            </small>
          </div>
        )}
        <div className="project-info">
          <div className="eyebrow">
            0{i + 1} / {p.category}
            {meta && ` · ${meta}`}
          </div>
          <h2>{p.title}</h2>
          {p.subtitle && <h3>{p.subtitle}</h3>}
          <p>{p.description}</p>
          {(p.role || p.highlights?.length) && (
            <div className="contributions">
              {p.role && <h4>{p.role}</h4>}
              {p.highlights && (
                <ul>
                  {p.highlights.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {p.result && (
            <p className="project-result">
              <strong>Result:</strong> {p.result}
            </p>
          )}
          <Tags items={p.tags} />
          <div className="actions">
            {isHttps(p.repoUrl) ? (
              <a
                className="button primary"
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                View repository ↗
              </a>
            ) : (
              <a
                className="button secondary"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile ↗
              </a>
            )}
            {isHttps(p.demoUrl) && (
              <a
                className="button secondary"
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
