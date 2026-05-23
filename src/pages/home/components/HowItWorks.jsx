import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "ri-cursor-line",
    title: "Pick Your Pieces",
    desc: "Browse desks, chairs, and accessories. Mix and match until it feels exactly right.",
  },
  {
    num: "02",
    icon: "ri-calendar-check-line",
    title: "Choose Your Plan",
    desc: "Monthly rentals with no long-term commitment. Upgrade, swap, or cancel anytime.",
  },
  {
    num: "03",
    icon: "ri-truck-line",
    title: "We Deliver & Set Up",
    desc: "Our team delivers and assembles your full setup at your door — for free.",
  },
  {
    num: "04",
    icon: "ri-leaf-line",
    title: "Work in Paradise",
    desc: "Enjoy your premium workspace. Need changes? We swap items within 48 hours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 transition-all duration-500 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-4 border-sand-300 text-charcoal-500">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal-900">
            Simple as <span className="text-sand-500">1, 2, 3, 4</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-default bg-sand-50 border-sand-200/60 hover:border-sand-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold font-mono text-charcoal-300">
                  {step.num}
                </span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 bg-sand-100 text-charcoal-600 group-hover:bg-sand-500 group-hover:text-white">
                  <i className={`${step.icon} text-base`} />
                </div>
              </div>
              <h3 className="text-sm font-bold mb-2 text-charcoal-900">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-charcoal-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
