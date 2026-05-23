import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="transition-all duration-500 bg-sand-50 border-t border-sand-200">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 pb-3 border-b text-charcoal-600 border-sand-200">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#builder"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Workspace Builder
                </a>
              </li>
              <li>
                <a
                  href="#presets"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Presets
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  What's included
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 pb-3 border-b text-charcoal-600 border-sand-200">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  About Monis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Born in Bali
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 pb-3 border-b text-charcoal-600 border-sand-200">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Setup Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 pb-3 border-b text-charcoal-600 border-sand-200">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Rental Agreement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 text-charcoal-400 hover:text-charcoal-700"
                  rel="nofollow"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-sand-200">
          <div>
            <h2 className="font-display text-6xl md:text-8xl font-bold leading-none text-sand-200">
              Monis<span className="text-sand-300"> Rent</span>
            </h2>
            <div className="flex items-center gap-3 mt-3 text-charcoal-400">
              <div className="w-8 h-px bg-sand-300" />
              <span className="text-xs">
                Workspace rentals for modern nomads
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-3">
            <p className="text-xs text-charcoal-400">
              © 2026 Monis Rent. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                rel="nofollow"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-sand-200 text-charcoal-500 hover:text-charcoal-800"
              >
                <i className="ri-instagram-line text-sm" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                rel="nofollow"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-sand-200 text-charcoal-500 hover:text-charcoal-800"
              >
                <i className="ri-twitter-x-line text-sm" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                rel="nofollow"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-sand-200 text-charcoal-500 hover:text-charcoal-800"
              >
                <i className="ri-linkedin-line text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
