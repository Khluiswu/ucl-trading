"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  TrendingUp,
  BarChart2,
  Landmark,
  DollarSign,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const divisions = [
  {
    id: "equities",
    name: "Equities",
    icon: TrendingUp,
    description: "Fundamental analysis across global equity markets.",
    focus: ["Valuation", "Stock Pitching", "Sector Research"],
  },
  {
    id: "commodities",
    name: "Commodities",
    icon: BarChart2,
    description: "Energy, metals and agricultural markets coverage.",
    focus: ["Energy", "Metals", "Agriculture"],
  },
  {
    id: "fixed-income",
    name: "Fixed Income",
    icon: Landmark,
    description: "Bond markets, credit analysis and yield curves.",
    focus: ["Bonds", "Credit", "Yield Curve"],
  },
  {
    id: "fx",
    name: "FX",
    icon: DollarSign,
    description: "Global currency markets and macro strategies.",
    focus: ["G10 FX", "EM FX", "Macro"],
  },
];

export default function Divisions() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <SectionHeader
          label="// 002 — Division Matrix"
          title="Our Divisions"
          description="Four research desks launching in our founding year — each covering a core asset class."
        />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {divisions.map((division, index) => {
            const isExpanded = expandedId === division.id;
            const Icon = division.icon;

            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-800 bg-gray-900/60 p-6 cursor-pointer hover:border-yellow-500 hover:shadow-[0_0_24px_rgba(245,185,33,0.12)] transition"
                onClick={() => setExpandedId(isExpanded ? null : division.id)}
              >
                {/* TOP */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-gray-700 flex items-center justify-center">
                      <Icon size={18} className="text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-semibold">{division.name}</h3>
                  </div>

                  <ChevronRight
                    size={18}
                    className={`transition-transform ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm mb-4">
                  {division.description}
                </p>

                {/* STATUS */}
                <span className="inline-block font-mono text-xs tracking-widest px-2 py-1 border border-green-400/60 text-green-400">
                  LAUNCHING 2026/27
                </span>

                {/* EXPANDED */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-800 pt-4 mt-4">
                        <p className="text-yellow-500 font-mono text-xs mb-2 uppercase tracking-widest">
                          Focus Areas
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {division.focus.map((f) => (
                            <span
                              key={f}
                              className="px-3 py-1 text-xs bg-gray-800"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
