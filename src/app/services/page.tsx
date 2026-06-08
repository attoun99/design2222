import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button, ArrowRight } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Services — Collective Studio | What we manufacture",
  description:
    "One factory. Eight categories. Tees, hoodies, leggings, activewear, beachwear, loungewear, intimates, and accessories — sustainable fabrics, low MOQ, 40-day delivery.",
  alternates: { canonical: "/services" },
};

const CATEGORIES = [
  { href: "/catalogue#tshirts", img: "cat-tees.jpg", size: "x6", cat: "Everyday", title: "Tees, tanks & polos", sub: "Crew · V-neck · Oversized · 140–220 GSM" },
  { href: "/catalogue#hoodies", img: "cat-hoodies.jpg", size: "x6", cat: "Comfort classics", title: "Hoodies & sweats", sub: "French terry · 280–500 GSM · GOTS option" },
  { href: "/catalogue#leggings", img: "cat-bottoms.jpg", size: "x3", cat: "Bottoms", title: "Joggers & leggings", sub: "Four-way stretch · Squat-proof" },
  { href: "/catalogue#underwear", img: "cat-intimates.jpg", size: "x3", cat: "Intimates", title: "Underwear in Supima", sub: "35% stronger than regular cotton" },
  { href: "/catalogue#beachwear", img: "cat-beach.jpg", size: "x4", cat: "Beach", title: "Beach & terry", sub: "Cotton Terry Towelling · Cover-ups" },
  { href: "/catalogue#activewear", img: "cat-active.jpg", size: "x4", cat: "Active", title: "Sport & activewear", sub: "Moisture-wicking · Flatlock seams" },
  { href: "/catalogue#lounge", img: "cat-lifestyle.jpg", size: "x4", cat: "Lifestyle", title: "Sleep & lounge", sub: "Modal · Bamboo viscose · Organic jersey" },
  { href: "/catalogue#accessories", img: "cat-accessories.jpg", size: "x12", cat: "Accessories", title: "Bags, hats, caps", sub: "Organic canvas · Recycled cotton · Hemp" },
];

const FEATURES = [
  {
    num: "01 / Transparency",
    title: "Know exactly where your order stands.",
    body: "From sampling to production to delivery — complete visibility at every stage. No surprises. No guessing.",
    meta: "Yarn → dev → production → QC → ship",
    cobalt: false,
  },
  {
    num: "02 / Quality",
    title: "International standards. Every single piece.",
    body: <>QC led by <strong>Walter Meyer (38 years in fashion)</strong>. Your first order and your fiftieth come off the line identical.</>,
    meta: "End-to-end QC pass · DDP delivery",
    cobalt: true,
  },
  {
    num: "03 / Low MOQ & Speed",
    title: "Start small. Dream big.",
    body: <>Just <strong>100 pieces per style/color</strong>. Test, launch limited editions, scale as you grow. <strong>40 days</strong> confirmation to delivery.</>,
    meta: "Sampling 10d · Production 25d · Ship 5d",
    cobalt: false,
  },
];

const STEPS = [
  { num: "Step 01", title: "Brief & sampling", days: "~10 days", body: "Share a sketch, tech pack, or a vibe. We come back with fabric options and a costed sample." },
  { num: "Step 02", title: "Sign off", days: "~2 days", body: "You approve the sample, fabric, trims, and pricing. We lock the spec sheet together." },
  { num: "Step 03", title: "Production & QC", days: "~25 days", body: "Yarn, knitting, cut, sew, finishing, end-to-end QC by Walter Meyer's team. Photos at every stage." },
  { num: "Step 04", title: "Ship DDP", days: "~5 days", body: "Branded packaging, DDP shipping to your warehouse or direct-to-customer. Door to door." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services · Everything we manufacture"
        title={<>Everything you need to launch your <span className="accent">clothing brand.</span></>}
        lede="One factory. Eight categories. Every fabric blend you've sketched on a napkin — and a few we'll suggest you try."
      >
        <Reveal as="div" className="ctas" delay={0.16} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32, justifyContent: "flex-start" }}>
          <Button as="a" href="/contact" variant="dark">Request samples</Button>
          <Button as="a" href="/catalogue" variant="soft">View full catalogue &rarr;</Button>
        </Reveal>
      </PageHero>

      <section className="section" style={{ background: "#fff", borderTop: "1px solid #e2e2e7" }}>
        <div className="container-wide">
          <Reveal as="div" className="section-head">
            <div>
              <span className="eyebrow">Eight categories</span>
              <h2>What we make.</h2>
            </div>
            <p>Click any category to see the full breakdown with styles, fabrics, GSM, and organic options.</p>
          </Reveal>
          <div className="svc-grid">
            {CATEGORIES.map((c, i) => (
              <Reveal as="a" href={c.href} className={`svc ${c.size}`} key={c.href} delay={Math.min(i, 6) * 0.06}>
                <Image src={`/imagery/${c.img}`} alt="" fill sizes="(max-width: 1023px) 100vw, 50vw" />
                <div className="cat">{c.cat}</div>
                <div className="ttl">{c.title}</div>
                <div className="sub">{c.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff", borderTop: "1px solid #e2e2e7" }}>
        <div className="container-wide">
          <Reveal as="div" className="section-head">
            <div>
              <span className="eyebrow">Why work with us</span>
              <h2>Built for small brands with big ideas.</h2>
            </div>
            <p>We started Collective Studio because emerging brands deserve a factory that says yes to small runs — and means it.</p>
          </Reveal>
          <div className="why-grid">
            {FEATURES.map((f, i) => (
              <Reveal
                as="article"
                className="feature"
                key={f.num}
                delay={i * 0.07}
                style={f.cobalt ? { background: "#494fdf", borderColor: "#494fdf", color: "#fff" } : undefined}
              >
                <div className="num" style={f.cobalt ? { color: "#fff" } : undefined}>{f.num}</div>
                <h3 style={f.cobalt ? { color: "#fff" } : undefined}>{f.title}</h3>
                <p style={f.cobalt ? { color: "rgba(255,255,255,0.85)" } : undefined}>{f.body}</p>
                <div className="meta" style={f.cobalt ? { color: "#fff" } : undefined}>{f.meta} <ArrowRight color={f.cobalt ? "#fff" : "#191c1f"} /></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container-wide">
          <Reveal as="div" className="section-head">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>Sketch to doorstep in 40 days.</h2>
            </div>
            <p>A predictable, transparent process — from your first message to DDP delivery at your customer&apos;s door.</p>
          </Reveal>
          <div className="grid">
            {STEPS.map((s, i) => (
              <Reveal as="article" className="step" key={s.num} delay={i * 0.06}>
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <div className="days">{s.days}</div>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark cta-band">
        <div className="container">
          <Reveal as="h2">Ready to make something?</Reveal>
          <Reveal as="p" delay={0.07}>Send a tech pack, a sketch, or just describe the kind of tee you want. We&apos;ll come back within 24 hours.</Reveal>
          <Reveal as="div" className="ctas" delay={0.14}>
            <Button as="a" href="/contact" variant="white">Start your collection</Button>
            <Button as="a" href="/catalogue" variant="outline-dark">Browse the catalogue</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
