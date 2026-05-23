import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aria Santos",
    role: "Product Designer · Canggu, Bali",
    quote:
      "Working from Bali has never felt this premium. My Monis setup makes every video call look like I'm in a magazine spread.",
    image:
      "https://readdy.ai/api/search-image?query=young%20professional%20woman%20portrait%20smiling%20confidently%2C%20warm%20natural%20light%2C%20Bali%20inspired%20background%2C%20neutral%20tones%2C%20headshot%20photography%2C%20lifestyle%20editorial&width=120&height=150&seq=portrait1-v2&orientation=portrait",
  },
  {
    name: "Theo Kirchner",
    role: "Senior Engineer · Digital Nomad",
    quote:
      "Cancelled my office lease and rented a full developer setup through Monis. Paying less, working better. This is the future.",
    image:
      "https://readdy.ai/api/search-image?query=young%20professional%20man%20portrait%20relaxed%20smile%2C%20warm%20soft%20lighting%2C%20tropical%20office%20background%20blur%2C%20editorial%20lifestyle%20headshot%2C%20clean%20neutral%20tones&width=120&height=150&seq=portrait2-v2&orientation=portrait",
  },
];

export default function Testimonials() {
  return (
    <section
      id="stories"
      className="py-20 transition-all duration-500 bg-warm-50"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-4 border-sand-300 text-charcoal-500">
            Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal-900">
            Loved by Nomads
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex gap-5 rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.01] cursor-default bg-charcoal-950 border-charcoal-800"
            >
              <div className="flex-shrink-0 w-28 md:w-36">
                <img
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                  src={t.image}
                />
              </div>
              <div className="flex flex-col justify-center py-6 pr-5">
                <span className="text-3xl text-sand-400 font-display mb-2">
                  &ldquo;
                </span>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {t.quote}
                </p>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
