"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import {
  ChevronRight,
  TrendingUp,
  BarChart2,
  Landmark,
  DollarSign,
} from "lucide-react";

const divisions = [
  {
    id: "equities",
    name: "Equities",
    icon: TrendingUp,
    head: "Wenhao Wang",
    role: "Head of Equities",
    status: "LAUNCHING",
    description:
      "Fundamental analysis across global equity markets — valuation, stock pitches and sector research.",
    focus: ["Valuation", "Stock Pitching", "Sector Research"],
  },
  {
    id: "commodities",
    name: "Commodities",
    icon: BarChart2,
    head: "James Bridel",
    role: "Head of Commodities",
    status: "LAUNCHING",
    description:
      "Energy, metals and agricultural markets with a strong macro and supply-chain focus.",
    focus: ["Energy", "Metals", "Agriculture"],
  },
  {
    id: "fixed-income",
    name: "Fixed Income",
    icon: Landmark,
    head: "TBA",
    role: "Head of Fixed Income",
    status: "RECRUITING",
    description: "Bond markets, credit analysis and yield curve strategies.",
    focus: ["Bonds", "Credit", "Yield Curve"],
  },
  {
    id: "fx",
    name: "FX",
    icon: DollarSign,
    head: "TBA",
    role: "Head of FX",
    status: "RECRUITING",
    description:
      "Currency markets, macro positioning and central bank analysis.",
    focus: ["G10 FX", "EM FX", "Carry"],
  },
];

export default function DivisionsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// Division Matrix"
          title="Our Divisions"
          description="Four research desks launching across core asset classes in our founding year. Want to lead one? We're recruiting."
        />

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
                className="bg-gray-900/60 border border-gray-800 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(245,185,33,0.15)] transition-all cursor-pointer group"
                onClick={() => setExpandedId(isExpanded ? null : division.id)}
              >
                {/* HEADER */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-gray-700 flex items-center justify-center group-hover:border-yellow-500 transition">
                        <Icon size={18} className="text-yellow-500" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          {division.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {division.head} — {division.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono tracking-widest text-xs px-2 py-1 border ${
                          division.status === "RECRUITING"
                            ? "border-green-400 text-green-400"
                            : "border-yellow-500/60 text-yellow-500"
                        }`}
                      >
                        {division.status}
                      </span>

                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm">
                    {division.description}
                  </p>
                </div>

                {/* EXPANDED */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-gray-800"
                    >
                      <div className="p-6">
                        <p className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-3">
                          Focus Areas
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {division.focus.map((area) => (
                            <span
                              key={area}
                              className="px-3 py-1 text-xs bg-gray-800"
                            >
                              {area}
                            </span>
                          ))}
                        </div>

                        {division.status === "RECRUITING" && (
                          <a
                            href="https://www.linkedin.com/company/ucl-trading-soc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-block mt-6 px-6 py-2 bg-yellow-500 text-black font-mono text-xs uppercase tracking-widest hover:bg-yellow-400 transition"
                          >
                            Apply to Lead
                          </a>
                        )}
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
