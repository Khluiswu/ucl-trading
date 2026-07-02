"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mic, LineChart, Trophy, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const plannedFormats = [
  {
    icon: Mic,
    title: "Speaker Panels & Career Talks",
    description:
      "Industry professionals sharing how trading desks, funds and market-making firms actually work.",
    tag: "INSIGHT",
  },
  {
    icon: LineChart,
    title: "Trading & Charting Workshops",
    description:
      "Hands-on sessions using TradingView's professional tools — screeners, charting and economic calendars.",
    tag: "SKILLS",
  },
  {
    icon: Trophy,
    title: "Trading Competitions",
    description:
      "Simulated-market competitions where members test strategies against each other in real conditions.",
    tag: "COMPETE",
  },
  {
    icon: Users,
    title: "Socials & Networking",
    description:
      "Meet fellow traders across degrees and year groups — the community comes first.",
    tag: "COMMUNITY",
  },
];

export default function Events() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <SectionHeader
          label="// 003 — Events"
          title="Inaugural Season"
          description="We're a brand-new society, so our first events are being finalised right now. Here's what's on the launchpad for 2026/27."
        />

        {/* PLANNED FORMATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plannedFormats.map((format, index) => {
            const Icon = format.icon;

            return (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-800 bg-gray-900/60 p-6 md:p-8 hover:border-yellow-500 hover:shadow-[0_0_24px_rgba(245,185,33,0.12)] transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-widest px-2 py-0.5 border border-yellow-500 text-yellow-500">
                    {format.tag}
                  </span>
                  <span className="font-mono text-xs text-gray-500 tracking-widest">
                    COMING 2026/27
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 border border-gray-700 flex items-center justify-center">
                    <Icon size={18} className="text-yellow-500" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {format.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {format.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOLLOW CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="font-mono text-xs text-gray-400 tracking-wider">
            BE FIRST TO KNOW WHEN DATES DROP →
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ucltradingsoc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-yellow-500 hover:text-yellow-400 transition"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/company/ucl-trading-soc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-yellow-500 hover:text-yellow-400 transition"
            >
              LINKEDIN
            </a>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-yellow-500 hover:text-yellow-400 transition"
            >
              EVENTS PAGE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
