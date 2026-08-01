"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PartnerLogo from "@/components/PartnerLogo";
import { partners } from "@/lib/partners";
import { SOCIETY_EMAIL } from "@/lib/society";

export default function Partners({
  label = "// 004 — Partnerships",
  title = "Our Partners",
  description = "We work with exchanges, merchants and platforms that shape how markets actually function — giving members tools, access and exposure from day one.",
  className = "py-24",
}: {
  label?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={`${className} bg-black text-white`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label={label}
          title={title}
          description={description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.slug}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group border border-gray-800 bg-gray-900/60 p-8 hover:border-yellow-500 hover:shadow-[0_0_24px_rgba(245,185,33,0.12)] transition flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <PartnerLogo partner={partner} />
                <ArrowUpRight
                  size={16}
                  className="text-gray-600 group-hover:text-yellow-500 transition-colors shrink-0 mt-1"
                />
              </div>

              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-yellow-500 mb-3">
                {partner.category}
              </span>

              <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {partner.blurb}
              </p>
            </motion.a>
          ))}
        </div>

        {/* SPONSORSHIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 border border-gray-800 bg-gray-900/40 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 border border-yellow-500 flex items-center justify-center">
              <Handshake size={18} className="text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Partner with us
              </h3>
              <p className="text-gray-400 text-sm max-w-xl">
                We&apos;re building our founding year and welcome firms who want
                early access to UCL&apos;s markets talent. Get in touch to
                discuss sponsorship, events or workshops.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${SOCIETY_EMAIL}?subject=Sponsorship%20enquiry%20%E2%80%94%20UCL%20Trading%20Society`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition shrink-0"
          >
            Discuss sponsorship <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
