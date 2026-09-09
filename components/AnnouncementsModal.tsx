"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BellRing,
  Building2,
  UsersRound,
  X,
} from "lucide-react";
import {
  homeAnnouncements,
  homeAnnouncementVersion,
} from "@/content/home-announcements";

const storageKey = `uclts-home-announcements-${homeAnnouncementVersion}`;

export default function AnnouncementsModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  const dismiss = useCallback(() => {
    window.sessionStorage.setItem(storageKey, "dismissed");
    setOpen(false);
  }, []);

  useEffect(() => {
    const alreadySeen = window.sessionStorage.getItem(storageKey);
    if (alreadySeen) return;

    const timer = window.setTimeout(() => setOpen(true), 650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [dismiss, open]);

  function keepFocusInDialog(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close announcements"
        onClick={dismiss}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcements-title"
        onKeyDown={keepFocusInDialog}
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-4xl overflow-y-auto border border-gray-700 bg-black text-white shadow-[0_0_80px_rgba(245,185,33,0.16)]"
      >
        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-3 sm:px-7">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            UCLTS / Announcements
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            className="flex h-9 w-9 items-center justify-center border border-gray-700 text-gray-400 transition hover:border-yellow-500 hover:text-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            aria-label="Close announcements"
          >
            <X size={17} />
          </button>
        </div>

        <div className="p-5 sm:p-8 md:p-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-yellow-500">
                {"// Incoming opportunities"}
              </p>
              <h2
                id="announcements-title"
                className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Two launches are on the way.
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">
              <BellRing size={14} className="text-yellow-500" />
              Be first to hear
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {homeAnnouncements.map((announcement, index) => {
              const Icon = index === 0 ? UsersRound : Building2;
              const isGreen = announcement.accent === "green";

              return (
                <article
                  key={announcement.title}
                  className={`flex min-h-72 flex-col border bg-gray-950 p-6 sm:p-7 ${
                    isGreen ? "border-green-900/80" : "border-yellow-500/50"
                  }`}
                >
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center border ${
                        isGreen
                          ? "border-green-500/60 text-green-400"
                          : "border-yellow-500/70 text-yellow-500"
                      }`}
                    >
                      <Icon size={19} />
                    </div>
                    <span
                      className={`font-mono text-[9px] uppercase tracking-[0.18em] ${
                        isGreen ? "text-green-400" : "text-yellow-500"
                      }`}
                    >
                      {announcement.status}
                    </span>
                  </div>

                  <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    {announcement.eyebrow}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold">
                    {announcement.title}
                  </h3>
                  <p className="mb-7 text-sm leading-6 text-gray-400">
                    {announcement.description}
                  </p>

                  <a
                    href={announcement.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="mt-auto inline-flex w-fit items-center gap-2 border-b border-gray-600 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition hover:border-yellow-500 hover:text-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
                  >
                    {announcement.cta} <ArrowUpRight size={13} />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-gray-800 pt-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Full details and application links will be added when they go live.</p>
            <button
              type="button"
              onClick={dismiss}
              className="w-fit font-mono text-[10px] uppercase tracking-[0.18em] text-gray-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            >
              Continue to site →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
