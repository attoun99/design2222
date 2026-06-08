import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <Reveal as="div" className="footer-thread" aria-hidden="true" />
        <div className="footer-grid">
          <div>
            <div className="brand-block">COLLECTIVE<br /><span className="b">STUDIO</span></div>
            <address>
              <strong style={{ color: "#fff", fontWeight: 600, fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Head Office</strong>
              Plot-A-132, Road No. 02<br />
              BISCIC Industrial Area<br />
              Ponchabati, Narayanganj 1400<br />
              Bangladesh
            </address>
            <address>
              <strong style={{ color: "#fff", fontWeight: 600, fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginTop: 20, marginBottom: 8 }}>Branch Office</strong>
              Soetendaal 61<br />
              1081 BN Amsterdam<br />
              Netherlands
            </address>
          </div>
          <div className="col">
            <h4>Make</h4>
            <a href="#">T-shirts &amp; polos</a>
            <a href="#">Hoodies &amp; sweats</a>
            <a href="#">Activewear</a>
            <a href="#">Sleep &amp; lounge</a>
            <a href="#">Accessories</a>
          </div>
          <div className="col">
            <h4>Studio</h4>
            <a href="#">About us</a>
            <a href="#">Founders</a>
            <a href="#">Sustainability</a>
          </div>
          <div className="col">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/homaira_jemi">Instagram</a>
            <a href="https://www.linkedin.com/in/homaira-jemi-565920240">LinkedIn</a>
            <a href="https://www.facebook.com/share/171CVHecpZ/">Facebook</a>
            <a href="mailto:director@collectivestudioltd.com">director@collectivestudioltd.com</a>
            <a href="tel:+8801980055021">+880 1980 055021</a>
            <a href="tel:+8801980055022">+880 1980 055022</a>
          </div>
        </div>

        <div className="legal">
          <div>© 2026 Collective Studio Ltd · Knitwear manufacturing, Bangladesh.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "inherit" }}>Privacy</a>
            <a href="#" style={{ color: "inherit" }}>Terms</a>
            <a href="#" style={{ color: "inherit" }}>GOTS certificate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
