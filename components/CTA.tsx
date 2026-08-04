"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SOCIETY_EMAIL, SOCIETY_LINKS } from "@/lib/society";

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
            {"// Membership"}
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <br />
            <span className="text-yellow-500">Early</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            We&apos;re only just getting started, so the people who join now get
            a real say in what this becomes. The first 150 members also get a
            TradingView subscription.
          </p>

          <a
            href={SOCIETY_LINKS.studentsUnion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 text-black font-mono text-sm uppercase tracking-widest hover:bg-yellow-400 transition"
          >
            Join UCL Trading Society <ArrowRight size={16} />
          </a>

          <p className="font-mono text-xs text-gray-400 mt-6">
            Membership opens soon. Add yourself to the mailing list on our
            Students&apos; Union page and we&apos;ll let you know.
          </p>

          <p className="font-mono text-xs text-gray-500 mt-4">
            Questions?{" "}
            <a
              href={`mailto:${SOCIETY_EMAIL}`}
              className="text-yellow-500 hover:text-yellow-400 transition break-all"
            >
              {SOCIETY_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
