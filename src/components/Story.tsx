import Image from "next/image";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="story" className="section" style={{ background: "#fff" }}>
      <div className="container-wide">
        <Reveal as="div" className="section-head">
          <div>
            <span className="eyebrow">About us</span>
            <h2>Building tomorrow&apos;s fashion, today.</h2>
          </div>
          <p>A knitwear manufacturing unit specializing in low MOQs &mdash; helping you build lasting relationships with your end customers and open doors to new opportunities, sustainably.</p>
        </Reveal>

        <div className="story-grid">
          <Reveal as="div" className="story-copy">
            <p>
              <strong>Established in 2019</strong>, our journey began with a simple, powerful goal &mdash; to make apparel manufacturing more efficient, flexible, and accessible for emerging brands worldwide.
            </p>
            <p className="pull">
              We started small because we believe in quality over quantity.
            </p>
            <p>
              Today we&apos;re a father-daughter partnership with decades of garment industry experience and a fresh, modern approach to brand collaboration.
            </p>
            <div className="section-cta" style={{ marginTop: 32, justifyContent: "flex-start" }}>
              <a href="/about" className="btn btn-outline-light">Read the full studio story &rarr;</a>
            </div>
          </Reveal>
          <div className="story-side">
            <Reveal as="div" className="story-img" variant="clip">
              <Image src="/imagery/hero-about.jpg" alt="A studio interior with samples on display." width={700} height={805} loading="lazy" />
            </Reveal>
            <dl className="story-meta">
              <div><dt>Founded</dt><dd>2019</dd></div>
              <div><dt>Head office</dt><dd>Narayanganj, Bangladesh</dd></div>
              <div><dt>Branch</dt><dd>Amsterdam, Netherlands</dd></div>
              <div><dt>Specialty</dt><dd>Sustainable knitwear, low MOQ</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
