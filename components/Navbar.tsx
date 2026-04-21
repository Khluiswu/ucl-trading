"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Divisions", path: "/divisions" },
  { label: "Events", path: "/events" },
  { label: "Research", path: "/research" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-0 right-0 z-40 backdrop-blur bg-black/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="UCL Trading Society Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <div className="hidden sm:block">
            <span className="text-white font-semibold text-sm tracking-wider">
              UCL TRADING
            </span>
            <span className="text-gray-400 text-sm ml-1">SOCIETY</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                pathname === link.path
                  ? "text-yellow-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#join"
            className="px-5 py-2 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition"
          >
            Join Society
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block font-mono text-xs tracking-widest uppercase py-2 ${
                  pathname === link.path ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#join"
              className="block text-center px-5 py-2 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition mt-4"
            >
              Join Society
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}