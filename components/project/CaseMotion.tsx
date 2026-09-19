"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

type Tone = "city" | "cityExhibit" | "nexus" | "nexusShot" | "sales" | "salesExhibit";

const presets: Record<
  Tone,
  {
    hidden: Record<string, number | string>;
    visible: Record<string, number | string>;
    duration: number;
    ease: number[];
  }
> = {
  city: {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0 },
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  },
  cityExhibit: {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1],
  },
  nexus: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    duration: 0.28,
    ease: [0.16, 1, 0.3, 1],
  },
  nexusShot: {
    hidden: { opacity: 0, clipPath: "inset(0 72% 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
    duration: 0.55,
    ease: [0.16, 1, 0.3, 1],
  },
  sales: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
    duration: 0.62,
    ease: [0.22, 1, 0.36, 1],
  },
  salesExhibit: {
    hidden: { opacity: 0, y: 14, clipPath: "inset(0 0 14% 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

export function CaseMotion({
  tone,
  children,
  delay = 0,
  className,
}: {
  tone: Tone;
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const preset = presets[tone];

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={preset.hidden}
        whileInView={preset.visible}
        viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
        transition={{
          duration: preset.duration,
          delay,
          ease: preset.ease as [number, number, number, number],
        }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
