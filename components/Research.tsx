"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { FileText, PenLine, ArrowUpRight } from "lucide-react";

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

export default function Research() {
  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// Research Desk"
          title="Research"
          description="Our student-run research programme launches with our divisions in 2026/27. The first publications will appear right here."
        />

        {/* PIPELINE TABLE */}
        <div className="border border-gray-800">
          {/* HEADER */}
          <div className="hidden md:grid grid-cols-12 px-6 py-3 font-mono text-xs text-gray-400 tracking-widest uppercase border-b border-gray-800">
            <div className="col-span-3">Division</div>
            <div className="col-span-6">Coverage</div>
            <div className="col-span-3 text-right">Status</div>
          </div>

          {/* ROWS */}
          {pipeline.map((desk, index) => (
            <motion.div
              key={desk.division}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
                  FIRST ISSUE — 2026/27
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CONTRIBUTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 border border-gray-800 bg-gray-900/40 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 border border-yellow-500 flex items-center justify-center">
              <PenLine size={18} className="text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Write for the founding issue
              </h3>
              <p className="text-gray-400 text-sm max-w-xl">
                Want your name on our first-ever research publication? Analysts
                of all experience levels are welcome — reach out and pitch an
                idea.
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/company/ucl-trading-soc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition shrink-0"
          >
            Get in touch <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
