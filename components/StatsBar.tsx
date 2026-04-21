"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { label: "Members", value: 200, suffix: "+" },
  { label: "Events Planned", value: 20, suffix: "+" },
  { label: "Industry Partners", value: 12, suffix: "" },
  { label: "Research Papers", value: 18, suffix: "" },
  { label: "Divisions", value: 4, suffix: "" },
];

export default function StatsBar() {
  return (
    <section className="py-12 border-y border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              
              <div className="text-3xl md:text-4xl font-bold text-yellow-500">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <p className="font-mono text-xs text-gray-400 mt-2 tracking-wider uppercase">
                {stat.label}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}