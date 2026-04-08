"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import {
  ChevronRight,
  Users,
  FileText,
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
    status: "ACTIVE",
    description:
      "Fundamental analysis across global equity markets with institutional-grade research.",
    focus: ["Valuation", "Stock Pitching", "Sector Research"],
    papers: 3,
    members: 42,
  },
  {
    id: "commodities",
    name: "Commodities",
    icon: BarChart2,
    head: "James Bridel",
    role: "Head of Commodities",
    status: "ACTIVE",
    description:
      "Energy, metals and agricultural markets with strong macro and derivatives focus.",
    focus: ["Energy", "Metals", "Agriculture"],
    papers: 5,
    members: 38,
  },
  {
    id: "fixed-income",
    name: "Fixed Income",
    icon: Landmark,
    head: "TBA",
    role: "Head of Fixed Income",
    status: "RECRUITING",
    description:
      "Bond markets, credit analysis and yield curve strategies.",
    focus: ["Bonds", "Credit", "Yield Curve"],
    papers: 4,
    members: 33,
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
    papers: 6,
    members: 35,
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
          description="Institutional-style research desks operating across asset classes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {divisions.map((div, index) => {
            const isExpanded = expandedId === div.id;
            const Icon = div.icon;

            return (
              <motion.div
                key={div.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/60 border border-gray-800 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all cursor-pointer group"
                onClick={() =>
                  setExpandedId(isExpanded ? null : div.id)
                }
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
                          {div.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {div.head} — {div.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">

                      <span
                        className={`text-xs px-2 py-1 border ${
                          div.status === "RECRUITING"
                            ? "border-green-400 text-green-400"
                            : "border-gray-700 text-gray-400"
                        }`}
                      >
                        {div.status}
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
                  <p className="text-gray-400 text-sm mb-4">
                    {div.description}
                  </p>

                  {/* STATS */}
                  <div className="flex gap-6 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users size={12} /> {div.members}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText size={12} /> {div.papers}
                    </span>
                  </div>
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

                        <p className="text-yellow-500 text-xs uppercase mb-3">
                          Focus Areas
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {div.focus.map((area) => (
                            <span
                              key={area}
                              className="px-3 py-1 text-xs bg-gray-800"
                            >
                              {area}
                            </span>
                          ))}
                        </div>

                        {div.status === "RECRUITING" && (
                          <button className="mt-6 px-6 py-2 bg-yellow-500 text-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition">
                            APPLY TO JOIN
                          </button>
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