import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PageShell({ children, footer = true }: { children: ReactNode; footer?: boolean }) {
  return <div className="page-shell"><Header /><main className="page-shell__main">{children}</main>{footer ? <Footer /> : null}</div>;
}
