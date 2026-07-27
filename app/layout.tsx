import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Talent Acquisition | Hire Exceptional Talent in 72 Hours",
  description: "Strategic talent acquisition partner delivering pre-qualified candidates in 72 hours. Fast hiring without the chaos.",
  keywords: "talent acquisition, hiring, recruitment partner, executive search",
  openGraph: {
    title: "Modern Talent Acquisition",
    description: "Hire exceptional talent in 72 hours",
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
