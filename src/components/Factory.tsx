"use client";

import { useState } from "react";
import { Button } from "./atoms";
import { Reveal } from "./Reveal";

const FACTORY_VIDEO_ID = "LLBgpG8b0kA";
const POSTER_FALLBACK = "/imagery/why-us.jpg";

export function Factory() {
  const [playing, setPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(`https://i.ytimg.com/vi/${FACTORY_VIDEO_ID}/maxresdefault.jpg`);

  return (
    <section id="factory" className="section" style={{ background: "#fff" }}>
      <div className="container-wide">
        <Reveal as="div" className="factory-card" variant="clip">
          <div className="factory-video">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${FACTORY_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Collective Studio — a peek from our latest factory visit"
                allow="accelerated-network; autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                className="factory-poster"
                onClick={() => setPlaying(true)}
                aria-label="Play factory visit video with Homaira Jashim"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={posterSrc}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={720}
                  onError={() => setPosterSrc(POSTER_FALLBACK)}
                />
                <span className="factory-play">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.14v13.72a.5.5 0 0 0 .77.42l10.29-6.86a.5.5 0 0 0 0-.84L8.77 4.72A.5.5 0 0 0 8 5.14z" />
                  </svg>
                </span>
                <span className="factory-poster-tag">Watch &middot; Factory visit with Homaira</span>
              </button>
            )}
          </div>
          <div className="factory-text">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>The factory</span>
            <h2>Nothing beats being on&#8209;site, a peek from our latest factory visit.</h2>
            <p>Go inside the floor with co-founder Homaira Jashim. We&apos;re open to brand visits, virtual walkthroughs, and live video from the production line &mdash; the same transparency we give every order.</p>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button as="a" href={`https://www.youtube.com/watch?v=${FACTORY_VIDEO_ID}`} target="_blank" rel="noopener" variant="white">Watch on YouTube</Button>
              <Button as="a" href="mailto:director@collectivestudioltd.com?subject=Factory%20visit%20request" variant="outline-dark">Schedule a visit</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
