"use client";

import { useId } from "react";
import { useImageWithFallback } from "@/lib/useImageWithFallback";
import type { Org } from "@/lib/partners";

/**
 * Renders a partner logo from /public/partners/<slug>.(svg|png|webp|jpg).
 *
 * Mono marks render bare on the black page. Logos whose brand colour cannot
 * survive that get a white plate instead — CCI ships as a JPEG with a baked-in
 * white background, and inverting ICE would turn its blue bracket orange.
 * Backing a logo is better than recolouring someone else's mark.
 *
 * The plate has a fixed height but hugs the logo's width, so a square mark gets
 * a square-ish plate and a wide wordmark a wide one. Falls back to a
 * typographic lockup when no asset is present.
 */
export default function PartnerLogo({
  partner,
  className = "",
  height = "h-16",
  logoClass,
  pad = "px-4 py-2.5",
}: {
  partner: Org;
  className?: string;
  height?: string;
  /** Override the per-partner height cap — pass "max-h-full" in compact slots. */
  logoClass?: string;
  pad?: string;
}) {
  const generatedId = useId();
  const filterId = `dark-logo-to-white-${generatedId.replaceAll(":", "")}`;
  const logo = useImageWithFallback(
    partner.logoFile
      ? [`/partners/${partner.logoFile}`]
      : [
          `/partners/${partner.slug}.svg`,
          `/partners/${partner.slug}.png`,
          `/partners/${partner.slug}.webp`,
          `/partners/${partner.slug}.jpg`,
        ],
  );

  const plated = partner.plate !== false;

  return (
    <div
      className={`inline-flex ${height} items-center justify-center overflow-hidden ${pad} ${
        plated
          ? "bg-white opacity-90 group-hover:opacity-100 transition-opacity"
          : ""
      } ${className}`}
    >
      {partner.recolorDarkToWhite && (
        <svg aria-hidden="true" className="absolute h-0 w-0">
          <filter
            id={filterId}
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
            colorInterpolationFilters="sRGB"
          >
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0.2126 0.7152 0.0722 0 0"
              result="luminance"
            />
            <feComponentTransfer in="luminance" result="colouredPixels">
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
            <feComposite
              in="SourceGraphic"
              in2="colouredPixels"
              operator="in"
              result="preservedColour"
            />
            <feFlood floodColor="#ffffff" result="white" />
            <feComposite
              in="white"
              in2="SourceAlpha"
              operator="in"
              result="whiteSilhouette"
            />
            <feComposite
              in="whiteSilhouette"
              in2="colouredPixels"
              operator="out"
              result="whiteLetters"
            />
            <feMerge>
              <feMergeNode in="whiteLetters" />
              <feMergeNode in="preservedColour" />
            </feMerge>
          </filter>
        </svg>
      )}

      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element -- resolved at runtime with a typographic fallback
        <img
          src={logo}
          alt={`${partner.name} logo`}
          style={
            partner.recolorDarkToWhite
              ? { filter: `url(#${filterId})` }
              : undefined
          }
          className={`${logoClass ?? partner.logoClass ?? "max-h-8"} ${
            partner.invert ? "invert" : ""
          } max-w-full w-auto object-contain`}
        />
      ) : (
        <span
          className={`font-display text-lg font-semibold tracking-tight whitespace-nowrap ${
            plated ? "text-gray-900" : "text-gray-200"
          }`}
        >
          {partner.wordmark}
        </span>
      )}
    </div>
  );
}
