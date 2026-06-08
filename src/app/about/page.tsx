import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/atoms";

export const metadata: Metadata = {
  title: "About — Collective Studio | Established 2019",
  description:
    "A family-run knitwear manufacturing unit specializing in low MOQs. Established 2019, GOTS-certified organic options, transparent end-to-end production from Bangladesh & Amsterdam.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    num: "01 · Quality over volume",
    title: "The fiftieth piece equals the first.",
    body: "Led by our QC head Walter Meyer (38 years in fashion), every order goes through an end-to-end inspection. International standards, every single piece.",
  },
  {
    num: "02 · Genuine transparency",
    title: "You see every step.",
    body: "From yarn to dev to production to QC to ship — you know exactly where your order stands. No surprises. No guessing.",
  },
  {
    num: "03 · Sustainable by default",
    title: "GOTS-certified options on every line.",
    body: "Organic cotton, hemp blends, recycled performance fabrics, bamboo viscose — the right sustainable choice for every product class.",
  },
];

const MILESTONES = [
  { year: "2019", title: "Founded in Narayanganj", body: "Started with a single floor, a small team, and a simple promise: small minimums, big care." },
  { year: "2021", title: "First international brands", body: "Began collaborating with emerging fashion brands across Europe and North America." },
  { year: "2023", title: "GOTS certification", body: "Sustainable practices formalized — certified organic options available across our knitwear lines." },
  { year: "2025", title: "Amsterdam branch", body: "European presence opens to bring us closer to our partners and shorten the design-to-sample loop." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        dark
        crumb="About · Established 2019"
        title={<>Building tomorrow&apos;s fashion, <span className="accent">today.</span></>}
        lede="A family-run knitwear manufacturing unit specializing in low MOQs — helping you build lasting relationships with your end customers and open doors to new opportunities, sustainably."
      />

      <section className="about-story">
        <div className="container-wide grid">
          <Reveal as="div" className="copy">
            <p><strong>Established in 2019</strong>, our journey began with a simple yet powerful goal — to find smart, innovative ways to make apparel manufacturing more efficient, flexible, and accessible to our partners around the world.</p>
            <p>We recognized the significant challenges many emerging brands face when dealing with traditional manufacturing: prohibitively high minimum order quantities, rigid production systems, and lack of transparency. These barriers prevent creative entrepreneurs and small-to-medium brands from bringing their designs to life.</p>
            <p className="pull">We started small because we believe in quality over quantity.</p>
            <p>Over the years, we&apos;ve invested heavily in building a skilled, dedicated team and collaborated with brands across global markets to help them transform ideas into tangible products — developing new fabric blends, implementing sustainable practices, providing end-to-end manufacturing support.</p>
            <p>Today we&apos;re a father-daughter partnership with decades of garment industry experience and a fresh, modern approach to brand collaboration.</p>
          </Reveal>
          <Reveal as="div" className="photo" variant="clip" delay={0.1}>
            <Image src="/imagery/hero-about.jpg" alt="A studio interior with samples on display." width={700} height={805} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="values">
        <div className="container-wide">
          <Reveal as="div" className="section-head">
            <div>
              <span className="eyebrow">What we believe</span>
              <h2>Three principles, since day one.</h2>
            </div>
            <p>Every decision we make — from the yarn we source to the brands we say yes to — runs through these.</p>
          </Reveal>
          <div className="grid">
            {VALUES.map((v, i) => (
              <Reveal as="article" className="value" key={v.num} delay={i * 0.07}>
                <div className="num">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container-wide">
          <Reveal as="div" className="section-head">
            <div>
              <span className="eyebrow">The journey</span>
              <h2>Six years, one floor at a time.</h2>
            </div>
          </Reveal>
          <div className="grid">
            {MILESTONES.map((m, i) => (
              <Reveal as="article" className="milestone" key={m.year} delay={i * 0.06}>
                <div className="year">{m.year}</div>
                <div className="ttl">{m.title}</div>
                <p>{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="offices">
        <div className="container-wide">
          <Reveal as="div" className="head">
            <h2>Two offices, one team.</h2>
            <p style={{ maxWidth: "32ch", color: "rgba(255,255,255,0.7)", fontSize: 15.5, lineHeight: 1.55, margin: 0 }}>Production runs from Bangladesh; brand partnerships and creative coordination from Amsterdam.</p>
          </Reveal>
          <div className="grid">
            <Reveal as="article" className="office">
              <span className="tag">Head Office · Production</span>
              <h3>Narayanganj, Bangladesh</h3>
              <address>
                Plot-A-132, Road No. 02<br />
                BISCIC Industrial Area<br />
                Ponchabati, Narayanganj 1400<br />
                Bangladesh
              </address>
              <div className="meta">
                <a href="tel:+8801980055021">+880 1980 055021</a>
                <a href="tel:+8801980055022">+880 1980 055022</a>
                <a href="mailto:director@collectivestudioltd.com">director@collectivestudioltd.com</a>
              </div>
            </Reveal>
            <Reveal as="article" className="office" delay={0.07}>
              <span className="tag">Branch · Brand &amp; design</span>
              <h3>Amsterdam, Netherlands</h3>
              <address>
                Soetendaal 61<br />
                1081 BN Amsterdam<br />
                Netherlands
              </address>
              <div className="meta">
                <a href="mailto:director@collectivestudioltd.com">director@collectivestudioltd.com</a>
                <a href="/contact">Schedule a visit &rarr;</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="dark cta-band">
        <div className="container">
          <Reveal as="h2">Want to know us better?</Reveal>
          <Reveal as="p" delay={0.07}>The fastest way is a 20-minute intro call. We&apos;ll listen, ask a few questions, and tell you honestly if we&apos;re the right partner for your line.</Reveal>
          <Reveal as="div" className="ctas" delay={0.14}>
            <Button as="a" href="/contact" variant="white">Start a conversation</Button>
            <Button as="a" href="/founders" variant="outline-dark">Meet the founders</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
