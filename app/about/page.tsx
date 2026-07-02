"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { LinkIcon, CandlestickChart, ArrowUpRight } from "lucide-react";

const team = [
  { name: "Kaihao Luis Wu", role: "President", division: "Executive", linkedin: "https://www.linkedin.com/in/kaihaoluis-wu/" },
  { name: "Rahul Shafia", role: "Treasurer", division: "Executive", linkedin: "https://www.linkedin.com/in/rahul-shafia-80016b272/" },
  { name: "Zijia Zhao", role: "Vice President", division: "Executive", linkedin: "https://www.linkedin.com/in/nini-zijia-zhao26/" },
  { name: "Anies Desai", role: "Vice President", division: "Executive", linkedin: "https://www.linkedin.com/in/anies-desai/" },
  { name: "Wenhao Wang", role: "Head of Equities", division: "Equities", linkedin: "https://www.linkedin.com/in/wenhao-wang-09b0b1234/" },
  { name: "James Bridel", role: "Head of Commodities", division: "Commodities", linkedin: "https://www.linkedin.com/in/jamesbridel/" },
  { name: "Micah Zheng", role: "Welfare Officer", division: "Welfare", linkedin: "https://www.linkedin.com/in/micahzheng/" },
];

const stats = [
  { label: "Founded", value: 2026, suffix: "", animate: false },
  { label: "Committee Members", value: 7, suffix: "", animate: true },
  { label: "Divisions Launching", value: 4, suffix: "", animate: true },
  { label: "Official Partner", value: 1, suffix: "", animate: true },
];

export default function AboutPage() {
  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// About"
          title="Who We Are"
          description=""
        />

        {/* INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              UCL Trading Society is a brand-new, student-led society dedicated
              to financial markets, trading and quantitative analysis — open to
              every student, from complete beginner to seasoned market nerd.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2026, we&apos;re building the society from the ground
              up: four asset-class divisions, a research programme, workshops,
              competitions and speaker events — all launching in our first
              year, all shaped by our founding members.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our mission is to bridge academic theory with practical market
              experience and prepare members for careers in trading,
              investment banking and asset management.
            </p>

            {/* LINE */}
            <div className="border-t border-gray-800 my-8" />

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-yellow-500">
                    {stat.animate ? (
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    ) : (
                      <span className="font-mono tabular-nums">
                        {stat.value}
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[320px]"
          >
            <Image
              src="/about.jpg"
              alt="Trading desk"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-80"
            />
          </motion.div>
        </div>

        {/* TEAM */}
        <SectionHeader
          label="// Committee 2026/27"
          title="Leadership"
          description="The founding team building the society."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900/60 border border-gray-800 p-6 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(245,185,33,0.15)] transition-all group"
            >
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center mb-4">
                <span className="text-yellow-500 font-bold text-sm">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>

              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-yellow-500 font-mono uppercase text-xs mt-3">
                {member.role}
              </p>
              <p className="text-gray-400 text-xs">{member.division}</p>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
                <a
                  href={member.linkedin}
                  className="text-gray-400 hover:text-yellow-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <LinkIcon size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PARTNER */}
        <div className="mt-24">
          <SectionHeader
            label="// Partnerships"
            title="Official Partner"
            description="Our first partnership — with more to come."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border border-gray-800 bg-gray-900/60 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-yellow-500 transition"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 shrink-0 border border-yellow-500 flex items-center justify-center">
                <CandlestickChart size={22} className="text-yellow-500" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">TradingView</h3>
                <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                  The first 150 members receive access to TradingView&apos;s
                  professional market analysis tools — advanced charting,
                  stock screeners and economic calendars — to identify
                  opportunities like a professional.
                </p>
              </div>
            </div>

            <a
              href="https://www.tradingview.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 font-mono text-xs tracking-widest uppercase text-white hover:border-yellow-500 hover:text-yellow-500 transition shrink-0"
            >
              tradingview.com <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
