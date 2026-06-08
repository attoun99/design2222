import Image from "next/image";
import { Reveal } from "./Reveal";

const SERVICES = [
  { id: "everyday", cat: "Everyday", ttl: "Tees, tanks & polos", sub: "Crew · V-neck · Oversized · 140–220 GSM", img: "cat-tees.jpg", span: "x6", anchor: "tshirts" },
  { id: "comfort", cat: "Comfort classics", ttl: "Hoodies & sweats", sub: "French terry · 280–500 GSM · GOTS option", img: "cat-hoodies.jpg", span: "x6", anchor: "hoodies" },
  { id: "bottoms", cat: "Bottoms", ttl: "Joggers & leggings", sub: "Four-way stretch · Squat-proof", img: "cat-bottoms.jpg", span: "x3", anchor: "leggings" },
  { id: "intimates", cat: "Intimates", ttl: "Underwear in Supima", sub: "35% stronger than regular cotton", img: "cat-intimates.jpg", span: "x3", anchor: "underwear" },
  { id: "beach", cat: "Beach", ttl: "Beach & terry", sub: "Cotton Terry Towelling · Cover-ups", img: "cat-beach.jpg", span: "x4", anchor: "beachwear" },
  { id: "active", cat: "Active", ttl: "Sport & activewear", sub: "Moisture-wicking · Flatlock seams", img: "cat-active.jpg", span: "x4", anchor: "sportswear" },
  { id: "lifestyle", cat: "Lifestyle", ttl: "Sleep & lounge", sub: "Modal · Bamboo viscose · Organic jersey", img: "cat-lifestyle.jpg", span: "x4", anchor: "lounge" },
  { id: "accessories", cat: "Accessories", ttl: "Bags, hats, caps", sub: "Organic canvas · Recycled cotton · Hemp", img: "cat-accessories.jpg", span: "x12", anchor: "accessories" },
];

export function Services() {
  return (
    <section id="services" className="section" style={{ background: "#fff", borderTop: "1px solid #e2e2e7" }}>
      <div className="container-wide">
        <Reveal as="div" className="section-head">
          <div>
            <span className="eyebrow">What we make</span>
            <h2>Everything you need to launch and grow your clothing brand.</h2>
          </div>
          <p>One factory. Eight categories. Every fabric blend you&apos;ve sketched on a napkin &mdash; and a few we&apos;ll suggest you try.</p>
        </Reveal>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <Reveal as="a" key={s.id} href={`/catalogue#${s.anchor}`} className={`svc ${s.span}`} delay={Math.min(i, 6) * 0.07}>
              <Image src={`/imagery/${s.img}`} alt={s.ttl} fill sizes="(max-width: 1023px) 100vw, 50vw" loading="lazy" style={{ objectFit: "cover" }} />
              <div className="cat">{s.cat}</div>
              <div className="ttl">{s.ttl}</div>
              <div className="sub">{s.sub}</div>
            </Reveal>
          ))}
        </div>

        <div className="section-cta">
          <a href="/services" className="btn btn-outline-light">View services in detail &rarr;</a>
          <a href="/catalogue" className="btn btn-soft">Browse the full catalogue</a>
        </div>
      </div>
    </section>
  );
}
