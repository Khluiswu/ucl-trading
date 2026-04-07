import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-yellow-500 flex items-center justify-center">
                <span className="text-yellow-500 text-xs font-bold">TS</span>
              </div>
              <span className="font-semibold tracking-wider">
                UCL TRADING SOCIETY
              </span>
            </div>

            <p className="text-gray-400 text-sm max-w-md">
              UCL’s premier trading and finance society. Bridging academic
              excellence with real-world market exposure.
            </p>

            <div className="flex gap-4 mt-6 text-xs text-gray-400">
              <a href="#" className="hover:text-yellow-500">LinkedIn</a>
              <a href="#" className="hover:text-yellow-500">Instagram</a>
              <a href="#" className="hover:text-yellow-500">Twitter/X</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-yellow-500 text-xs uppercase mb-4">
              Navigation
            </h4>

            <div className="space-y-2 text-sm text-gray-400">
              <p><Link href="/">Home</Link></p>
              <p><Link href="/divisions">Divisions</Link></p>
              <p><Link href="/events">Events</Link></p>
              <p><Link href="/research">Research</Link></p>
              <p><Link href="/about">About</Link></p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-500 text-xs uppercase mb-4">
              Contact
            </h4>

            <div className="space-y-2 text-sm text-gray-400">
              <p>trading@ucl.ac.uk</p>
              <p>UCL Bloomsbury Campus</p>
              <p>London, UK</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between text-xs text-gray-400">
          <p>© 2026 UCL Trading Society</p>
          <p>EST. 2024 — LONDON</p>
        </div>

      </div>
    </footer>
  );
}