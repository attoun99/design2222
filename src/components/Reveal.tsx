"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/lib/motion";

type RevealProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  variant?: "fade" | "clip";
  delay?: number;
  style?: CSSProperties;
  [key: string]: unknown;
};

/** Wraps content so it blurs/rises (or clip-reveals) into place when scrolled into view. */
export function Reveal({ as: Tag = "div", children, className = "", variant = "fade", delay = 0, style, ...rest }: RevealProps) {
  const { ref, inView } = useInView(0.12, variant === "clip");
  const cls = [variant === "clip" ? "clip-reveal" : "reveal-t", inView ? "in" : "", className].filter(Boolean).join(" ");
  return (
    <Tag
      ref={ref}
      className={cls}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
