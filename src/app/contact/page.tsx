import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Contact — Collective Studio | We reply within 24 hours",
  description:
    "Send a sketch, a tech pack, or just a vibe. Tell us what you want to make and we'll come back within 24 hours with fabric options and a sampling plan.",
  alternates: { canonical: "/contact" },
};

const CATEGORY_OPTIONS = [
  ["tees", "T-shirts & polos"],
  ["hoodies", "Hoodies & sweats"],
  ["bottoms", "Joggers & leggings"],
  ["active", "Active & sport"],
  ["lounge", "Sleep & lounge"],
  ["intimates", "Underwear"],
  ["beach", "Beach & terry"],
  ["accessories", "Accessories"],
  ["other", "Something else"],
] as const;

const EXTRA_OPTIONS = [
  ["organic", "GOTS-certified organic"],
  ["samples", "Want fabric swatches"],
  ["visit", "Schedule a visit"],
  ["ddp", "Need DDP shipping"],
] as const;

const PROMISES = [
  { big: "24h", title: "First reply", body: "Homaira reads every brief personally. You'll hear back within one business day." },
  { big: "~10d", title: "Sample in hand", body: "Once we've agreed on fabric and spec, your first sample ships within ten days." },
  { big: "40d", title: "Door to door", body: "From sign-off to DDP delivery at your warehouse — forty days, every time." },
];

const FAQS = [
  { q: "What's your minimum order quantity?", a: "100 pieces per style per colourway. That's our floor across most categories. Lower than that is rarely viable for the supply chain we run, but we'll always say so honestly." },
  { q: "Do I need a tech pack to get a quote?", a: "No. A sketch, a reference photo, or a one-paragraph description is enough for us to come back with fabric options, an indicative price band, and a sampling timeline. We can help you turn it into a proper tech pack from there." },
  { q: "How long does the full process take?", a: "Roughly 40 days from sign-off to DDP delivery: ~10 days sampling, ~25 days production, ~5 days shipping. Faster is sometimes possible — we'll always tell you what's realistic." },
  { q: "Do you ship worldwide?", a: "Yes, DDP (delivered duty paid) to most countries. We handle customs and freight so you don't have to. You see one final landed cost." },
  { q: "Can I visit the factory?", a: "Absolutely — and we encourage it once we're working together. Pre-arranged visits to Narayanganj are welcome. Tick the \"Schedule a visit\" box on the form and we'll coordinate." },
  { q: "What about sustainability certifications?", a: "GOTS-certified organic is available on most of our knitwear lines. We also work with recycled performance blends, hemp, bamboo viscose, and modal. Ask for our certification documentation any time." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact · We reply within 24 hours"
        title={<>One message away from your <span className="accent">next collection.</span></>}
        lede="Send a tech pack, a sketch, or just describe the kind of garment you want. We'll come back with fabric options and a sampling plan — usually the same day."
      />

      <section className="contact-main" id="form">
        <div className="container-wide grid">
          <Reveal as="div" className="form-card">
            <h2>Tell us about your project.</h2>
            <p className="sub">The more you share, the better our first reply will be. None of this is binding — we&apos;ll go from here.</p>

            <form method="post" action="mailto:director@collectivestudioltd.com" encType="text/plain">
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Your name <span className="req">*</span></label>
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder="First &amp; last" />
                </div>
                <div className="field">
                  <label htmlFor="brand">Brand or company</label>
                  <input id="brand" name="brand" type="text" autoComplete="organization" placeholder="(if applicable)" />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">Email <span className="req">*</span></label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@brand.com" />
                </div>
                <div className="field">
                  <label htmlFor="country">Country</label>
                  <input id="country" name="country" type="text" autoComplete="country-name" placeholder="Where you ship to" />
                </div>
              </div>

              <div className="field">
                <label>What are you looking to make? <span className="req">*</span></label>
                <div className="checkbox-row">
                  {CATEGORY_OPTIONS.map(([value, label]) => (
                    <label className="check" key={value}>
                      <input type="checkbox" name="categories" value={value} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="qty">Quantity per style</label>
                  <select id="qty" name="qty" defaultValue="">
                    <option value="">Select a range</option>
                    <option>100 – 300 pcs (smallest run)</option>
                    <option>300 – 1,000 pcs</option>
                    <option>1,000 – 5,000 pcs</option>
                    <option>5,000+ pcs</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="timeline">Target launch</label>
                  <select id="timeline" name="timeline" defaultValue="">
                    <option value="">Select a timeframe</option>
                    <option>ASAP — sampling now</option>
                    <option>Within 2 months</option>
                    <option>3 – 6 months out</option>
                    <option>6+ months / planning ahead</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Project brief <span className="req">*</span></label>
                <textarea id="message" name="message" required placeholder="Vibe, references, fabrics you're drawn to, must-haves, anything we should know. A link to a tech pack or Google Drive works too." />
                <div className="hint">Tech packs, sketches, mood boards — paste a link or send them after we reply.</div>
              </div>

              <div className="field">
                <label>Anything else?</label>
                <div className="checkbox-row">
                  {EXTRA_OPTIONS.map(([value, label]) => (
                    <label className="check" key={value}>
                      <input type="checkbox" name="extras" value={value} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="submit-row">
                <Button as="button" type="submit" variant="cobalt">Send brief &rarr;</Button>
                <span className="note">Or email <a href="mailto:director@collectivestudioltd.com" style={{ color: "#494fdf" }}>director@collectivestudioltd.com</a> directly</span>
              </div>
            </form>
          </Reveal>

          <Reveal as="aside" className="contact-aside" delay={0.08}>
            <div className="aside-quick">
              <span className="tag">Skip the form</span>
              <h3>Book a 20-min intro call.</h3>
              <p>The fastest way to know if we&apos;re a fit. Homaira will listen, ask honest questions, and tell you straight if we&apos;re right for your brand.</p>
              <Button as="a" href="mailto:director@collectivestudioltd.com?subject=Intro%20call%20request" variant="cobalt">Email Homaira</Button>
            </div>

            <div className="aside-card">
              <span className="tag">Head Office · Production</span>
              <h3>Narayanganj, Bangladesh</h3>
              <address>
                Plot-A-132, Road No. 02<br />
                BISCIC Industrial Area<br />
                Ponchabati, Narayanganj 1400<br />
                Bangladesh
              </address>
              <a href="tel:+8801980055021">+880 1980 055021</a>
              <a href="tel:+8801980055022">+880 1980 055022</a>
              <a href="mailto:director@collectivestudioltd.com">director@collectivestudioltd.com</a>
            </div>

            <div className="aside-card">
              <span className="tag">Branch · Brand &amp; design</span>
              <h3>Amsterdam, Netherlands</h3>
              <address>
                Soetendaal 61<br />
                1081 BN Amsterdam<br />
                Netherlands
              </address>
              <a href="mailto:director@collectivestudioltd.com">director@collectivestudioltd.com</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="promise">
        <div className="container-wide">
          <Reveal as="div" className="section-head">
            <div>
              <span className="eyebrow">What happens next</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.8px", margin: 0, color: "#191c1f", maxWidth: "18ch" }}>From your message to your first sample.</h2>
            </div>
          </Reveal>
          <div className="grid">
            {PROMISES.map((p, i) => (
              <Reveal as="article" className="promise-item" key={p.big} delay={i * 0.07}>
                <div className="big">{p.big}</div>
                <div className="lbl"><strong>{p.title}</strong>{p.body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container-wide">
          <Reveal as="div" className="section-head" style={{ justifyContent: "center", textAlign: "center" }}>
            <div style={{ margin: "0 auto" }}>
              <span className="eyebrow">Questions, answered</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.8px", margin: 0, color: "#191c1f" }}>Before you send, you might want to know&hellip;</h2>
            </div>
          </Reveal>
          <div className="list">
            {FAQS.map((f, i) => (
              <Reveal as="details" className="q" key={f.q} delay={Math.min(i, 4) * 0.05}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
