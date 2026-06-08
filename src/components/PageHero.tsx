import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  dark?: boolean;
  crumb: string;
  title: ReactNode;
  lede: ReactNode;
  children?: ReactNode;
};

/** Shared hero block for every dedicated sub-page (about, services, catalogue, founders, contact). */
export function PageHero({ dark = false, crumb, title, lede, children }: PageHeroProps) {
  return (
    <section className={`page-hero ${dark ? "dark" : ""}`}>
      <div className="container">
        <Reveal as="span" className="crumb">{crumb}</Reveal>
        <Reveal as="h1" delay={0.05}>{title}</Reveal>
        <Reveal as="p" className="lede" delay={0.1}>{lede}</Reveal>
        {children}
      </div>
    </section>
  );
}
