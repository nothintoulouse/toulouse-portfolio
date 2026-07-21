"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "./work";

const BARS = [18, 36, 62, 28, 76, 48, 88, 40, 68, 32, 54, 22];

/**
 * A scroll-snap carousel that degrades to a plain horizontal scroller.
 *
 * The track is the scroll container and the source of truth for position; the
 * dots and arrows only ever *drive* it and read back from it via an observer.
 * That way a swipe, a keypress, and a dot click all converge on one state
 * instead of fighting an index held in React.
 */
export default function Carousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  /* Relative moves read this, not `active`. A smooth scroll takes ~400ms, and
     two quick arrow presses would otherwise both compute from the pre-scroll
     index and land one slide short. */
  const activeRef = useRef(0);
  /* Set while a programmatic scroll is in flight. The scroll handler still
     drives the dots so they animate along, but it must not overwrite the
     index the user asked for with one the animation merely passes through. */
  const settleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Read position back off the scroller rather than assuming our own writes
  // landed — a swipe never goes through goTo() at all.
  //
  // Nearest-to-centre, not "is it visible": on a wide monitor two slides are
  // both well over half visible at once, so a visibility test picks whichever
  // entry happened to fire last and the dots disagree with the eye.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-slide]"));

    let frame = 0;
    const measure = () => {
      frame = 0;
      const mid = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDistance = Infinity;
      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - mid);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });
      if (!settleRef.current) activeRef.current = best;
      setActive(best);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    track.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      track.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>("[data-slide]");
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    const target = slides[clamped];
    if (!target) return;
    activeRef.current = clamped;
    setActive(clamped);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (settleRef.current) clearTimeout(settleRef.current);
    settleRef.current = setTimeout(() => {
      settleRef.current = null;
    }, reduced ? 0 : 700);
    track.scrollTo({
      left: target.offsetLeft - (track.clientWidth - target.clientWidth) / 2,
      behavior: reduced ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => () => {
    if (settleRef.current) clearTimeout(settleRef.current);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeRef.current + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeRef.current - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(projects.length - 1);
    }
  };

  return (
    <section
      className="carousel"
      id="work"
      aria-roledescription="carousel"
      aria-label="Selected work"
    >
      <div
        className="carousel-track"
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label="Selected work, use arrow keys to move between projects"
      >
        {projects.map((project, index) => (
          <article
            key={project.slug}
            data-slide
            id={`work-${project.slug}`}
            className={`slide ${project.ground}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
          >
            <div className={`slide-media slide-media-${project.media.kind === "image" ? project.media.fit : "graphic"}`}>
              {project.media.kind === "image" ? (
                <Image
                  src={project.media.src}
                  alt={project.media.alt}
                  width={project.media.width}
                  height={project.media.height}
                  priority={index === 0}
                />
              ) : (
                <div className="graphic">
                  <figure>
                    <div className="voice-visual" aria-hidden="true">
                      {BARS.map((height, i) => (
                        <i key={i} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                    <figcaption>Voice Inventory Assistant</figcaption>
                  </figure>
                  <figure>
                    <div className="agent-flow" aria-hidden="true">
                      <span>iMessage</span>
                      <b>→</b>
                      <span>Queue</span>
                      <b>→</b>
                      <span>Agent</span>
                      <b>→</b>
                      <span>Tools</span>
                    </div>
                    <figcaption>LAUTREC agent harness</figcaption>
                  </figure>
                </div>
              )}
            </div>

            <div className="slide-body">
              <p className="eyebrow">{project.eyebrow}</p>
              <h2 className="slide-title">{project.title}</h2>
              <p className="slide-summary">{project.summary}</p>
              <dl className="slide-metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.value}</dt>
                    <dd>{metric.label}</dd>
                  </div>
                ))}
              </dl>
              <ul className="inline-list" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.link ? (
                <a className="text-link" href={project.link.href} target="_blank" rel="noreferrer">
                  {project.link.label} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => goTo(activeRef.current - 1)}
          disabled={active === 0}
          aria-label="Previous project"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="carousel-dots">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className="carousel-dot"
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.title}`}
              aria-current={index === active}
            />
          ))}
        </div>

        <p className="carousel-count" aria-live="polite">
          <strong>{String(active + 1).padStart(2, "0")}</strong>
          <span aria-hidden="true"> / </span>
          <span className="visually-hidden">of </span>
          {String(projects.length).padStart(2, "0")}
        </p>

        <button
          type="button"
          className="carousel-arrow"
          onClick={() => goTo(activeRef.current + 1)}
          disabled={active === projects.length - 1}
          aria-label="Next project"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
