import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Avante People — Hire vetted Latin American talent in 72 hours",
    template: "%s | Avante People",
  },
  description:
    "Tell us the role. We source, vet and interview across Latin America and hand you 4–6 finalists in 72 hours — in your time zone, with a 12-month replacement guarantee. You pay when someone starts.",
  keywords: [
    "hire latin american talent",
    "nearshore staffing",
    "nearshore recruiting agency",
    "LatAm remote employees",
    "hire remote developers latin america",
    "embedded talent partner",
    "US LatAm hiring",
  ],
  openGraph: {
    title: "Avante People — Hire vetted Latin American talent in 72 hours",
    description:
      "Pre-vetted, English-fluent LatAm professionals in your time zone. Four to six finalists in 72 hours. 12-month replacement guarantee.",
    type: "website",
    siteName: "Avante People",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avante People — Hire vetted Latin American talent in 72 hours",
    description:
      "4–6 vetted finalists in 72 hours, 0–3 hours from your time zone. 12-month replacement guarantee.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-page text-body antialiased">{children}</body>
    </html>
  );
}
