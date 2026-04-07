"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="London skyline"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7">
            
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-widest uppercase text-yellow-500 mb-6 block"
            >
              University College London — Est. 2024
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
              Your institutional gateway to global markets. Bridging quantitative 
              research with real-world trading experience at UCL.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#join"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-black font-mono text-xs uppercase"
              >
                Join Society <ArrowRight size={14} />
              </a>

              <a
                href="#overview"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 text-white font-mono text-xs uppercase hover:border-yellow-500 hover:text-yellow-500 transition"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-gray-900/80 backdrop-blur p-8 border border-gray-800">
              
              <div className="flex items-center gap-2 mb-6 text-green-400 text-xs font-mono uppercase">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Live Society Pulse
              </div>

              <div className="space-y-6">

                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users size={16} />
                    Active Members
                  </div>
                  <span className="text-xl">350+</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    Events
                  </div>
                  <span className="text-xl">24+</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <TrendingUp size={16} />
                    Attendance
                  </div>
                  <span className="text-green-400">87%</span>
                </div>

                <div>
                  <span className="text-gray-400 text-xs">NEXT EVENT</span>
                  <p className="mt-1">Macro Outlook: Q2 2026</p>
                  <p className="text-yellow-500 text-xs mt-1">
                    APR 15 — Roberts Building
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}