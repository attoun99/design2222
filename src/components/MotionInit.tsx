"use client";

import { useMotionReady } from "@/lib/motion";

/** Mounts the `is-loaded` class once hydrated, kicking off the hero entrance animations. */
export function MotionInit() {
  useMotionReady();
  return null;
}
