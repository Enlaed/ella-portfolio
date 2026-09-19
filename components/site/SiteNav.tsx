"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import styles from "./SiteNav.module.css";

function isCurrent(href: string, pathname: string, hash: string) {
  if (href === "/#contact") {
    return pathname === "/" && hash === "#contact";
  }

  if (href === "/projects/experience") {
    return pathname === "/projects/experience";
  }

  if (href === "/projects") {
    return (
      pathname === "/projects" ||
      (pathname.startsWith("/projects/") &&
        pathname !== "/projects/experience")
    );
  }

  if (href === "/about") {
    return pathname === "/about";
  }

  return false;
}

export function SiteNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, [pathname]);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {site.navigation.map((item) => {
        const current = isCurrent(item.href, pathname, hash);
        const isCta = item.href === "/#contact";

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${isCta ? styles.cta : ""} ${current ? styles.current : ""}`}
            aria-current={current ? "page" : undefined}
            onClick={() => {
              if (item.href === "/#contact") {
                setHash("#contact");
              }
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
