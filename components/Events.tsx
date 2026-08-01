"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mic, LineChart, Trophy, Users, Sigma } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PartnerLogo from "@/components/PartnerLogo";
import { adm, uclts, partners } from "@/lib/partners";

const tradermath = partners.find((p) => p.slug === "tradermath")!;

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
          description="Our first season is taking shape. One flagship competition is already locked in, with the wider calendar to follow."
        />

        {/* FLAGSHIP — CONFIRMED */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-yellow-500/60 bg-gradient-to-br from-yellow-500/[0.07] to-transparent p-8 md:p-10 mb-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 shrink-0 border border-yellow-500 flex items-center justify-center">
                <Sigma size={22} className="text-yellow-500" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 bg-yellow-500 text-black font-semibold">
                    Confirmed
                  </span>
                  <span className="font-mono text-xs text-gray-400 tracking-widest">
                    DATE TBC
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Maths &amp; Trading Competition
                </h3>

                <p className="text-yellow-500 text-sm font-mono tracking-wider mb-4">
                  WITH TRADERMATH × ADM (UCL MATHS SOCIETY)
                </p>

                {/* Collaborator lockup */}
                <div className="group flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
                  {[tradermath, uclts, adm].map((org, orgIndex) => (
                    <div key={org.slug} className="flex items-center gap-3">
                      {orgIndex > 0 && (
                        <span className="font-mono text-gray-600 text-sm">
                          ×
                        </span>
                      )}
                      <PartnerLogo partner={org} height="h-14" pad="px-3 py-2" />
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                  Our first flagship event: a joint competition testing mental
                  maths, probability and market-making instinct — the same
                  skills trading firms assess at interview. Open to all UCL
                  students.
                </p>
              </div>
            </div>

            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition shrink-0"
            >
              Details <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* PLANNED FORMATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plannedFormats.map((format, index) => {
            const Icon = format.icon;

            return (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
