"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { ChevronDown, Download, FileText, Calendar, User } from "lucide-react";

const papers = [
  {
    id: 1,
    title: "UK Semiconductor Supply Chain",
    author: "Equities Division",
    date: "2026-03-15",
    division: "EQUITIES",
    summary: "Analysis of UK semiconductor positioning and listed exposure.",
    takeaways: [
      "ARM dominates IP licensing",
      "UK investment trails US/EU",
      "Long ARM thesis",
    ],
  },
  {
    id: 2,
    title: "Defense Premium in Europe",
    author: "Equities Division",
    date: "2026-03-01",
    division: "EQUITIES",
    summary: "Investment case for European defense contractors.",
    takeaways: [
      "Defense spending rising",
      "BAE Systems positioned well",
      "Strong earnings visibility",
    ],
  },
];

const divisionColors: any = {
  EQUITIES: "border-yellow-500 text-yellow-500",
  COMMODITIES: "border-orange-400 text-orange-400",
  "FIXED INCOME": "border-blue-400 text-blue-400",
  FX: "border-green-400 text-green-400",
};

export default function Research() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filterDiv, setFilterDiv] = useState("ALL");

  const filtered =
    filterDiv === "ALL"
      ? papers
      : papers.filter((p) => p.division === filterDiv);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          label="// Research Archive"
          title="Research"
          description="Proprietary research from our divisions."
        />

        {/* FILTER */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {["ALL", "EQUITIES", "COMMODITIES", "FIXED INCOME", "FX"].map((div) => (
            <button
              key={div}
              onClick={() => setFilterDiv(div)}
              className={`px-4 py-2 font-mono tracking-widest text-xs border ${
                filterDiv === div
                  ? "border-yellow-500 text-yellow-500"
                  : "border-gray-700 text-gray-400"
              }`}
            >
              {div}
            </button>
          ))}
        </div>

        {/* TABLE */}
        <div className="border border-gray-800">

          {/* HEADER */}
          <div className="hidden md:grid grid-cols-12 px-6 py-3 text-xs text-gray-400 border-b border-gray-800">
            <div className="col-span-5">Title</div>
            <div className="col-span-2">Division</div>
            <div className="col-span-2">Author</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-1"></div>
          </div>

          {/* ROWS */}
          {filtered.map((paper, index) => {
            const isExpanded = expandedId === paper.id;

            return (
              <div key={paper.id}>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() =>
                    setExpandedId(isExpanded ? null : paper.id)
                  }
                  className="grid grid-cols-1 md:grid-cols-12 px-6 py-5 border-b border-gray-800 cursor-pointer hover:bg-gray-900"
                >
                  <div className="md:col-span-5 flex items-center gap-2">
                    <FileText size={14} />
                    {paper.title}
                  </div>

                  <div className="md:col-span-2">
                    <span className={`font-mono tracking-widest px-2 py-1 text-xs border ${divisionColors[paper.division]}`}>
                      {paper.division}
                    </span>
                  </div>

                  <div className="md:col-span-2 text-sm text-gray-400">
                    {paper.author}
                  </div>

                  <div className="md:col-span-2 text-xs text-gray-400">
                    {paper.date}
                  </div>

                  <div className="md:col-span-1 flex justify-end">
                    <ChevronDown
                      size={16}
                      className={isExpanded ? "rotate-180" : ""}
                    />
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden border-b border-gray-800 bg-gray-900"
                    >
                      <div className="p-6">
                        <p className="text-gray-400 mb-4">{paper.summary}</p>

                        <ul className="space-y-2 mb-4">
                          {paper.takeaways.map((t, i) => (
                            <li key={i} className="text-sm text-gray-400">
                              → {t}
                            </li>
                          ))}
                        </ul>

                        <button className="px-4 py-2 border border-yellow-500 text-yellow-500 text-xs">
                          <Download size={12} /> Download
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}