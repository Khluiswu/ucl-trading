import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 ADD THESE
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UCL Trading Society",
  description: "Trading Society at UCL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">

        {/* Top fixed elements */}
        <Ticker />
        <Navbar />

        {/* Main content */}
        <main className="pt-24 flex-1">
          {children}
        </main>

        {/* Footer always at bottom */}
        <Footer />

      </body>
    </html>
  );
}