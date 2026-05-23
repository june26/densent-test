import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { getProductsByCategory } from "../../../mocks/products";

const tabs = [
  { id: "desks", label: "Desks", icon: "ri-table-line" },
  { id: "chairs", label: "Chairs", icon: "ri-armchair-line" },
  { id: "add-ons", label: "Add-ons", icon: "ri-add-box-line" },
];

export default function ProductPanel({
  selectedDesk,
  selectedChair,
  selectedAccessories,
  onSelectDesk,
  onSelectChair,
  onToggleAccessory,
}) {
  const [activeTab, setActiveTab] = useState("desks");

  const getProductsForTab = () => {
    if (activeTab === "desks") return getProductsByCategory("desk");
    if (activeTab === "chairs") return getProductsByCategory("chair");
    return getProductsByCategory("accessory");
  };

  const isSelected = (product) => {
    if (product.category === "desk") return selectedDesk === product.id;
    if (product.category === "chair") return selectedChair === product.id;
    return selectedAccessories.includes(product.id);
  };

  const handleSelect = (product) => {
    if (product.category === "desk") {
      onSelectDesk(selectedDesk === product.id ? "" : product.id);
    } else if (product.category === "chair") {
      onSelectChair(selectedChair === product.id ? "" : product.id);
    } else {
      onToggleAccessory(product.id);
    }
  };

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 bg-transparent">
      <div className="px-4 pt-5 pb-3">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-3 text-charcoal-400">
          Configure
        </h2>
        <div className="flex items-center gap-1 p-1 rounded-xl bg-transparent">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-charcoal-900"
                  : "text-charcoal-500 hover:text-charcoal-700"
              }`}
            >
              <i className={`${tab.icon} text-sm`} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-2 text-xs text-charcoal-400">
        {activeTab === "desks"
          ? "Select one option"
          : activeTab === "chairs"
            ? "Select one option"
            : "Click to toggle"}
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {getProductsForTab().map((product) => {
              const selected = isSelected(product);
              return (
                <button
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className={`w-full text-left group relative overflow-hidden transition-all duration-300 cursor-pointer focus:outline-none ${
                    selected
                      ? "ring-2 ring-sand-500"
                      : "hover:ring-1 hover:ring-sand-200"
                  }`}
                  aria-pressed={selected}
                >
                  {product.badge && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-charcoal-900/90 text-white">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className="w-full h-28 overflow-hidden flex items-center justify-center transition-all duration-300 bg-transparent">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      src={product.image}
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-semibold leading-tight mb-1 truncate text-charcoal-900">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-charcoal-500">/mo</span>
                      <span className="text-sm font-bold text-charcoal-800">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
