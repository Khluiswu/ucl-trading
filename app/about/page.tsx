"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { LinkIcon } from "lucide-react";

const team = [
  { name: "Kaihao Luis Wu", role: "President", division: "Executive" },
  { name: "Rahul Shafia", role: "Treasurer", division: "Executive" },  
  { name: "Zijia Zhao", role: "Vice President", division: "Executive" },
  { name: "Anies Desai", role: "Head of FX", division: "FX" },
  { name: "Wenhao Wang", role: "Head of Equities", division: "Equities" },
  { name: "James Bridel", role: "Head of Commodities", division: "Commodities" },

  
  { name: "Maria Lopez", role: "Events Director", division: "Events" },
  { name: "David Kim", role: "Head of Research", division: "Research" },
  { name: "Micah Zheng", role: "Welfare Officer", division: "Welfare" }
];

const stats = [
  { label: "Founded", value: 2024, suffix: "" },
  { label: "Active Members", value: 350, suffix: "+" },
  { label: "Industry Partners", value: 12, suffix: "" },
  { label: "Events Per Year", value: 24, suffix: "+" },
];

export default function AboutPage() {
  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          label="// About"
          title="Who We Are"
          description=""
        />

        {/* INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              UCL Trading Society is a student-led organisation focused on global markets,
              trading, and quantitative finance.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2024, the society connects students with industry through
              research, events, and structured divisions operating like real desks.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our mission is to bridge academic theory with practical market experience,
              preparing members for careers in trading, investment banking, and asset management.
            </p>

            {/* LINE */}
            <div className="border-t border-gray-800 my-8" />

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-yellow-500">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/about.jpg"
              alt="Trading desk"
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>

        </div>

        {/* TEAM */}
        <SectionHeader
          label="// Committee 2025/26"
          title="Leadership"
          description="The executive team driving the society."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900/60 border border-gray-800 p-6 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all group"
            >

              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center mb-4">
                <span className="text-yellow-500 font-bold text-sm">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>

              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-yellow-500 font-mono text-x mt-3">{member.role}</p>
              <p className="text-gray-400 text-xs">{member.division}</p>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  <LinkIcon size={14} />
                </a>
              </div>

            </motion.div>
          ))}

        </div>

        {/* PARTNERS */}
        <div className="mt-24">
          <SectionHeader
            label="// Network"
            title="Partners"
            description="Connections across top financial institutions."
          />

          <div className="flex flex-wrap gap-4">
            {[
              "Goldman Sachs",
              "Citadel",
              "BlackRock",
              "Jane Street",
              "PIMCO",
              "Morgan Stanley",
              "JPMorgan",
              "Barclays",
            ].map((firm) => (
              <div
                key={firm}
                className="px-6 py-3 border border-gray-800 text-xs text-gray-400 hover:border-yellow-500 transition"
              >
                {firm}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}