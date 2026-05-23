import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Bali coworking hero"
          className="w-full h-full object-cover object-top"
          src="https://readdy.ai/api/search-image?query=breathtaking%20tropical%20bali%20coworking%20space%20with%20lush%20jungle%20view%2C%20open%20air%20design%2C%20rattan%20and%20wood%20furniture%2C%20golden%20hour%20warm%20light%2C%20monstera%20plants%2C%20cinematic%20beautiful%20photography%2C%20highly%20detailed%2C%20premium%20lifestyle%2C%20deep%20saturated%20colors&width=1440&height=900&seq=hero-bg-v2&orientation=landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/50 to-charcoal-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 md:px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-tropical-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">
              Workspace Configurator
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Build Your
            <br />
            <span className="text-sand-400">Dream Desk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-sm"
          >
            Rent a beautifully curated workspace — desks, chairs, and
            accessories — delivered and set up at your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href="#builder"
              className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sand-500 hover:bg-sand-400 text-white font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <i className="ri-magic-line" />
              Start Building
            </a>
            <a
              href="#presets"
              className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              View Presets
              <i className="ri-arrow-right-line" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-4 md:right-12 z-10 flex gap-3 flex-wrap justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center min-w-[80px]"
        >
          <div className="text-xl font-bold text-white">200+</div>
          <div className="text-xs text-white/60">Happy nomads</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center min-w-[80px]"
        >
          <div className="text-xl font-bold text-white">12+</div>
          <div className="text-xs text-white/60">Furniture pieces</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center min-w-[80px]"
        >
          <div className="text-xl font-bold text-white">Free</div>
          <div className="text-xs text-white/60">Setup & delivery</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce-soft"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">
          Scroll
        </span>
        <i className="ri-arrow-down-line text-white/40 text-lg" />
      </motion.div>
    </section>
  );
}
