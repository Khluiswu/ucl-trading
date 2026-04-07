"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { TrendingUp, BarChart2, Landmark, DollarSign } from "lucide-react";

const initiatives = [
  {
    icon: TrendingUp,
    title: "Equities",
    description:
      "Fundamental analysis across global equity markets with stock pitches and sector reports.",
  },
  {
    icon: BarChart2,
    title: "Commodities",
    description:
      "Energy, metals and agricultural markets with focus on supply-demand and pricing.",
  },
  {
    icon: Landmark,
    title: "Fixed Income",
    description:
      "Bond markets, credit analysis, yield curves and structured products.",
  },
  {
    icon: DollarSign,
    title: "FX",
    description:
      "Currency markets, macro strategy and central bank policy analysis.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          label="// 001 — Overview"
          title="Our Mission"
          description="We connect ambitious students to the institutional world of global markets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-800 bg-gray-900/60 p-8 hover:border-yellow-500 transition group"
              >
                <div className="flex items-start gap-5">

                  <div className="w-10 h-10 border border-gray-700 flex items-center justify-center group-hover:border-yellow-500 transition">
                    <Icon size={18} className="text-yellow-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>

                <div className="mt-6 text-xs text-yellow-500 opacity-0 group-hover:opacity-100 transition">
                  SECTOR_{String(index + 1).padStart(2, "0")} — ACTIVE
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}