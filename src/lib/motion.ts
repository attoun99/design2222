"use client";

import { useEffect, useRef, useState } from "react";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hoverCapable() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
}

/**
 * Reveals an element once it scrolls into view. Mirrors the reference's
 * IntersectionObserver-driven `.reveal-t` / `.clip-reveal` behaviour —
 * the visible end-state is the base style; the hidden start only applies
 * once JS confirms motion is allowed (handled via the `js-anim` class on <html>).
 */
export function useInView<T extends HTMLElement>(threshold = 0.12, observeParent = false) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }
    // Clip-revealed elements are clipped to zero area in their hidden state, and
    // browsers compute intersection post-clip — so observing the element itself
    // would never report it as visible. Watch its (unclipped) parent instead.
    const target = (observeParent && el.parentElement) || el;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(target);
    return () => io.disconnect();
  }, [threshold, observeParent]);

  return { ref, inView };
}

/** Single passive scroll listener: nav color/shrink + global scroll-progress var. */
export function useScrollChrome() {
  const [onDark, setOnDark] = useState(true);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    let shrinkNow = false;

    function update() {
      const navHeight = shrinkNow ? 58 : 72;
      const probeY = navHeight + 1;
      const sections = document.querySelectorAll("section, footer");
      let darkBehind = true;
      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          darkBehind = s.classList.contains("dark") || s.classList.contains("footer");
        }
      });
      setOnDark(darkBehind);

      const y = window.scrollY || document.documentElement.scrollTop;
      shrinkNow = y > 40;
      setShrink(shrinkNow);

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? Math.min(1, Math.max(0, y / docH)) : 0;
      document.documentElement.style.setProperty("--sp", p.toFixed(4));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { onDark, shrink };
}

/** Counts a number up from 0 the first time it's ≥50% visible. */
export function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(target);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    setValue(0);

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            const t0 = performance.now();
            const step = (now: number) => {
              const p = Math.min(1, (now - t0) / duration);
              setValue(Math.round(target * ease(p)));
              if (p < 1) requestAnimationFrame(step);
              else setValue(target);
            };
            requestAnimationFrame(step);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return { ref, value };
}

/** Magnetic pointer-follow effect for hero / contact CTA buttons. */
export function useMagnetic<T extends HTMLElement>(strength = 0.28) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !hoverCapable()) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", ((e.clientX - (r.left + r.width / 2)) * strength).toFixed(1) + "px");
      el.style.setProperty("--my", ((e.clientY - (r.top + r.height / 2)) * strength).toFixed(1) + "px");
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}

type Fiber = {
  id: number;
  size: number;
  left: number;
  top: number;
  o: number;
  dx: number;
  duration: number;
  delay: number;
};

/** Generates the 20 floating cotton-fiber particles client-side (random, so it must run after mount). */
export function useFiberField(count = 20) {
  const [fibers, setFibers] = useState<Fiber[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setFibers(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: 4 + Math.random() * 11,
        left: Math.random() * 100,
        top: 55 + Math.random() * 50,
        o: 0.2 + Math.random() * 0.4,
        dx: Math.random() * 70 - 35,
        duration: 8 + Math.random() * 6,
        delay: -Math.random() * 12,
      }))
    );
  }, [count]);

  return fibers;
}

/** Marks <html> with `js-anim` (motion OK) and `is-loaded` (mounted) — gates entrance animations. */
export function useMotionReady() {
  useEffect(() => {
    const html = document.documentElement;
    if (!prefersReducedMotion()) html.classList.add("js-anim");
    const id = requestAnimationFrame(() => html.classList.add("is-loaded"));
    return () => cancelAnimationFrame(id);
  }, []);
}
