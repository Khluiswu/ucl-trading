"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, Clock, CalendarDays, ArrowRight } from "lucide-react";

const allEvents = [
  {
    id: 1,
    title: "UK Equity Outlook: Navigating Volatility in 2026",
    speaker: "Dr. Sarah Chen",
    firm: "Goldman Sachs",
    date: "2026-04-1",
    time: "18:00",
    location: "Roberts Building 309",
    tag: "EQUITIES",
    description:
      "Deep-dive into FTSE stock selection and sector rotation opportunities.",
    upcoming: true,
  },
  {
    id: 2,
    title: "Commodities Supercycle: Energy & Metals",
    speaker: "James Bridel",
    firm: "Trafigura",
    date: "2026-04-22",
    time: "17:30",
    location: "Engineering Front 124",
    tag: "COMMODITIES",
    description:
      "Exploring structural supply constraints in energy markets.",
    upcoming: true,
  },
  {
    id: 3,
    title: "Credit Markets & Duration Risk",
    speaker: "Tom Wallace",
    firm: "PIMCO",
    date: "2026-05-01",
    time: "18:00",
    location: "Cruciform B404",
    tag: "FIXED INCOME",
    description:
      "Navigating yield curves and credit spreads in 2026.",
    upcoming: true,
  },
];

const tagColors: any = {
  EQUITIES: "border-yellow-500 text-yellow-500",
  COMMODITIES: "border-orange-400 text-orange-400",
  "FIXED INCOME": "border-blue-400 text-blue-400",
  FX: "border-green-400 text-green-400",
};

export default function EventsPage() {
  const [filter, setFilter] = useState("upcoming");

  const filtered = allEvents.filter((e) =>
    filter === "upcoming" ? e.upcoming : !e.upcoming
  );

  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          label="// Event Ledger"
          title="Events"
          description="Institutional-grade speaker panels and workshops."
        />

        {/* FILTER */}
        <div className="flex font-mono tracking-wider gap-4 mb-12">
          {["upcoming", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 text-xs uppercase border transition-all ${
                filter === tab
                  ? "border-yellow-500 text-yellow-500"
                  : "border-gray-700 text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* EVENTS */}
        <div className="space-y-4">
          {filtered.map((event, index) => {
            const dateObj = new Date(event.date);
            const month = dateObj.toLocaleDateString("en-US", {
              month: "short",
            }).toUpperCase();
            const day = dateObj.getDate();

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-gray-900/60 border border-gray-800 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all"
              >
                <div className="p-6 md:p-8">

                  <div className="flex flex-col lg:flex-row justify-between gap-6">

                    {/* LEFT SIDE */}
                    <div className="flex gap-6">

                      {/* DATE BLOCK (THIS WAS MISSING BEFORE) */}
                      <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 border border-gray-800">
                        <span className="text-xs text-gray-400">
                          {month}
                        </span>
                        <span className="text-2xl font-bold leading-none">
                          {day}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`font-mono tracking-widest px-2 py-1 text-xs border ${tagColors[event.tag]}`}
                          >
                            {event.tag}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold mb-1">
                          {event.title}
                        </h3>

                        <p className="text-yellow-500 text-sm">
                          {event.speaker} — {event.firm}
                        </p>

                        <p className="text-gray-400 text-sm mt-2 max-w-xl">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col items-start lg:items-end gap-3">

                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-1 text-xs">
                          <Clock size={12} /> {event.time}
                        </span>

                        <span className="flex items-center gap-1 text-xs">
                          <MapPin size={12} /> {event.location}
                        </span>
                      </div>

                      {event.upcoming && (
                        <button className="px-5 py-2.5 bg-yellow-500 font-mono text-black text-sm uppercase tracking-widest hover:bg-yellow-400 transition flex items-center gap-2">
                          SECURE SEAT <ArrowRight size={12} />
                        </button>
                      )}

                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}