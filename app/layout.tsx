import type { Metadata, Viewport } from "next";
import { Sora, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Avante People — Hire elite Latin American talent in 72 hours",
    template: "%s | Avante People",
  },
  description:
    "We are the hiring team you don't have. Tell us the role; we source, vet and interview across Latin America and hand you 4–6 finalists you'd actually hire — in 72 hours, in your time zone, at 40–60% less than a US hire.",
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
    title: "Avante People — Hire elite Latin American talent in 72 hours",
    description:
      "Pre-vetted, English-fluent LatAm professionals in your time zone. Four to six finalists in 72 hours. You pay when someone starts.",
    type: "website",
    siteName: "Avante People",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avante People — Hire elite Latin American talent in 72 hours",
    description:
      "The hiring team you don't have. 4–6 vetted finalists in 72 hours, 0–3 hours from your time zone.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09070f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${instrument.variable}`}
    >
      <body className="bg-ink text-chalk antialiased">
        <SmoothScroll />
        <div className="grain-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
