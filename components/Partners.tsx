"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CandlestickChart } from "lucide-react";

export default function Partners() {
  return (
    <section className="py-16 border-y border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-gray-800 bg-gray-900/60 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 shrink-0 border border-yellow-500 flex items-center justify-center">
              <CandlestickChart size={22} className="text-yellow-500" />
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-yellow-500 mb-2">
                {"// Official Partner"}
              </p>
              <h3 className="text-2xl font-semibold mb-2">TradingView</h3>
              <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                Our first official partnership. The first 150 members get
                access to TradingView&apos;s professional market analysis
                tools — advanced charting, stock screeners and economic
                calendars.
              </p>
            </div>
          </div>

          <a
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 font-mono text-xs tracking-widest uppercase text-white hover:border-yellow-500 hover:text-yellow-500 transition shrink-0"
          >
            tradingview.com <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
