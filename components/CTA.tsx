"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="join"
      className="py-32 relative overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/campus.jpg"
          alt="UCL campus"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-yellow-500 mb-6 block">
            {"// Join the Founding Cohort"}
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Edge <br />
            <span className="text-yellow-500">Starts Here</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Be part of UCL&apos;s newest trading society from day one. Founding
            members shape our divisions, our events and our culture — and the
            first 150 unlock TradingView&apos;s professional tools.
          </p>

          <a
            href="https://studentsunionucl.org/clubs-societies/trading-society"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 text-black font-mono text-sm uppercase tracking-widest hover:bg-yellow-400 transition"
          >
            Join UCL Trading Society <ArrowRight size={16} />
          </a>

          <p className="font-mono text-xs text-gray-400 mt-6">
            Membership opening soon — join the mailing list on our Students&apos;
            Union page
          </p>
        </motion.div>
      </div>
    </section>
  );
}
