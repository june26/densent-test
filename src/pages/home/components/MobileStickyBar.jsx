import { motion, AnimatePresence } from "framer-motion";
import { calculateTotalPrice } from "../../../mocks/products";

export default function MobileStickyBar({
  selectedDesk,
  selectedChair,
  selectedAccessories,
  onOpenSummary,
}) {
  const total = calculateTotalPrice(
    selectedDesk,
    selectedChair,
    selectedAccessories,
  );
  const hasSelection = !!selectedDesk && !!selectedChair;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-warm-200 px-4 py-3"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-charcoal-400">Monthly Total</p>
          <div className="flex items-baseline gap-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={total}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-bold text-charcoal-900"
              >
                ${total}
              </motion.span>
            </AnimatePresence>
            <span className="text-xs text-charcoal-400">/mo</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onOpenSummary}
            className="px-4 py-2 rounded-xl border border-sand-300 text-sm font-semibold text-charcoal-700 bg-white"
          >
            <i className="ri-shopping-bag-3-line" />
          </button>
          <a
            href="#builder"
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
              hasSelection
                ? "bg-charcoal-900 text-white"
                : "bg-sand-100 text-sand-400"
            }`}
          >
            Rent Setup
          </a>
        </div>
      </div>
    </motion.div>
  );
}
