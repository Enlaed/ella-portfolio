import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return <header className="site-header"><div className="site-header__inner u-container"><Link className="site-header__brand" href="/">{site.shortName}<span className="site-header__brand-mark">.</span></Link><nav className="site-header__nav" aria-label="Primary navigation">{site.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div></header>;
}
