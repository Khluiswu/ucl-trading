"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import PartnerLogo from "@/components/PartnerLogo";
import { adm, uclts, partners } from "@/lib/partners";
import {
  CalendarDays,
  Mic,
  LineChart,
  Trophy,
  Users,
  Sigma,
  ArrowUpRight,
} from "lucide-react";

const plannedFormats = [
  {
    icon: Mic,
    title: "Speaker Panels & Career Talks",
    tag: "INSIGHT",
    description:
      "People from trading desks, funds and market-making firms talking about how the job really works.",
  },
  {
    icon: LineChart,
    title: "Trading & Charting Workshops",
    tag: "SKILLS",
    description:
      "Practical sessions in TradingView, covering charting, screeners and the economic calendar.",
  },
  {
    icon: Trophy,
    title: "Trading Competitions",
    tag: "COMPETE",
    description:
      "Simulated markets where members trade against each other and find out whose ideas hold up.",
  },
  {
    icon: Users,
    title: "Socials & Networking",
    tag: "COMMUNITY",
    description:
      "Drinks, meetups and the rest of it. Half the value of a society is the people in it.",
  },
];

const tradermath = partners.find((p) => p.slug === "tradermath")!;

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
          label="// Events"
          title="Events"
          description="Our first season, 2026/27. One competition is confirmed and the rest of the calendar is close behind."
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
            {/* FLAGSHIP — CONFIRMED */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-yellow-500/60 bg-gradient-to-br from-yellow-500/[0.07] to-transparent p-8 md:p-10 mb-6"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-8">
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
                      WITH TRADERMATH AND ADM (UCL MATHS SOCIETY)
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
                          <PartnerLogo
                            partner={org}
                            height="h-14"
                            pad="px-3 py-2"
                          />
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-5">
                      Our first big event, run with TraderMath and ADM,
                      UCL&apos;s maths society. Teams go head to head on mental
                      maths, probability and market-making games, which is
                      roughly what trading firms put candidates through at
                      interview. Open to every UCL student, and you don&apos;t
                      need any markets experience to enter.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Mental Maths",
                        "Probability",
                        "Market Making",
                        "Team Format",
                      ].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs bg-gray-800/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:text-right shrink-0">
                  <p className="font-mono text-xs text-gray-500 tracking-widest mb-3">
                    DATE ANNOUNCED SOON
                  </p>
                  <a
                    href="https://www.instagram.com/ucltradingsoc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition"
                  >
                    Get notified <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* PLANNED FORMATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plannedFormats.map((format, index) => {
                const Icon = format.icon;

                return (
                  <motion.div
                    key={format.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
              viewport={{ once: true }}
              className="mt-10 border border-gray-800 bg-gray-900/40 p-8 text-center"
            >
              <p className="text-gray-400 text-sm mb-4">
                We announce dates and speakers on our socials and the
                Students&apos; Union mailing list before anywhere else.
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
            <h3 className="text-xl font-semibold mb-2">Nothing here yet</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              We only started in 2026 and the first season hasn&apos;t run.
              Check back once it has.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
