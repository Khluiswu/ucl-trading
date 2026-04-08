"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="join" className="py-32 relative overflow-hidden bg-black text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/campus.jpg"
          alt="UCL campus"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          <span className="font-mono text-xs uppercase text-yellow-500 mb-6 block">
            // Join the Network
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Edge <br />
            <span className="text-yellow-500">Starts Here</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Join 350+ ambitious students at UCL's premier trading society. 
            Access institutional-grade events, research programs, and a network 
            from campus to The City.
          </p>

          <a
            href="https://studentsunionucl.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 text-black font-mono text-sm uppercase hover:bg-yellow-400 transition"
          >
            Join UCL Trading Society <ArrowRight size={16} />
          </a>

          <p className="font-mono text-xs text-gray-400 mt-6">
            Free Taster Memberships for all UCL students
          </p>

        </motion.div>

      </div>
    </section>
  );
}