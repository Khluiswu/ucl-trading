import Link from "next/link";
import Image from "next/image";
import { SOCIETY_EMAIL, SOCIETY_LINKS } from "@/lib/society";

const socials = [
  { label: "LinkedIn", href: SOCIETY_LINKS.linkedin },
  { label: "Instagram", href: SOCIETY_LINKS.instagram },
  { label: "Students' Union", href: SOCIETY_LINKS.studentsUnion },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="UCL Trading Society Logo"
                width={38}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="font-semibold tracking-wider">
                UCL TRADING SOCIETY
              </span>
            </div>

            <p className="text-gray-400 text-sm max-w-md tracking-wide">
              The home of financial markets at UCL — equities, commodities,
              fixed income and FX. Division-led research, practical trading
              workshops and direct industry access, open to every student
              whatever their degree or starting point.
            </p>

            <div className="flex gap-4 mt-6 text-xs text-gray-400">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 tracking-widest transition"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-yellow-500 font-mono text-xs tracking-widest uppercase mb-4">
              Navigation
            </h4>

            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </p>
              <p>
                <Link href="/divisions" className="hover:text-white transition">
                  Divisions
                </Link>
              </p>
              <p>
                <Link href="/events" className="hover:text-white transition">
                  Events
                </Link>
              </p>
              <p>
                <Link href="/insights" className="hover:text-white transition">
                  Insights
                </Link>
              </p>
              <p>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-500 font-mono text-xs tracking-widest uppercase mb-4">
              Contact
            </h4>

            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a
                  href={`mailto:${SOCIETY_EMAIL}`}
                  className="text-white hover:text-yellow-500 transition break-all"
                >
                  {SOCIETY_EMAIL}
                </a>
              </p>
              <p className="text-xs">
                Sponsorship and member enquiries welcome
              </p>
              <p className="pt-2">UCL Bloomsbury Campus</p>
              <p>London, UK</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-400">
          <p>© 2026 UCL Trading Society. All rights reserved.</p>
          <p className="font-mono tracking-widest">EST. 2026 — LONDON, UK</p>
        </div>
      </div>
    </footer>
  );
}
