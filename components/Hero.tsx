"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SOCIETY_LINKS } from "@/lib/society";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="London skyline"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-widest uppercase text-yellow-500 mb-6 block"
            >
              Markets / Research / Careers
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
            >
              Trading <br />
              <span className="text-yellow-500">Society</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg max-w-lg mb-8"
            >
              A society for anyone at UCL who wants to know how markets really
              work. Four research desks covering equities, commodities, fixed
              income and FX, plus workshops, competitions, and speakers who do
              this professionally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={SOCIETY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition"
              >
                Join the Community <ArrowRight size={14} />
              </a>

              <a
                href={SOCIETY_LINKS.studentsUnion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white font-mono text-xs tracking-widest uppercase hover:border-yellow-500 hover:text-yellow-500 transition"
              >
                Become a Member
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
