import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, image, accent, onSelect }) {
  const accentColor =
    accent === "magenta"
      ? "rgba(255,199,0,1)"
      : accent === "cyan"
      ? "rgba(0,150,205,1)"
      : "rgba(215,0,115,1)";

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-2xl overflow-hidden bg-white shadow-lg border border-[#E7E2D8] relative"
    >
      {/* Accent bar INSIDE card */}
      <div
        className="absolute left-0 top-0 h-full w-2 rounded-r-xl"
        style={{ background: accentColor }}
      />

      {/* IMAGE */}
      <div className="h-40 w-full bg-[#F3EFE8] flex items-center justify-center border-b border-[#E6DCC7]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="h-20 w-20 bg-[#E8E3D6] rounded-xl" />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 ml-3"> {/* EXTRA margin so text doesn't overlap the bar */}
        <h4 className="text-lg font-semibold text-[#1C1C1C]">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>

        <button
          onClick={() => onSelect(title)}
          className="mt-4 w-full bg-[#111111] text-white py-2 rounded-xl font-medium shadow-sm hover:bg-black transition"
        >
          Order Now
        </button>
      </div>
    </motion.div>
  );
}