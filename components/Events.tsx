"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const events = [
  {
    title: "UK Equity Outlook: Navigating Volatility in 2026",
    speaker: "Dr. Sarah Chen — Goldman Sachs",
    date: "APR 1, 2026",
    time: "18:00 GMT",
    location: "Roberts Building 309",
    tag: "EQUITIES",
  },
  {
    title: "Commodities Supercycle: Energy & Metals in 2026",
    speaker: "James Bridel — Trafigura",
    date: "APR 22, 2026",
    time: "17:30 GMT",
    location: "Engineering Front 124",
    tag: "COMMODITIES",
  },
  {
    title: "Credit Markets & Duration Risk",
    speaker: "Tom Wallace — PIMCO",
    date: "MAY 01, 2026",
    time: "18:00 GMT",
    location: "Cruciform B404",
    tag: "FIXED INCOME",
  },
];

export default function Events() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <SectionHeader
          label="// 002 — Events"
          title="Upcoming"
          description="Secure your seat at our next institutional-grade event."
        />

        {/* EVENTS LIST */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-800 bg-gray-900/60 p-6 md:p-8 hover:border-yellow-500 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* LEFT */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs px-2 py-0.5 border border-yellow-500 text-yellow-500">
                      {event.tag}
                    </span>
                    <span className="font-mono text-xs text-gray-400">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {event.speaker}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span className="font-mono text-xs">
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span className="font-mono text-xs">
                      {event.location}
                    </span>
                  </div>

                  <button className="px-4 py-2 border border-yellow-500 text-yellow-500 font-mono text-xs uppercase tracking-wider hover:bg-yellow-500 hover:text-black transition">
                    SECURE SEAT
                  </button>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-yellow-500 hover:text-yellow-400 transition"
          >
            VIEW ALL EVENTS <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}