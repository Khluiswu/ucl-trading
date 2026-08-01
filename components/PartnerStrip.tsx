"use client";

import { motion } from "framer-motion";
import PartnerLogo from "@/components/PartnerLogo";
import { partners } from "@/lib/partners";

export default function PartnerStrip() {
  return (
    <section className="relative border-y border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-gray-500 text-center mb-8"
        >
          In partnership with
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-800">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.slug}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-black flex flex-col items-center justify-center gap-4 px-5 py-7 hover:bg-gray-900/70 transition-colors"
            >
              <PartnerLogo partner={partner} />
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-gray-600 group-hover:text-yellow-500 transition-colors text-center">
                {partner.category}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
