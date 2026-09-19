import Image from "next/image";
import type { ReactNode } from "react";

export function EvidenceFigure({
  src,
  alt,
  caption,
  kicker,
  className,
  frameClassName,
  width = 2400,
  height = 1350,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
  kicker?: string;
  className?: string;
  frameClassName?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className={className}>
      {kicker ? <p>{kicker}</p> : null}
      <div className={frameClassName}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 760px) 92vw, 72vw"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
