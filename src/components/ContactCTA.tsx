"use client";

import { Button } from "./atoms";
import { Reveal } from "./Reveal";
import { useMagnetic } from "@/lib/motion";

export function ContactCTA() {
  const emailRef = useMagnetic<HTMLAnchorElement>();
  const bookRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="contact" className="dark cta-band">
      <div className="container">
        <Reveal as="h2">
          One message away<br />
          from your <span className="accent">next collection.</span>
        </Reveal>
        <Reveal as="p" delay={0.07}>Send us a sketch, a tech pack, or just a vibe. We&apos;ll come back within 24 hours with fabric options and a sampling plan.</Reveal>
        <Reveal as="div" className="ctas" delay={0.14}>
          <Button as="a" href="mailto:director@collectivestudioltd.com?subject=New%20collection%20enquiry" variant="white" className="magnetic" ref={emailRef}>Email Homaira</Button>
          <Button as="a" href="mailto:director@collectivestudioltd.com?subject=Intro%20call%20request" variant="cobalt" className="magnetic" ref={bookRef}>Book a 20-min intro</Button>
        </Reveal>
      </div>
    </section>
  );
}
