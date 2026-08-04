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
    title: "Open To Everyone",
    description:
      "Trading has a reputation for being closed off. We want the opposite here, so everything we run is open to any student, whatever you study and whether or not you've traded before.",
  },
  {
    icon: Mic,
    title: "Industry Events",
    description:
      "Talks and panels with people who work in the industry, so you hear how a desk actually operates rather than how a textbook says it does.",
  },
  {
    icon: Swords,
    title: "Competitions",
    description:
      "Simulated markets where you put your ideas up against other members. It's the quickest way to find out what you actually understand.",
  },
  {
    icon: GraduationCap,
    title: "Skills And Applications",
    description:
      "Workshops on the technical side, then help with applications and interviews when you start going for trading and finance roles.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// 001 / Overview"
          title="What We Do"
          description="Four things we're building the society around."
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
                  PILLAR_{String(index + 1).padStart(2, "0")} / ACTIVE
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
