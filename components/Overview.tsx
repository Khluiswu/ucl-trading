"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import {
  TrendingUp,
  Mic,
  Swords,
  GraduationCap,
} from "lucide-react";

const initiatives = [
  {
    icon: TrendingUp,
    title: "Promote & Expose",
    description:
      "We break down barriers and make trading accessible to every UCL student, regardless of background, degree or prior experience.",
  },
  {
    icon: Mic,
    title: "Industry Events",
    description:
      "We demystify the field by connecting students with industry professionals — speaker panels, career talks and real-world market insight.",
  },
  {
    icon: Swords,
    title: "Trading Competitions",
    description:
      "Hands-on simulations and competitions that build practical capability and confidence in live-market conditions.",
  },
  {
    icon: GraduationCap,
    title: "Equip & Support",
    description:
      "Technical workshops, professional skills and early-career support — from TradingView tooling to application guidance for trading and finance roles.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// 001 — Overview"
          title="Our Mission"
          description="We exist to give students a genuine, working understanding of how financial markets operate — and the access to act on it."
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
                className="border border-gray-800 bg-gray-900/60 p-8 hover:border-yellow-500 hover:shadow-[0_0_24px_rgba(245,185,33,0.12)] transition group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 shrink-0 border border-gray-700 flex items-center justify-center group-hover:border-yellow-500 transition">
                    <Icon size={18} className="text-yellow-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="font-mono tracking-widest mt-6 text-xs text-yellow-500 opacity-0 group-hover:opacity-100 transition">
                  PILLAR_{String(index + 1).padStart(2, "0")} — ACTIVE
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
