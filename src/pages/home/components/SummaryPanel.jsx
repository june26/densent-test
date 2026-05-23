import { motion, AnimatePresence } from "framer-motion";
import { getProductById, calculateTotalPrice } from "../../../mocks/products";

export default function SummaryPanel({
  selectedDesk,
  selectedChair,
  selectedAccessories,
  onToggleAccessory,
  onClearAll,
}) {
  const desk = getProductById(selectedDesk);
  const chair = getProductById(selectedChair);
  const accessories = selectedAccessories
    .map((id) => getProductById(id))
    .filter(Boolean);

  const total = calculateTotalPrice(
    selectedDesk,
    selectedChair,
    selectedAccessories,
  );
  const hasSelection = !!desk && !!chair;

  return (
    <div className="flex flex-col h-full rounded-2xl border overflow-hidden transition-all duration-500 bg-white/80 backdrop-blur-sm border-sand-200/60">
      <div className="px-4 pt-5 pb-3 border-b border-sand-100">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-sm font-bold uppercase tracking-widest text-charcoal-400">
            Your Setup
          </h2>
          {(desk || chair || accessories.length > 0) && (
            <button
              onClick={onClearAll}
              className="text-[11px] font-semibold text-charcoal-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1"
            >
              <i className="ri-delete-bin-line" />
              Clear All
            </button>
          )}
        </div>
        <p className="text-xs text-charcoal-400">
          {hasSelection
            ? `${2 + accessories.length} items selected`
            : "No items selected yet"}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {desk ? (
          <motion.div
            layout
            className="flex items-center gap-2.5 p-2.5 rounded-xl border border-sand-200 bg-white"
          >
            <img
              src={desk.image}
              alt={desk.name}
              className="w-10 h-10 rounded-lg object-cover object-top"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-charcoal-800 truncate">
                {desk.name}
              </p>
              <p className="text-[10px] text-charcoal-400">Desk</p>
            </div>
            <span className="text-xs font-bold text-charcoal-800">
              ${desk.price}/mo
            </span>
          </motion.div>
        ) : (
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-dashed border-sand-200">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-sand-50">
              <i className="ri-table-line text-sm text-charcoal-300" />
            </div>
            <span className="text-xs font-medium text-charcoal-300">
              No Desk selected
            </span>
          </div>
        )}

        {chair ? (
          <motion.div
            layout
            className="flex items-center gap-2.5 p-2.5 rounded-xl border border-sand-200 bg-white"
          >
            <img
              src={chair.image}
              alt={chair.name}
              className="w-10 h-10 rounded-lg object-cover object-top"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-charcoal-800 truncate">
                {chair.name}
              </p>
              <p className="text-[10px] text-charcoal-400">Chair</p>
            </div>
            <span className="text-xs font-bold text-charcoal-800">
              ${chair.price}/mo
            </span>
          </motion.div>
        ) : (
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-dashed border-sand-200">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-sand-50">
              <i className="ri-armchair-line text-sm text-charcoal-300" />
            </div>
            <span className="text-xs font-medium text-charcoal-300">
              No Chair selected
            </span>
          </div>
        )}

        <AnimatePresence>
          {accessories.map((acc) => (
            <motion.div
              key={acc.id}
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-2.5 p-2.5 rounded-xl border border-sand-200 bg-white"
            >
              <img
                src={acc.image}
                alt={acc.name}
                className="w-10 h-10 rounded-lg object-cover object-top"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-charcoal-800 truncate">
                  {acc.name}
                </p>
                <p className="text-[10px] text-charcoal-400">Add-on</p>
              </div>
              <button
                onClick={() => onToggleAccessory(acc.id)}
                className="w-6 h-6 rounded-full flex items-center justify-center text-charcoal-400 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <i className="ri-close-line text-xs" />
              </button>
              <span className="text-xs font-bold text-charcoal-800">
                ${acc.price}/mo
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {accessories.length === 0 && hasSelection && (
          <div className="flex flex-col items-center justify-center py-4 text-center gap-2 text-charcoal-300">
            <i className="ri-magic-line text-2xl" />
            <p className="text-xs leading-relaxed">
              Add accessories from the left panel
            </p>
          </div>
        )}

        {!hasSelection && (
          <div className="flex flex-col items-center justify-center py-8 text-center gap-3 text-charcoal-300">
            <i className="ri-magic-line text-3xl" />
            <p className="text-xs leading-relaxed">
              Start building your dream workspace from the left panel
            </p>
          </div>
        )}
      </div>

      <div className="px-4 pb-5 pt-3 border-t border-sand-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-charcoal-700">
            Monthly Total
          </span>
          <div className="text-2xl font-bold flex items-baseline gap-0.5 text-charcoal-900">
            <AnimatePresence mode="wait">
              <motion.span
                key={total}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                ${total}
              </motion.span>
            </AnimatePresence>
            <span className="text-xs font-normal ml-0.5 text-charcoal-400">
              /mo
            </span>
          </div>
        </div>

        <button
          disabled={!hasSelection}
          className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 cursor-pointer ${
            hasSelection
              ? "bg-charcoal-900 text-white hover:bg-charcoal-800 active:scale-95"
              : "bg-sand-100 text-sand-300 cursor-not-allowed"
          }`}
        >
          <i className="ri-shopping-bag-3-line" />
          Rent This Setup
        </button>
      </div>
    </div>
  );
}
