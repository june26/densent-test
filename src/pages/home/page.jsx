import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PresetsSection from "./components/PresetsSection";
import BuilderSection from "./components/BuilderSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import MobileStickyBar from "./components/MobileStickyBar";

export default function WorkspaceBuilderPage() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState("");
  const [selectedChair, setSelectedChair] = useState("");
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [showMobileSummary, setShowMobileSummary] = useState(false);

  const handleToggleNightMode = useCallback(() => {
    setIsNightMode((prev) => !prev);
  }, []);

  const handleSelectDesk = useCallback((id) => {
    setSelectedDesk(id);
  }, []);

  const handleSelectChair = useCallback((id) => {
    setSelectedChair(id);
  }, []);

  const handleToggleAccessory = useCallback((id) => {
    setSelectedAccessories((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  }, []);

  const handleClearAll = useCallback(() => {
    setSelectedDesk("");
    setSelectedChair("");
    setSelectedAccessories([]);
  }, []);

  const handleApplyPreset = useCallback((preset) => {
    setSelectedDesk(preset.deskId);
    setSelectedChair(preset.chairId);
    setSelectedAccessories(preset.accessories);
    setShowMobileSummary(false);

    const builderSection = document.getElementById("builder");
    if (builderSection) {
      builderSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const scrollToBuilder = useCallback(() => {
    const builderSection = document.getElementById("builder");
    if (builderSection) {
      builderSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${isNightMode ? "bg-charcoal-950 text-white" : "bg-warm-50 text-charcoal-900"}`}
    >
      <Navbar
        isNightMode={isNightMode}
        onToggleNightMode={handleToggleNightMode}
        scrollToBuilder={scrollToBuilder}
      />

      <main>
        <HeroSection />

        <PresetsSection onApplyPreset={handleApplyPreset} />

        <BuilderSection
          selectedDesk={selectedDesk}
          selectedChair={selectedChair}
          selectedAccessories={selectedAccessories}
          isNightMode={isNightMode}
          onSelectDesk={handleSelectDesk}
          onSelectChair={handleSelectChair}
          onToggleAccessory={handleToggleAccessory}
          onApplyPreset={handleApplyPreset}
          onClearAll={handleClearAll}
        />

        <HowItWorks />
        <Testimonials />
        <CTASection scrollToBuilder={scrollToBuilder} />
      </main>

      <Footer />

      <MobileStickyBar
        selectedDesk={selectedDesk}
        selectedChair={selectedChair}
        selectedAccessories={selectedAccessories}
        onOpenSummary={() => setShowMobileSummary(true)}
      />

      <div className="h-20 md:hidden" />
    </div>
  );
}
