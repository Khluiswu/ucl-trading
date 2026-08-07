"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PartnerLogo from "@/components/PartnerLogo";
import { sponsors, partners, type Org } from "@/lib/partners";
import { SOCIETY_EMAIL } from "@/lib/society";

function OrgCard({ org, index }: { org: Org; index: number }) {
  return (
    <motion.a
      href={org.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group border border-gray-800 bg-gray-900/60 p-8 hover:border-yellow-500 hover:shadow-[0_0_24px_rgba(245,185,33,0.12)] transition flex flex-col"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <PartnerLogo partner={org} />
        <ArrowUpRight
          size={16}
          className="text-gray-600 group-hover:text-yellow-500 transition-colors shrink-0 mt-1"
        />
      </div>

      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-yellow-500 mb-3">
        {org.category}
      </span>

      <h3 className="font-semibold text-lg mb-2">{org.name}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">{org.blurb}</p>
    </motion.a>
  );
}

function GroupHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-500 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm max-w-xl">{note}</p>
    </div>
  );
}

export default function Supporters({
  label = "// 004 / Support",
  className = "py-24",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <section className={`${className} bg-black text-white`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label={label}
          title="Sponsors & Partners"
          description="Five organisations backing us in our first year, from a quant trading firm to an exchange group."
        />

        {/* SPONSORS */}
        <GroupHeading
          title="Sponsors"
          note="Firms funding the society directly."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {sponsors.map((org, index) => (
            <OrgCard key={org.slug} org={org} index={index} />
          ))}
        </div>

        {/* PARTNERS */}
        <GroupHeading
          title="Partners"
          note="Firms giving us tools, access and training rather than funding."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((org, index) => (
            <OrgCard key={org.slug} org={org} index={index} />
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
              <h3 className="text-lg font-semibold mb-1">Work with us</h3>
              <p className="text-gray-400 text-sm max-w-xl">
                If your firm wants to reach students at UCL who are serious
                about markets, we&apos;d like to hear from you. We&apos;re open
                to sponsorship, events and workshops.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${SOCIETY_EMAIL}?subject=Sponsorship%20enquiry%20for%20UCL%20Trading%20Society`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition shrink-0"
          >
            Discuss sponsorship <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
