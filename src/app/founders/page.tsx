import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Founders — Collective Studio | Father & daughter",
  description:
    "Jashim Uddin and Homaira Jashim — a father-daughter partnership combining decades of textile expertise with a digital-native approach to brand collaboration.",
  alternates: { canonical: "/founders" },
};

const PILLARS = [
  {
    num: "01 · Operational depth",
    title: "Decades of supply-chain relationships, on call.",
    body: "Yarn suppliers, dye houses, trim sources, freight forwarders — the entire chain is one phone call away. Issues get resolved in hours, not weeks.",
    attr: "Led by Jashim Uddin",
  },
  {
    num: "02 · Brand fluency",
    title: "We speak emerging-brand.",
    body: "Tech packs, Slack updates, sample reviews over video, photo timelines — the way modern brands work, built into how we work.",
    attr: "Led by Homaira Jashim",
  },
  {
    num: "03 · Quality control",
    title: "38 years of QC, every piece.",
    body: "Walter Meyer leads our quality team — end-to-end inspection on every order. Your fiftieth piece equals the first.",
    attr: "Led by Walter Meyer",
  },
];

export default function FoundersPage() {
  return (
    <>
      <PageHero
        dark
        crumb="Founders · Father & daughter"
        title={<>When family meets <span className="accent">creativity.</span></>}
        lede="A father-daughter duo bringing your ideas to life with heart. Three decades of textile experience meets a new generation of digital-native brand partnership."
      />

      <section className="founders-intro">
        <div className="container-wide grid">
          <Reveal as="div">
            <h2>Two generations. One shared promise.</h2>
            <p>Collective Studio is a family business in the truest sense — built by a father who&apos;s spent his career in textiles, and a daughter who grew up on the factory floor and now leads how we work with modern brands.</p>
            <p>The result is a manufacturing partner unlike most others: the operational depth of a legacy mill, with the responsiveness, transparency, and digital fluency that today&apos;s emerging fashion brands actually need.</p>
          </Reveal>
          <Reveal as="div" delay={0.08}>
            <p className="pull">We say yes to small runs and we mean it.</p>
          </Reveal>
        </div>
      </section>

      <section className="portraits">
        <div className="container-wide">
          <div className="portraits-grid">
            <div className="portrait">
              <Reveal as="div" className="portrait-photo" variant="clip">
                <Image src="/imagery/founder-jashim.jpg" alt="Jashim Uddin, founder of Collective Studio." width={620} height={713} loading="lazy" />
              </Reveal>
              <Reveal as="div" delay={0.08}>
                <h2 className="portrait-name">Jashim Uddin</h2>
                <div className="portrait-role">Founder</div>
                <p className="portrait-bio">With decades of experience in the textile and garment industry, Jashim brings unparalleled expertise in manufacturing operations, supply chain management, and international trade. His vision — a manufacturing partner that prioritizes flexibility and quality over volume — has been the cornerstone of Collective Studio&apos;s philosophy.</p>
                <p className="portrait-bio">His deep understanding of the industry&apos;s complexities, combined with strong relationships across the supply chain — from yarn suppliers to logistics partners — ensures every order is handled with precision and care.</p>
                <div className="portrait-links">
                  <a href="mailto:director@collectivestudioltd.com">Email Jashim</a>
                  <a href="tel:+8801980055021">+880 1980 055021</a>
                </div>
              </Reveal>
            </div>

            <div className="portrait">
              <Reveal as="div" className="portrait-photo" variant="clip" delay={0.05}>
                <Image src="/imagery/founder-homaira.jpg" alt="Homaira Jashim, co-founder of Collective Studio." width={620} height={713} loading="lazy" />
              </Reveal>
              <Reveal as="div" delay={0.13}>
                <h2 className="portrait-name">Homaira Jashim</h2>
                <div className="portrait-role">Co-Founder</div>
                <p className="portrait-bio">Representing the new generation of fashion manufacturing leadership, Homaira brings fresh perspectives on sustainable practices, digital communication, and modern brand partnerships. Her understanding of what emerging brands need — flexibility, transparency, and genuine collaboration — has shaped how we approach every client relationship.</p>
                <p className="portrait-bio">Together, this father-daughter partnership combines time-tested industry knowledge with innovative thinking — a manufacturing partner that understands both the craft of garment making and the needs of modern fashion brands.</p>
                <div className="portrait-links">
                  <a href="mailto:director@collectivestudioltd.com">Email Homaira</a>
                  <a href="https://www.instagram.com/homaira_jemi" target="_blank" rel="noopener">Instagram</a>
                  <a href="https://www.linkedin.com/in/homaira-jemi-565920240" target="_blank" rel="noopener">LinkedIn</a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise">
        <div className="container-wide">
          <Reveal as="div" className="head">
            <h2>What this partnership actually gives you.</h2>
            <p>Three things you get from working with founders — not a sales team, not a middleman.</p>
          </Reveal>
          <div className="grid">
            {PILLARS.map((p, i) => (
              <Reveal as="article" className="pillar" key={p.num} delay={i * 0.07}>
                <div className="num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="attr">{p.attr}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="container">
          <Reveal as="q">We started small because we believe in quality over quantity.</Reveal>
          <Reveal as="cite" delay={0.08}>— Jashim &amp; Homaira</Reveal>
        </div>
      </section>

      <section className="dark cta-band">
        <div className="container">
          <Reveal as="h2">Talk to a founder, not a sales rep.</Reveal>
          <Reveal as="p" delay={0.07}>Twenty minutes on a call with Homaira. She&apos;ll listen, ask honest questions, and tell you if we&apos;re the right partner for your line.</Reveal>
          <Reveal as="div" className="ctas" delay={0.14}>
            <Button as="a" href="/contact" variant="white">Book a 20-min intro</Button>
            <Button as="a" href="/about" variant="outline-dark">Read the studio story</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
