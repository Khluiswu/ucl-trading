"use client";

import { motion } from "framer-motion";
import { useImageWithFallback } from "@/lib/useImageWithFallback";
import type { TeamMember } from "@/lib/team";

function LinkedInGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.66c0-1.35-.03-3.09-1.96-3.09-1.96 0-2.26 1.47-2.26 2.99V21h-4V9Z" />
    </svg>
  );
}

/**
 * Head-shot lives at /public/team/<slug>.(jpg|png). Until one is supplied the
 * card falls back to an initials monogram rather than a broken image.
 */
export default function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const photo = useImageWithFallback([
    `/team/${member.slug}.jpg`,
    `/team/${member.slug}.png`,
  ]);

  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <motion.a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group block bg-gray-900/60 border border-gray-800 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(245,185,33,0.15)] transition-all"
      aria-label={`${member.name}, ${member.role}, LinkedIn profile`}
    >
      {/* PORTRAIT */}
      <div className="relative aspect-square overflow-hidden bg-gray-800/60">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element -- resolved at runtime with a monogram fallback
          <img
            src={photo}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <span className="font-display text-4xl font-bold text-yellow-500/80">
              {initials}
            </span>
          </div>
        )}

        {/* LinkedIn badge */}
        <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center bg-black/70 backdrop-blur border border-gray-700 text-gray-300 group-hover:border-yellow-500 group-hover:text-yellow-500 transition-colors">
          <LinkedInGlyph />
        </div>
      </div>

      {/* DETAILS */}
      <div className="p-5">
        <h3 className="font-semibold text-base leading-tight">{member.name}</h3>
        <p className="text-yellow-500 font-mono uppercase text-[10px] tracking-[0.15em] mt-2">
          {member.role}
        </p>
        <p className="text-gray-500 text-xs mt-1">{member.division}</p>
      </div>
    </motion.a>
  );
}
