import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ucl-trading-soc/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ucltradingsoc/",
  },
  {
    label: "Students' Union",
    href: "https://studentsunionucl.org/clubs-societies/trading-society",
  },
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
              UCL&apos;s newest society for financial markets, trading and
              quantitative analysis — open to all students, all backgrounds,
              all experience levels.
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
                <Link href="/research" className="hover:text-white transition">
                  Research
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
                  href="https://studentsunionucl.org/clubs-societies/trading-society"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  Via Students&apos; Union UCL
                </a>
              </p>
              <p>UCL Bloomsbury Campus</p>
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
