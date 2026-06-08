"use client";

import Image from "next/image";
import { useTilt } from "@/lib/motion";
import { Reveal } from "./Reveal";

function FounderPhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useTilt<HTMLDivElement>();
  return (
    <div className="ph-3d">
      <div className="ph" ref={ref}>
        <div className="ph-inner">
          <Image src={src} alt={alt} fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: "cover" }} loading="lazy" />
          <span className="ph-glare" aria-hidden="true"></span>
          <span className="ph-ring" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  );
}

export function Founders() {
  return (
    <section id="founders" className="dark band">
      <div className="container-wide">
        <Reveal as="div" className="section-head">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>When family meets creativity.</h2>
          </div>
          <p>A father-daughter duo bringing your ideas to life with heart. Three decades of textile experience meets a new generation of digital-native brand partnership.</p>
        </Reveal>

        <div className="founders-grid">
          <Reveal as="article" className="founder" delay={0}>
            <FounderPhoto src="/imagery/founder-jashim.jpg" alt="Jashim Uddin, founder of Collective Studio." />
            <div>
              <div className="name">Jashim Uddin</div>
              <div className="role">Founder</div>
              <p>Decades in the textile and garment industry. Brings the operational depth, supply-chain relationships and international-trade fluency that runs the factory floor.</p>
            </div>
          </Reveal>
          <Reveal as="article" className="founder" delay={0.07}>
            <FounderPhoto src="/imagery/founder-homaira.jpg" alt="Homaira Jashim, co-founder of Collective Studio." />
            <div>
              <div className="name">Homaira Jashim</div>
              <div className="role">Co-Founder</div>
              <p>A new generation of manufacturing leadership. Brings sustainable practice, digital fluency and the modern brand-partnership style that makes us easy to work with.</p>
            </div>
          </Reveal>
        </div>

        <div className="section-cta" style={{ marginTop: 48 }}>
          <a href="/founders" className="btn btn-white">Meet the founders &rarr;</a>
          <a href="/about" className="btn btn-outline-dark">Read the studio story</a>
        </div>
      </div>
    </section>
  );
}
