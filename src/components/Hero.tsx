"use client";

import Image from "next/image";
import { Button, Chip } from "./atoms";
import { useCountUp, useFiberField, useMagnetic } from "@/lib/motion";

function FiberField() {
  const fibers = useFiberField();
  return (
    <div className="fiber-field" aria-hidden="true">
      {fibers.map((f) => (
        <span
          key={f.id}
          className="fiber"
          style={{
            width: `${f.size.toFixed(1)}px`,
            height: `${f.size.toFixed(1)}px`,
            left: `${f.left.toFixed(1)}%`,
            top: `${f.top.toFixed(1)}%`,
            ["--o" as string]: f.o.toFixed(2),
            ["--dx" as string]: `${f.dx.toFixed(0)}px`,
            animationDuration: `${f.duration.toFixed(1)}s`,
            animationDelay: `${f.delay.toFixed(1)}s`,
          }}
        />
      ))}
    </div>
  );
}

function Stat({ count, suffix, label, value }: { count?: number; suffix?: string; label: string; value?: string }) {
  const { ref, value: countValue } = useCountUp(count ?? 0);
  return (
    <div className="strip-stat">
      <div className="n">
        {count !== undefined ? (
          <>
            <span ref={ref}>{countValue}</span>
            {suffix ? <span style={{ fontSize: 24, opacity: 0.55 }}>{suffix}</span> : null}
          </>
        ) : (
          value
        )}
      </div>
      <div className="l">{label}</div>
    </div>
  );
}

export function Hero() {
  const startRef = useMagnetic<HTMLAnchorElement>();
  const browseRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section className="dark hero">
      <FiberField />
      <div className="container">
        <div className="chip-wrap" style={{ marginBottom: 32, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Chip dot style={{ background: "rgba(79, 85, 241, 0.16)", color: "#7c81f4" }}>Sustainable knitwear · Bangladesh + Amsterdam</Chip>
        </div>
        <h1>
          <span className="ln">Dream it.</span>
          <span className="ln">Design it.</span>
          <span className="ln">We&apos;ll <span className="cobalt">make</span> it.</span>
        </h1>
        <div className="hero-row">
          <div className="hero-photo">
            <Image src="/imagery/hero-tees.jpg" alt="A rack of folded t-shirts in soft natural light." width={900} height={720} priority fetchPriority="high" />
          </div>
          <div className="hero-side">
            <p>
              Start your brand. We handle everything else. A family-run knitwear factory specializing in <strong style={{ color: "#fff", fontWeight: 600 }}>low MOQs</strong>, sustainable fabrics, and <strong style={{ color: "#fff", fontWeight: 600 }}>worldwide DDP delivery</strong>.
            </p>
            <div className="hero-cta-row">
              <Button as="a" href="/contact" variant="white" className="magnetic" ref={startRef}>Start your collection</Button>
              <Button as="a" href="/services" variant="outline-dark" className="magnetic" ref={browseRef}>Browse what we make</Button>
            </div>
          </div>
        </div>

        <div className="strip" style={{ marginTop: 88 }}>
          <div className="strip-grid">
            <Stat count={100} label="Min order · pcs / style / color" />
            <Stat count={40} suffix="d" label="Confirmation to delivery" />
            <Stat count={2019} label="Family-run since" />
            <Stat value="GOTS" label="Certified organic options" />
          </div>
        </div>
      </div>
    </section>
  );
}
