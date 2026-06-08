import Image from "next/image";
import { Reveal } from "./Reveal";

const CATALOGUE_PREVIEW = [
  { id: "tshirts", cat: "Everyday", title: "Tees, tanks & polos", count: "3 product lines · 140–220 GSM", img: "cat-tees.jpg" },
  { id: "hoodies", cat: "Comfort classics", title: "Hoodies & sweats", count: "2 product lines · 280–500 GSM", img: "cat-hoodies.jpg" },
  { id: "leggings", cat: "Bottoms", title: "Joggers, leggings, shorts", count: "3 product lines · 4-way stretch", img: "cat-bottoms.jpg" },
  { id: "lounge", cat: "Lifestyle", title: "Lounge, sleep, intimates", count: "3 product lines · Modal, Bamboo, Supima", img: "cat-lifestyle.jpg" },
];

export function Catalogue() {
  return (
    <section id="catalogue" className="section" style={{ background: "#fafafa", borderTop: "1px solid #e2e2e7" }}>
      <div className="container-wide">
        <Reveal as="div" className="section-head">
          <div>
            <span className="eyebrow">A glimpse of the catalogue</span>
            <h2>Fourteen product classes. One message away.</h2>
          </div>
          <p>Styles, fabrics, GSM and organic options for every product line we run &mdash; the full breakdown lives on the catalogue page.</p>
        </Reveal>

        <div className="cat-preview">
          {CATALOGUE_PREVIEW.map((c, i) => (
            <Reveal as="a" key={c.id} href={`/catalogue#${c.id}`} className="cat-preview-card" delay={i * 0.07}>
              <div className="cat-preview-img">
                <Image src={`/imagery/${c.img}`} alt={c.title} width={180} height={135} loading="lazy" />
              </div>
              <div className="cat-preview-meta">
                <span className="cat-preview-cat">{c.cat}</span>
                <h3 className="cat-preview-ttl">{c.title}</h3>
                <p className="cat-preview-sub">{c.count}</p>
              </div>
              <span className="cat-preview-arrow" aria-hidden="true">&rarr;</span>
            </Reveal>
          ))}
        </div>

        <div className="section-cta">
          <a href="/catalogue" className="btn btn-dark">View the full catalogue &rarr;</a>
          <a href="/contact" className="btn btn-soft">Request fabric swatches</a>
        </div>
      </div>
    </section>
  );
}
