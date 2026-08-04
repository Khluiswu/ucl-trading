"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight, FileText, PenLine, ArrowUpRight } from "lucide-react";
import { interviewMeta } from "@/content/samuel-basi-interview";
import { SubjectPortrait } from "@/components/InterviewSubject";
import { SOCIETY_EMAIL } from "@/lib/society";

const pipeline = [
  {
    division: "EQUITIES",
    color: "border-yellow-500 text-yellow-500",
    scope: "Stock pitches, valuation deep-dives and sector primers.",
  },
  {
    division: "COMMODITIES",
    color: "border-orange-400 text-orange-400",
    scope: "Energy, metals and agriculture market notes.",
  },
  {
    division: "FIXED INCOME",
    color: "border-blue-400 text-blue-400",
    scope: "Rates, credit and yield curve commentary.",
  },
  {
    division: "FX",
    color: "border-green-400 text-green-400",
    scope: "Currency and macro positioning analysis.",
  },
];

export default function Insights() {
  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// Insights"
          title="Insights"
          description="Interviews with people working in the market, plus research from our own desks."
        />

        {/* FEATURED INTERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Link
            href={`/insights/${interviewMeta.slug}`}
            className="group block border border-gray-800 bg-gray-900/60 hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(245,185,33,0.14)] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left rail */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-800 p-8 flex flex-col gap-6">
                <span className="self-start font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-yellow-500 text-yellow-500">
                  Featured / {interviewMeta.category}
                </span>

                <div className="max-w-[180px]">
                  <SubjectPortrait className="grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>

                <div className="font-mono text-xs text-gray-500 space-y-1 tracking-wider mt-auto">
                  <p>INTERVIEW BY {interviewMeta.interviewer.toUpperCase()}</p>
                  <p>{interviewMeta.readingTime.toUpperCase()}</p>
                </div>
              </div>

              {/* Right content */}
              <div className="lg:col-span-8 p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                  {interviewMeta.title}
                </h3>
                <p className="text-yellow-500 text-lg mb-5">
                  {interviewMeta.subtitle}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-2xl">
                  Eleven years at Trafigura, from operations through the hedge
                  desk to physical metals trading. He walks through how a
                  physical trade actually works, what hedging really means, and
                  how to get into an industry that is famously hard to enter.
                </p>

                <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-yellow-500 group-hover:gap-3 transition-all">
                  Read the interview <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* RESEARCH PIPELINE */}
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
          {"// Division Research"}
        </h3>

        <div className="border border-gray-800">
          <div className="hidden md:grid grid-cols-12 px-6 py-3 font-mono text-xs text-gray-400 tracking-widest uppercase border-b border-gray-800">
            <div className="col-span-3">Division</div>
            <div className="col-span-6">Coverage</div>
            <div className="col-span-3 text-right">Status</div>
          </div>

          {pipeline.map((desk, index) => (
            <motion.div
              key={desk.division}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0 items-center px-6 py-5 border-b border-gray-800 last:border-b-0 hover:bg-gray-900/60 transition"
            >
              <div className="md:col-span-3">
                <span
                  className={`font-mono tracking-widest px-2 py-1 text-xs border ${desk.color}`}
                >
                  {desk.division}
                </span>
              </div>

              <div className="md:col-span-6 flex items-center gap-2 text-sm text-gray-400">
                <FileText size={14} className="shrink-0" />
                {desk.scope}
              </div>

              <div className="md:col-span-3 md:text-right">
                <span className="font-mono text-xs text-gray-500 tracking-widest">
                  FIRST ISSUE 2026/27
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CONTRIBUTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 border border-gray-800 bg-gray-900/40 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 border border-yellow-500 flex items-center justify-center">
              <PenLine size={18} className="text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Write the first one
              </h3>
              <p className="text-gray-400 text-sm max-w-xl">
                Fancy writing our first piece, or landing the next interview?
                You don&apos;t need experience, just something you want to dig
                into. Send us a pitch.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${SOCIETY_EMAIL}?subject=Writing%20for%20UCL%20Trading%20Society`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition shrink-0"
          >
            Get in touch <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
