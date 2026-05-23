import { motion } from "framer-motion";
import {
  presets,
  getPresetTotal,
  getPresetItemsCount,
} from "../../../mocks/products";

const presetIcons = [
  { icon: "ri-code-s-slash-line", color: "bg-sand-100 text-charcoal-600" },
  { icon: "ri-focus-3-line", color: "bg-sand-100 text-charcoal-600" },
  { icon: "ri-leaf-line", color: "bg-sand-100 text-charcoal-600" },
];

export default function PresetsSection({ onApplyPreset }) {
  return (
    <section
      id="presets"
      className="py-16 transition-all duration-500 bg-white"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 flex items-center justify-center text-charcoal-500">
              <i className="ri-magic-line text-sm" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal-400">
              Quick Presets
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {presets.map((preset, index) => {
              const meta = presetIcons[index];
              const total = getPresetTotal(preset);
              const count = getPresetItemsCount(preset);

              return (
                <motion.button
                  key={preset.id}
                  onClick={() => onApplyPreset(preset)}
                  className="group relative text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none hover:scale-[1.02] active:scale-[0.98] border-sand-200/80 bg-white hover:border-sand-400 hover:shadow-card"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${meta.color}`}
                  >
                    <i className={`${meta.icon} text-sm`} />
                  </div>
                  <h4 className="text-sm font-bold mb-1 text-charcoal-900">
                    {preset.name}
                  </h4>
                  <p className="text-xs leading-relaxed mb-3 text-charcoal-400">
                    {preset.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-charcoal-400">
                      {count} items
                    </span>
                    <span className="text-sm font-bold text-charcoal-800">
                      ${total}/mo
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
