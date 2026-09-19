import Link from "next/link";
import { SiteNav } from "@/components/site/SiteNav";
import styles from "./SiteChrome.module.css";

export function SiteHeader() {
  return (
    <header className={styles.headerBar}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          ELLA<span>.</span>
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span>
        ELLA<span>.</span>
      </span>
      <span>Data · analysis · systems</span>
      <span>Lagos</span>
    </footer>
  );
}
