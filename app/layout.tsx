import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emmanuella Okonkwo — Data Analyst",
  description: "Portfolio of Emmanuella Okonkwo, a data analyst with a background in mathematics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
