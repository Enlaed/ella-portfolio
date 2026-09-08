import { site } from "@/content/site";

export function Footer() {
  return <footer className="site-footer"><div className="site-footer__inner u-container"><div><p className="u-eyebrow">Let’s connect</p><p>Data worth exploring?</p></div><div className="site-footer__links"><a href={`mailto:${site.email}`}>Email</a><a href="https://github.com/Enlaed" target="_blank" rel="noreferrer">GitHub</a></div></div></footer>;
}
