import Image from "next/image";
import styles from "./EllaScene.module.css";

export function EllaScene() {
  return (
    <figure className={styles.wrap}>
      <div className={styles.idle} aria-hidden="true">
        <Image
          className={styles.portrait}
          src="/ella/watermark.png"
          alt="Illustrated Ella at her workspace"
          width={1600}
          height={1200}
          sizes="(max-width: 760px) 100vw, 60vw"
          priority
        />
      </div>
      <figcaption className={styles.caption}>
        Somewhere between a dataset and a good sentence.
      </figcaption>
    </figure>
  );
}
