import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar({
  isNightMode,
  onToggleNightMode,
  scrollToBuilder,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-50/90 backdrop-blur-xl border-b border-sand-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-charcoal-900">
            <i className="ri-building-line text-white text-sm" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-charcoal-900">
            Monis<span className="text-sand-500"> Rent</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#presets"
            className="text-sm font-medium transition-colors duration-200 hover:text-sand-500 text-charcoal-600"
          >
            Presets
          </a>
          <a
            href="#builder"
            className="text-sm font-medium transition-colors duration-200 hover:text-sand-500 text-charcoal-600"
          >
            Furniture
          </a>
          <a
            href="#stories"
            className="text-sm font-medium transition-colors duration-200 hover:text-sand-500 text-charcoal-600"
          >
            Stories
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium transition-colors duration-200 hover:text-sand-500 text-charcoal-600"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleNightMode}
            className="relative w-14 h-7 rounded-full transition-all duration-500 cursor-pointer bg-sand-200"
            aria-label="Toggle day/night mode"
          >
            <motion.div
              animate={{ x: isNightMode ? 28 : 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-1 w-5 h-5 rounded-full flex items-center justify-center text-xs bg-white text-sand-600"
            >
              {isNightMode ? "🌙" : "☀️"}
            </motion.div>
          </button>

          <button
            onClick={scrollToBuilder}
            className="hidden sm:flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 bg-charcoal-900 text-white hover:bg-charcoal-700"
          >
            Open Builder
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
