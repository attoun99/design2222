import { ArrowRight } from "./atoms";
import { Reveal } from "./Reveal";

export function Why() {
  return (
    <section id="why" className="section" style={{ background: "#fff", borderTop: "1px solid #e2e2e7" }}>
      <div className="container-wide">
        <Reveal as="div" className="section-head">
          <div>
            <span className="eyebrow">Why work with us</span>
            <h2>Built for small brands with big ideas.</h2>
          </div>
          <p>We started Collective Studio because emerging brands deserve a factory that says <em>yes</em> to small runs &mdash; and means it.</p>
        </Reveal>

        <div className="why-grid">
          <Reveal as="article" className="feature" delay={0}>
            <div className="num">01 / Transparency</div>
            <h3>Know exactly where your order stands.</h3>
            <p>From sampling to production to delivery &mdash; complete visibility at every stage. No surprises. No guessing.</p>
            <div className="meta">Yarn &rarr; dev &rarr; production &rarr; QC &rarr; ship <ArrowRight color="#191c1f" /></div>
          </Reveal>
          <Reveal as="article" className="feature" delay={0.07} style={{ background: "#494fdf", borderColor: "#494fdf", color: "#fff" }}>
            <div className="num" style={{ color: "#fff" }}>02 / Quality</div>
            <h3 style={{ color: "#fff" }}>International standards. Every single piece.</h3>
            <p style={{ color: "rgba(255,255,255,0.85)" }}>Our QC is led by <strong style={{ color: "#fff", fontWeight: 600 }}>Walter Meyer (38 years in fashion)</strong>. Your first order and your fiftieth come off the line identical.</p>
            <div className="meta" style={{ color: "#fff" }}>End-to-end QC pass · DDP delivery <ArrowRight color="#fff" /></div>
          </Reveal>
          <Reveal as="article" className="feature" delay={0.14}>
            <div className="num">03 / Low MOQ &amp; Speed</div>
            <h3>Start small. Dream big.</h3>
            <p>Just <strong>100 pieces per style/color</strong>. Test designs, launch limited editions, scale as you grow. <strong>40 days</strong> from confirmation to delivery &mdash; we respect your timelines.</p>
            <div className="meta">Sampling · 10d &middot; Production · 25d &middot; Ship · 5d <ArrowRight color="#191c1f" /></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
