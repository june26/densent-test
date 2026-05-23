import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getProductById,
  sceneImages,
  scenePositions,
} from "../../../mocks/products";

const accessoryOrder = [
  "monitor",
  "keyboard",
  "lamp",
  "plant",
  "coffee",
  "decor",
];

export default function WorkspaceScene({
  selectedDesk,
  selectedChair,
  selectedAccessories,
  isNightMode,
}) {
  const sceneRef = useRef(null);
  const [dragOffsets, setDragOffsets] = useState({});
  const [mirrors, setMirrors] = useState({});

  const deskProduct = getProductById(selectedDesk);
  const chairProduct = getProductById(selectedChair);

  const deskPos = selectedDesk
    ? (scenePositions.deskOverrides?.[selectedDesk] ?? scenePositions.desk)
    : scenePositions.desk;

  const chairPos = selectedChair
    ? (scenePositions.chairOverrides?.[selectedChair] ?? scenePositions.chair)
    : scenePositions.chair;

  const getDragOffset = (id) => dragOffsets[id] ?? { x: 0, y: 0 };

  const isMirrored = (id) => mirrors[id] ?? false;

  const handleDragEnd = (id, info) => {
    if (!id) return;

    setDragOffsets((prev) => ({
      ...prev,
      [id]: {
        x: (prev[id]?.x ?? 0) + info.offset.x,
        y: (prev[id]?.y ?? 0) + info.offset.y,
      },
    }));
  };

  const toggleMirror = (id) => {
    if (!id) return;

    setMirrors((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-0 rounded-2xl overflow-hidden transition-opacity duration-700">
      <div className="absolute inset-0 z-0">
        <img
          alt="room background"
          className="w-full h-full object-cover object-top transition-all duration-700"
          src={sceneImages["room-day"]}
        />

        <div
          className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
            isNightMode
              ? "bg-charcoal-900/55 mix-blend-multiply"
              : "bg-transparent"
          }`}
        />

        <div
          className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
            isNightMode ? "bg-slate-800/25 saturate-[0.6]" : "bg-warm-100/0"
          }`}
          style={isNightMode ? { mixBlendMode: "overlay" } : {}}
        />
      </div>

      <div className="absolute top-3 left-3 z-40 flex items-center gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-md bg-white/60 border-sand-200/50 text-charcoal-600">
          <span className="w-1.5 h-1.5 rounded-full bg-tropical-400 animate-pulse" />
          Live Preview
        </span>
      </div>

      <div className="absolute top-3 right-3 z-40 pointer-events-none">
        <span className="text-[11px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-md bg-white/60 border-sand-200/50 text-charcoal-500">
          {isNightMode ? "🌙 Night" : "☀️ Day"}
        </span>
      </div>

      <div className="absolute inset-0 z-10 flex justify-center items-end pb-2">
        <div ref={sceneRef} className="relative w-full h-full">
          <AnimatePresence>
            {deskProduct && (
              <motion.div
                key={selectedDesk}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <div
                  className="absolute rounded-[50%] bg-black/10 blur-md"
                  style={{
                    bottom: "1%",
                    left: "50%",
                    width: "58%",
                    height: "3%",
                    transform: "translateX(-50%)",
                    zIndex: 4,
                  }}
                />

                <div
                  className="absolute"
                  style={{
                    bottom: deskPos.bottom,
                    left: deskPos.left,
                    width: deskPos.width,
                    transform: deskPos.transform,
                    zIndex: deskPos.zIndex,
                  }}
                >
                  <motion.div
                    drag
                    dragMomentum={false}
                    dragElastic={0.15}
                    dragConstraints={sceneRef}
                    onDragEnd={(event, info) =>
                      handleDragEnd(selectedDesk, info)
                    }
                    style={getDragOffset(selectedDesk)}
                    className="relative w-full cursor-grab"
                  >
                    <div className="w-full max-h-[38vh] overflow-hidden">
                      <img
                        alt={deskProduct.name}
                        className="w-full h-full object-contain pointer-events-none"
                        style={{
                          transform: isMirrored(selectedDesk)
                            ? "scaleX(-1)"
                            : undefined,
                        }}
                        src={sceneImages[selectedDesk] || deskProduct.image}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleMirror(selectedDesk)}
                      className="absolute z-[99999] pointer-events-auto -left-8 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-sand-300 bg-white/75 text-[12px] text-charcoal-600 shadow-sm opacity-30 transition hover:opacity-100 hover:bg-sand-100"
                    >
                      ↔
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {chairProduct && (
              <motion.div
                key={selectedChair}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <div
                  className="absolute rounded-[50%] bg-black/10 blur-md"
                  style={{
                    bottom: "0.5%",
                    left: "50%",
                    width: "28%",
                    height: "2.5%",
                    transform: "translateX(-50%)",
                    zIndex: 9,
                  }}
                />

                <div
                  className="absolute"
                  style={{
                    bottom: chairPos.bottom,
                    left: chairPos.left,
                    width: chairPos.width,
                    transform: chairPos.transform,
                    zIndex: chairPos.zIndex,
                  }}
                >
                  <motion.div
                    drag
                    dragMomentum={false}
                    dragElastic={0.15}
                    dragConstraints={sceneRef}
                    onDragEnd={(event, info) =>
                      handleDragEnd(selectedChair, info)
                    }
                    style={getDragOffset(selectedChair)}
                    className="relative w-full cursor-grab"
                  >
                    <div className="w-full max-h-[30vh] overflow-hidden">
                      <img
                        alt={chairProduct.name}
                        className="w-full h-full object-contain pointer-events-none"
                        style={{
                          transform: isMirrored(selectedChair)
                            ? "scaleX(-1)"
                            : undefined,
                        }}
                        src={sceneImages[selectedChair] || chairProduct.image}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleMirror(selectedChair)}
                      className="absolute z-[99999] pointer-events-auto -left-8 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-sand-300 bg-white/75 text-[12px] text-charcoal-600 shadow-sm opacity-30 transition hover:opacity-100 hover:bg-sand-100"
                    >
                      ↔
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {accessoryOrder.map((accId) => {
            const pos = scenePositions[accId];

            if (!pos) return null;

            const isSelected = selectedAccessories.includes(accId);

            const accProduct = getProductById(accId);

            if (!isSelected || !accProduct) return null;

            return (
              <div
                key={accId}
                className="absolute"
                style={{
                  bottom: pos.bottom,
                  left: pos.left,
                  right: pos.right,
                  width: pos.width,
                  transform: pos.transform,
                  zIndex: pos.zIndex,
                }}
              >
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[80%] h-2 rounded-[50%] bg-black/10 blur-sm -z-10" />

                <motion.div
                  drag
                  dragMomentum={false}
                  dragElastic={0.15}
                  dragConstraints={sceneRef}
                  onDragEnd={(event, info) => handleDragEnd(accId, info)}
                  style={getDragOffset(accId)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full cursor-grab"
                >
                  <div className="w-full max-h-[14vh] overflow-hidden">
                    <img
                      alt={accProduct.name}
                      className="w-full h-full object-contain pointer-events-none"
                      style={{
                        transform: isMirrored(accId) ? "scaleX(-1)" : undefined,
                      }}
                      src={accProduct.image}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleMirror(accId)}
                    className="absolute z-[99999] pointer-events-auto -left-8 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-sand-300 bg-white/75 text-[12px] text-charcoal-600 shadow-sm opacity-30 transition hover:opacity-100 hover:bg-sand-100"
                  >
                    ↔
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-2 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full border backdrop-blur-md bg-white/60 border-sand-200/40 text-charcoal-400">
          {deskProduct || chairProduct || selectedAccessories.length > 0
            ? "Click items to add · Click swap to change desk or chair"
            : "Select desk, chair, or accessories from the left panel"}
        </span>
      </div>
    </div>
  );
}
