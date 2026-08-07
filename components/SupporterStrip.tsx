"use client";

import { motion } from "framer-motion";
import PartnerLogo from "@/components/PartnerLogo";
import { sponsors, partners, type Org } from "@/lib/partners";

function Row({
  label,
  orgs,
  delayBase,
}: {
  label: string;
  orgs: Org[];
  delayBase: number;
}) {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-gray-500 text-center mb-6"
      >
        {label}
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
        {orgs.map((org, index) => (
          <motion.a
            key={org.slug}
            href={org.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delayBase + index * 0.08 }}
            className="group flex flex-col items-center gap-2.5"
          >
            <PartnerLogo partner={org} />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-gray-600 group-hover:text-yellow-500 transition-colors text-center">
              {org.category}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default function SupporterStrip() {
  return (
    <section className="relative border-y border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <Row label="Sponsored by" orgs={sponsors} delayBase={0} />

        <div className="border-t border-gray-800/70" />

        <Row label="In partnership with" orgs={partners} delayBase={0.15} />
      </div>
    </section>
  );
}
