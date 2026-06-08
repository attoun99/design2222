import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Catalogue — Collective Studio | Full product breakdown",
  description:
    "14 product classes in detail: styles, fabrics, GSM, and GOTS-certified organic options across tees, hoodies, bottoms, intimates, beachwear, activewear, lounge, and accessories.",
  alternates: { canonical: "/catalogue" },
};

type Row = {
  id: string;
  cat: string;
  title: string;
  lede: string;
  organic?: boolean;
  specs: { dt: string; dd: React.ReactNode }[];
};

const GROUPS: { head: string; rows: Row[] }[] = [
  {
    head: "Everyday",
    rows: [
      {
        id: "tshirts", cat: "Everyday", title: "T-Shirts", organic: true,
        lede: "The core of any wardrobe. Your brand's signature tee begins here. We make tees that look great and feel even better.",
        specs: [
          { dt: "Styles", dd: "Crew, V-neck, Oversized, Slim, Longline, Pocket" },
          { dt: "Fabrics", dd: "Organic cotton, Tri-blend, Supima, Hemp blends" },
          { dt: "Weight", dd: "140–220 GSM" },
          { dt: "", dd: <em>Perfect for basics, graphic tees, streetwear, and sustainable brands.</em> },
        ],
      },
      {
        id: "tanks", cat: "Everyday", title: "Tank Tops", organic: true,
        lede: "Warm-weather essentials that move with you. Breathable, comfortable, stylish for gym floors and summer streets.",
        specs: [
          { dt: "Styles", dd: "Classic, Racerback, Muscle tank, Stringer, Cropped" },
          { dt: "Fabrics", dd: "Cotton jersey, Performance mesh, Bamboo blend" },
        ],
      },
      {
        id: "polos", cat: "Everyday", title: "Polo Shirts", organic: true,
        lede: "Where casual meets polished. Timeless style with modern comfort. Our Diamond Pique fabric gives each polo a luxurious look.",
        specs: [
          { dt: "Styles", dd: "Classic fit, Slim fit, Long sleeve, Performance" },
          { dt: "Fabrics", dd: "Diamond Pique, Cotton Pique, Organic Pique" },
          { dt: "Details", dd: "Ribbed collar, Custom buttons, Contrast tipping" },
        ],
      },
    ],
  },
  {
    head: "Comfort classics",
    rows: [
      {
        id: "hoodies", cat: "Comfort classics", title: "Hoodies", organic: true,
        lede: "The ultimate in comfort. Streetwear staple. Gym essential. Everyday go-to. Hoodies people live in.",
        specs: [
          { dt: "Styles", dd: "Pullover, Zip-up, Oversized, Cropped, Heavyweight" },
          { dt: "Fabrics", dd: "French terry, Fleece, Organic cotton fleece" },
          { dt: "Weight", dd: "280–500 GSM" },
        ],
      },
      {
        id: "sweatshirts", cat: "Comfort classics", title: "Sweatshirts", organic: true,
        lede: "Timeless comfort, modern style. Clean lines. Premium feel. A crewneck that never goes out of style.",
        specs: [
          { dt: "Styles", dd: "Crewneck, Oversized, Raglan, Mock neck, Cropped" },
          { dt: "Fabrics", dd: "French Terry, Brushed Fleece, Organic Fleece" },
          { dt: "Weight", dd: "280–450 GSM" },
        ],
      },
    ],
  },
  {
    head: "Bottoms",
    rows: [
      {
        id: "leggings", cat: "Bottoms", title: "Leggings", organic: true,
        lede: "Performance with everyday style. Stretchy, supportive, comfortable — made for movement and a flattering fit.",
        specs: [
          { dt: "Styles", dd: "Full length, 7/8, Capri, High-waist, Seamless, Biker shorts" },
          { dt: "Fabrics", dd: "Cotton-spandex, Nylon-spandex, Organic cotton-lycra" },
          { dt: "Details", dd: "Four-way stretch · Squat-proof · Hidden pocket" },
        ],
      },
      {
        id: "trackpants", cat: "Bottoms", title: "Trackpants", organic: true,
        lede: "Comfort in motion. From couch to coffee — joggers for every occasion.",
        specs: [
          { dt: "Styles", dd: "Classic, Slim, Relaxed, Cargo, Wide-leg" },
          { dt: "Fabrics", dd: "French terry, Fleece, Organic cotton terry" },
          { dt: "Details", dd: "Elastic cuffs · Zippered pockets · Custom waistband" },
        ],
      },
      {
        id: "shorts", cat: "Bottoms", title: "Shorts", organic: true,
        lede: "Summer essentials: lightweight, comfortable, perfect for warm weather.",
        specs: [
          { dt: "Styles", dd: "Terry shorts, Sweat shorts, Running shorts, Biker shorts" },
          { dt: "Fabrics", dd: "French terry, Cotton terry toweling, Performance" },
        ],
      },
    ],
  },
  {
    head: "Intimates",
    rows: [
      {
        id: "underwear", cat: "Intimates", title: "Underwear", organic: true,
        lede: "Closest-to-skin comfort. Premium fabrics. Perfect fit. The foundation of all-day confidence.",
        specs: [
          { dt: "Styles", dd: "Men: Boxer briefs, Trunks, Briefs, Boxers · Women: Bikini, Hipster, High-waist, Boyshort" },
          { dt: "Fabrics", dd: "Supima Cotton — ultra-soft, long-lasting" },
          { dt: "Details", dd: "Extra-long fibers · 35% stronger than regular cotton · Resists pilling" },
        ],
      },
    ],
  },
  {
    head: "Beach",
    rows: [
      {
        id: "beachwear", cat: "Beach", title: "Beachwear",
        lede: "Cotton Terry Towelling is ideal for after-swim wear — absorbent, soft, and luxurious.",
        specs: [
          { dt: "Styles", dd: "Beach cover-ups, Robes, Terry polos" },
          { dt: "Fabrics", dd: "Cotton Terry Towelling" },
        ],
      },
    ],
  },
  {
    head: "Active",
    rows: [
      {
        id: "sportswear", cat: "Active", title: "Sportswear",
        lede: "Designed for peak performance. High-tech fabrics and precise construction for athletes who expect top quality.",
        specs: [
          { dt: "Styles", dd: "Performance tees, Training tanks, Running shorts, Jerseys" },
          { dt: "Fabrics", dd: "Moisture-wicking, Quick-dry, Recycled polyester" },
          { dt: "Details", dd: "Flatlock seams · Mesh vents · Reflective accents" },
        ],
      },
      {
        id: "activewear", cat: "Active", title: "Activewear", organic: true,
        lede: "From studio to street. Where performance meets fashion. Apparel that works as hard as your customers.",
        specs: [
          { dt: "Styles", dd: "Sports bras, Crop tops, Leggings, Biker shorts, Sets" },
          { dt: "Fabrics", dd: "Nylon-spandex, Recycled performance blends" },
          { dt: "Details", dd: "Compression · Moisture-wicking · Squat-proof" },
        ],
      },
    ],
  },
  {
    head: "Lifestyle",
    rows: [
      {
        id: "lounge", cat: "Lifestyle", title: "Sleepwear & Loungewear", organic: true,
        lede: "Comfort for rest and relaxation. Ultra-soft fabrics. Relaxed fits. Made for unwinding.",
        specs: [
          { dt: "Styles", dd: "PJ sets, Sleep tees, Lounge pants, Robes" },
          { dt: "Fabrics", dd: "Modal, Bamboo viscose, Organic cotton jersey" },
          { dt: "Details", dd: "Flat seams · Covered elastic · Soft labels" },
        ],
      },
    ],
  },
  {
    head: "Accessories",
    rows: [
      {
        id: "accessories", cat: "Accessories", title: "Bags, Hats, Caps",
        lede: "Fashion is more than clothes. Add sustainable accessories to your range.",
        specs: [
          { dt: "Bags", dd: "Tote, Shopper, Drawstring, Backpack" },
          { dt: "Headwear", dd: "Beach, Baseball, Bucket" },
          { dt: "Leather", dd: "Tote, Wallet, Belt" },
          { dt: "Fabrics", dd: "Organic canvas, Recycled cotton, Hemp" },
        ],
      },
    ],
  },
];

export default function CataloguePage() {
  return (
    <>
      <PageHero
        crumb="Catalogue · 14 product classes"
        title={<>One message away from your <span className="accent">next collection.</span></>}
        lede={<>Styles, fabrics, GSM, organic options — every product class we run, in detail. Mix and match across categories. <strong>GOTS-certified organic available</strong> on most lines.</>}
      />

      <section className="cat-section">
        <div className="container-wide">
          {GROUPS.map((group, gi) => (
            <div className="cat-group" key={group.head}>
              <Reveal as="div" className="cat-group-head">{group.head}</Reveal>
              <div className="cat-rows">
                {group.rows.map((row, ri) => (
                  <Reveal as="article" id={row.id} className="cat-row" key={row.id} delay={Math.min(gi + ri, 6) * 0.05}>
                    <div>
                      <span className="cat-row-cat">{row.cat}</span>
                      <h3 className="cat-row-title">{row.title}</h3>
                      <p className="cat-row-lede">{row.lede}</p>
                      {row.organic && <div className="cat-row-organic">🌿 GOTS-certified organic option</div>}
                    </div>
                    <dl className="cat-row-spec">
                      {row.specs.map((s, si) => (
                        <div className="spec-row" key={si}>
                          <dt>{s.dt}</dt>
                          <dd>{s.dd}</dd>
                        </div>
                      ))}
                    </dl>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dark cta-band">
        <div className="container">
          <Reveal as="h2">Found your fit?</Reveal>
          <Reveal as="p" delay={0.07}>Tell us which categories interest you. We&apos;ll send fabric swatches and a sample timeline within 24 hours.</Reveal>
          <Reveal as="div" className="ctas" delay={0.14}>
            <Button as="a" href="/contact" variant="white">Request samples</Button>
            <Button as="a" href="/services" variant="outline-dark">Back to services</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
