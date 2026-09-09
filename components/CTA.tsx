"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
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
            Join the <br />
            <span className="text-yellow-500">Community</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Meet UCL students who take markets seriously. Get event
            announcements, division updates and opportunities in the society
            WhatsApp group. The first 150 members also receive a TradingView
            subscription.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href={SOCIETY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-yellow-500 text-black font-mono text-sm uppercase tracking-widest hover:bg-yellow-400 transition"
            >
              Join WhatsApp <MessageCircle size={16} />
            </a>

            <a
              href={SOCIETY_LINKS.studentsUnion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-gray-700 text-white font-mono text-sm uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-500 transition"
            >
              Become a Member <ArrowRight size={16} />
            </a>
          </div>

          <p className="font-mono text-xs text-gray-400 mt-6">
            Open to every UCL degree and every level of markets experience.
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
