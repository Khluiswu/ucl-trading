"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import {
  CalendarDays,
  Mic,
  LineChart,
  Trophy,
  Users,
  ArrowUpRight,
} from "lucide-react";

const plannedFormats = [
  {
    icon: Mic,
    title: "Speaker Panels & Career Talks",
    tag: "INSIGHT",
    description:
      "Professionals from trading desks, funds and market-making firms sharing how the industry really works.",
  },
  {
    icon: LineChart,
    title: "Trading & Charting Workshops",
    tag: "SKILLS",
    description:
      "Hands-on sessions built around TradingView's professional tools — charting, screeners and economic calendars.",
  },
  {
    icon: Trophy,
    title: "Trading Competitions",
    tag: "COMPETE",
    description:
      "Simulated-market competitions where members put strategies to the test against each other.",
  },
  {
    icon: Users,
    title: "Socials & Networking",
    tag: "COMMUNITY",
    description:
      "Casual meetups across degrees and year groups — because the network matters as much as the knowledge.",
  },
];

const tagColors: Record<string, string> = {
  INSIGHT: "border-yellow-500 text-yellow-500",
  SKILLS: "border-blue-400 text-blue-400",
  COMPETE: "border-orange-400 text-orange-400",
  COMMUNITY: "border-green-400 text-green-400",
};

export default function EventsPage() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");

  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// Event Ledger"
          title="Events"
          description="We're newly established — our inaugural events calendar is being finalised for 2026/27."
        />

        {/* FILTER */}
        <div className="flex font-mono tracking-wider gap-4 mb-12">
          {(["upcoming", "past"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 text-xs uppercase border transition-all ${
                filter === tab
                  ? "border-yellow-500 text-yellow-500"
                  : "border-gray-700 text-gray-400 hover:border-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {filter === "upcoming" ? (
          <>
            {/* PLANNED FORMATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plannedFormats.map((format, index) => {
                const Icon = format.icon;

                return (
                  <motion.div
                    key={format.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-gray-900/60 border border-gray-800 p-6 md:p-8 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(245,185,33,0.15)] transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`font-mono tracking-widest px-2 py-1 text-xs border ${tagColors[format.tag]}`}
                      >
                        {format.tag}
                      </span>
                      <span className="font-mono text-xs text-gray-500 tracking-widest">
                        DATE TBA
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 border border-gray-700 flex items-center justify-center">
                        <Icon size={18} className="text-yellow-500" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          {format.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {format.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* STAY IN THE LOOP */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-10 border border-gray-800 bg-gray-900/40 p-8 text-center"
            >
              <p className="text-gray-400 text-sm mb-4">
                Dates and speakers announced first on our socials and the
                Students&apos; Union mailing list.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/ucltradingsoc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs tracking-widest text-yellow-500 hover:text-yellow-400 transition"
                >
                  INSTAGRAM <ArrowUpRight size={12} />
                </a>
                <a
                  href="https://www.linkedin.com/company/ucl-trading-soc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs tracking-widest text-yellow-500 hover:text-yellow-400 transition"
                >
                  LINKEDIN <ArrowUpRight size={12} />
                </a>
                <a
                  href="https://studentsunionucl.org/clubs-societies/trading-society"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs tracking-widest text-yellow-500 hover:text-yellow-400 transition"
                >
                  MAILING LIST <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          </>
        ) : (
          /* PAST — honest empty state */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-gray-800 bg-gray-900/40 p-16 text-center"
          >
            <CalendarDays size={32} className="text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No past events — yet</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              We were founded in 2026 and our first season starts soon. This
              ledger fills up from here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
