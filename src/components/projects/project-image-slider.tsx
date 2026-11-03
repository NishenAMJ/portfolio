"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectImageSlider({
  title,
  screenshots,
}: {
  title: string;
  screenshots: string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + screenshots.length) % screenshots.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % screenshots.length);
  };

  return (
    <div className="project-slider" aria-label={`${title} screenshots`}>
      <div className="project-slider-frame">
        <Image
          src={activeScreenshot}
          alt={`${title} screenshot ${activeIndex + 1} of ${screenshots.length}`}
          fill
          sizes="(max-width: 800px) 100vw, 36vw"
          priority={activeIndex === 0}
          unoptimized={activeScreenshot.startsWith("https://")}
        />
        {screenshots.length > 1 && (
          <>
            {activeIndex > 0 && (
              <button
                className="project-slider-button previous"
                type="button"
                onClick={showPrevious}
                aria-label="Previous screenshot"
              >
                &lt;
              </button>
            )}
            {activeIndex < screenshots.length - 1 && (
              <button
                className="project-slider-button next"
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
              >
                &gt;
              </button>
            )}
          </>
        )}
      </div>
      {screenshots.length > 1 && (
        <div className="project-slider-dots" aria-label="Choose screenshot">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot}
              className={index === activeIndex ? "active" : ""}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
