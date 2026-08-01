import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  // Update this if the site moves to a custom domain
  metadataBase: new URL("https://ucl-trading.vercel.app"),
  title: {
    default: "UCL Trading Society",
    template: "%s — UCL Trading Society",
  },
  description:
    "The home of financial markets at UCL — equities, commodities, fixed income and FX. Division-led research, trading workshops, competitions and industry access. Partnered with TradingView, Castleton Commodities International, Intercontinental Exchange and TraderMath.",
  keywords: [
    "UCL",
    "Trading Society",
    "finance",
    "markets",
    "commodities",
    "equities",
    "quantitative analysis",
    "student society",
  ],
  openGraph: {
    title: "UCL Trading Society",
    description:
      "The home of financial markets at UCL — equities, commodities, fixed income and FX. Research, trading workshops and industry access.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* Top fixed elements */}
        <Ticker />
        <Navbar />

        {/* Main content */}
        <main className="pt-24 flex-1">{children}</main>

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
