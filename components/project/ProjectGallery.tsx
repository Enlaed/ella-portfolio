"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ProjectImage } from "@/content/projects";

export function ProjectGallery({ images, columns = 2 }: { images: readonly ProjectImage[]; columns?: 1 | 2 | 3 }) {
  const reduceMotion = useReducedMotion();
  return <div className="project-gallery" style={{ "--gallery-columns": columns } as CSSProperties}>{images.map((image, index) => <motion.figure className="project-gallery__item" key={image.src} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { scale: 1.015 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}><Image className="project-gallery__image" src={image.src} alt={image.alt} width={1600} height={1000} sizes="(max-width: 42rem) 100vw, 50vw" loading="lazy" /><figcaption className="project-gallery__caption">{image.caption}</figcaption></motion.figure>)}</div>;
}
