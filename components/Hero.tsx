"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const statusRows = [
  { label: "STATUS", value: "NEWLY ESTABLISHED", accent: "text-green-400" },
  { label: "DIVISIONS", value: "4 LAUNCHING", accent: "text-white" },
  { label: "OFFICIAL PARTNER", value: "TRADINGVIEW", accent: "text-white" },
  { label: "MEMBERSHIP", value: "OPENING SOON", accent: "text-yellow-500" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="London skyline"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-widest uppercase text-yellow-500 mb-6 block"
            >
              University College London — Est. 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
            >
              Trading <br />
              <span className="text-yellow-500">Society</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg max-w-lg mb-8"
            >
              UCL&apos;s newest society for financial markets, trading and
              quantitative analysis. We&apos;re building from the ground up —
              and our founding members will shape everything that comes next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://studentsunionucl.org/clubs-societies/trading-society"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition"
              >
                Become a Founding Member <ArrowRight size={14} />
              </a>

              <a
                href="#overview"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white font-mono text-xs tracking-widest uppercase hover:border-yellow-500 hover:text-yellow-500 transition"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* RIGHT PANEL — society terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-gray-900/80 backdrop-blur border border-gray-800">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
                <div className="flex items-center gap-2 text-green-400 text-xs font-mono uppercase tracking-widest">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  UCLTS — Live
                </div>
                <span className="font-mono text-xs text-gray-600">
                  FOUNDING YEAR 2026/27
                </span>
              </div>

              <div className="p-6 space-y-4">
                {statusRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center border-b border-gray-800/70 pb-3 font-mono text-xs"
                  >
                    <span className="text-gray-500 tracking-widest">
                      {row.label}
                    </span>
                    <span className={`tracking-wider ${row.accent}`}>
                      {row.value}
                    </span>
                  </div>
                ))}

                {/* Sparkline */}
                <div className="pt-2">
                  <svg
                    viewBox="0 0 320 80"
                    className="w-full h-20"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="0,68 30,62 55,66 85,50 110,55 140,42 165,48 195,32 225,38 255,22 285,26 320,8"
                      fill="none"
                      stroke="#f5b921"
                      strokeWidth="2"
                      className="animate-draw"
                    />
                    <circle cx="320" cy="8" r="3" fill="#f5b921" />
                  </svg>
                  <p className="font-mono text-xs text-gray-500 mt-2">
                    TRAJECTORY: ONLY ONE WAY FROM HERE
                    <span className="animate-blink text-yellow-500">_</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
