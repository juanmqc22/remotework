import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Talent Acquisition | Hire Top Latin American Talent in 72 Hours",
  description: "Hire pre-vetted, English-fluent professionals from Latin America — same time zone, a fraction of the cost, delivered in 72 hours. The nearshore hiring partner for growing US companies.",
  keywords: "hire latin american talent, nearshore staffing, LatAm remote employees, nearshore recruiting agency, hire remote talent latin america, US LatAm hiring, talent acquisition",
  openGraph: {
    title: "Modern Talent Acquisition | Hire Top Latin American Talent",
    description: "Pre-vetted, English-fluent LatAm professionals in your time zone, delivered in 72 hours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
