const MARQUEE_PHRASES = [
  "Dream it. Design it.",
  "Low MOQ — just 100 pcs",
  "Sustainable knitwear",
  "40-day delivery",
  "GOTS-certified organic",
  "Worldwide DDP",
  "Family-run since 2019",
];

export function Marquee() {
  const items = [...MARQUEE_PHRASES, ...MARQUEE_PHRASES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((p, i) => (
          <span key={i} className="marquee-item">{p}</span>
        ))}
      </div>
    </div>
  );
}
