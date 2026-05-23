import { useState } from "react";
import ProductPanel from "./ProductPanel";
import WorkspaceScene from "./WorkspaceScene";
import SummaryPanel from "./SummaryPanel";

export default function BuilderSection({
  selectedDesk,
  selectedChair,
  selectedAccessories,
  isNightMode,
  onSelectDesk,
  onSelectChair,
  onToggleAccessory,
  onApplyPreset,
  onClearAll,
}) {
  const [showMobileSummary, setShowMobileSummary] = useState(false);

  return (
    <section
      id="builder"
      className="py-12 transition-all duration-500 bg-warm-100/50"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-charcoal-900">
              Configure
              <br className="hidden md:block" />
              <span className="text-sand-500">Your Workspace</span>
            </h2>
            <p className="mt-1 text-sm text-charcoal-500">
              Click items to add them to your setup
            </p>
          </div>
          <button
            onClick={() => setShowMobileSummary(!showMobileSummary)}
            className="md:hidden flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap border-sand-300 bg-white text-charcoal-700"
          >
            <i className="ri-shopping-bag-3-line" />
            Summary
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 min-h-[580px]">
          <div className="lg:h-[580px]">
            <ProductPanel
              selectedDesk={selectedDesk}
              selectedChair={selectedChair}
              selectedAccessories={selectedAccessories}
              onSelectDesk={onSelectDesk}
              onSelectChair={onSelectChair}
              onToggleAccessory={onToggleAccessory}
              onApplyPreset={onApplyPreset}
            />
          </div>

          <div className="h-[420px] lg:h-[580px]">
            <WorkspaceScene
              selectedDesk={selectedDesk}
              selectedChair={selectedChair}
              selectedAccessories={selectedAccessories}
              isNightMode={isNightMode}
            />
          </div>

          <div
            className={`lg:h-[580px] transition-all duration-300 ${showMobileSummary ? "block" : "hidden lg:block"}`}
          >
            <SummaryPanel
              selectedDesk={selectedDesk}
              selectedChair={selectedChair}
              selectedAccessories={selectedAccessories}
              onToggleAccessory={onToggleAccessory}
              onClearAll={onClearAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
