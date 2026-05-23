import { motion } from "framer-motion";

export default function CTASection({ scrollToBuilder }) {
  return (
    <section
      id="pricing"
      className="py-20 transition-all duration-500 bg-warm-50"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="CTA workspace"
              className="w-full h-full object-cover object-top"
              src="https://readdy.ai/api/search-image?query=top%20view%20aerial%20shot%20of%20beautiful%20minimal%20workspace%20desk%20with%20laptop%20notebook%20plant%20and%20coffee%2C%20warm%20morning%20light%2C%20flat%20lay%20photography%2C%20clean%20aesthetic%2C%20warm%20neutral%20tones&width=1200&height=500&seq=cta-bg-v2&orientation=landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/70 to-charcoal-950/40" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 md:px-12 py-14">
            <div className="max-w-lg">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 mb-4">
                Your Setup Preview
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Ready to
                <br />
                <span className="text-sand-400">Rent?</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Join hundreds of digital nomads who already ditched the office.
                Your dream workspace is one click away.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={scrollToBuilder}
                className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sand-500 hover:bg-sand-400 text-white font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Start Building
                <i className="ri-arrow-right-line" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
