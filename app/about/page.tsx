"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import TeamCard from "@/components/TeamCard";
import Partners from "@/components/Partners";
import { team } from "@/lib/team";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Founded", value: 2026, suffix: "", animate: false },
  { label: "Committee Members", value: 7, suffix: "", animate: true },
  { label: "Divisions Launching", value: 4, suffix: "", animate: true },
  { label: "Industry Partners", value: 4, suffix: "", animate: true },
];

export default function AboutPage() {
  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="// About" title="Who We Are" description="" />

        {/* INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              UCL Trading Society exists to give students a genuine, working
              understanding of how financial markets operate — and the access
              to act on it.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              We cover equities, commodities, fixed income and FX through four
              division-led research desks, practical trading workshops built on
              professional tooling, and competitions that test the same skills
              trading firms assess at interview. Alongside that, we bring the
              industry directly to campus through speaker events and interviews
              with people who trade these markets for a living.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Founded in 2026, we are deliberately open to every student
              whatever their degree or starting point — from those who have
              never opened a chart to those already preparing for trading
              assessments. Our founding members are shaping what this society
              becomes.
            </p>

            {/* LINE */}
            <div className="border-t border-gray-800 my-8" />

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-yellow-500">
                    {stat.animate ? (
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    ) : (
                      <span className="font-mono tabular-nums">
                        {stat.value}
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[320px]"
          >
            <Image
              src="/about.jpg"
              alt="Trading desk"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-80"
            />
          </motion.div>
        </div>

        {/* TEAM */}
        <SectionHeader
          label="// Committee 2026/27"
          title="Leadership"
          description="The founding team building the society. Every profile links through to LinkedIn."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {team.map((member, index) => (
            <TeamCard key={member.slug} member={member} index={index} />
          ))}
        </div>

        {/* INTERVIEW CROSS-LINK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 border border-gray-800 bg-gray-900/40 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <p className="text-gray-400 text-sm max-w-2xl">
            Our Head of Commodities, James Bridel, recently interviewed{" "}
            <span className="text-white">Samuel Basi</span> — 11 years at
            Trafigura — on how physical commodity trading actually works.
          </p>

          <Link
            href="/insights/inside-physical-commodity-trading"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-yellow-500 hover:text-yellow-400 transition shrink-0"
          >
            Read the interview <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* PARTNERS */}
      <div className="mt-24">
        <Partners
          label="// Partnerships"
          title="Our Partners"
          description="The organisations backing the society in its first year."
          className="py-0"
        />
      </div>
    </section>
  );
}
