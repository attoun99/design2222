"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./atoms";
import { useScrollChrome } from "@/lib/motion";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/founders", label: "Founders" },
  { href: "/contact", label: "Contact" },
];

export function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}

export function Nav() {
  const { onDark, shrink } = useScrollChrome();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${onDark ? "on-dark" : "on-light"} ${shrink ? "shrink" : ""} ${open ? "menu-open" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Collective Studio home" onClick={close}>
          <span>COLLECTIVE</span><span>STUDIO</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} className="nav-link" href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <div className="nav-cta-desktop">
          <Button as="a" href="/contact" variant={onDark ? "white" : "dark"} size="sm">Start your collection</Button>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav className="nav-mobile-links" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
          ))}
        </nav>
        <Button as="a" href="/contact" variant="cobalt" onClick={close}>Start your collection</Button>
        <div className="nav-mobile-meta">
          <a href="mailto:director@collectivestudioltd.com">director@collectivestudioltd.com</a>
          <a href="tel:+8801980055021">+880 1980 055021</a>
        </div>
      </div>
    </header>
  );
}
