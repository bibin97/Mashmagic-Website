import React from "react";
import PremiumCard from "../PremiumCard";

export default function GlassCard({ title, img, points }) {
  return (
    <div className="relative">
      {/* BACKSIDE DECORATIVE SVGs */}
      <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">

        {/* Teal Circle */}
        <svg
          className="absolute -top-10 -left-10 opacity-40"
          width="150"
          height="150"
        >
          <circle cx="75" cy="75" r="75" fill="#008080" />
        </svg>

        {/* Yellow Circle */}
        <svg
          className="absolute -bottom-10 -right-10 opacity-40"
          width="170"
          height="170"
        >
          <circle cx="85" cy="85" r="85" fill="#FABB2A" />
        </svg>
      </div>

      {/* MAIN CARD */}
      <PremiumCard className="relative z-20 bg-white/95 backdrop-blur-md p-7">
        {/* LEFT | RIGHT LAYOUT */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">

          {/* LEFT SECTION - IMAGE */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={img}
              alt={title}
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-xl shadow-md"
            />
          </div>

          {/* RIGHT SECTION - TEXT */}
          <div className="flex-1">
            {/* TITLE */}
            <h3 className="text-xl font-bold text-[#005f5f] mb-4 text-center sm:text-left">
              {title}
            </h3>

            {/* POINTS */}
            <ul className="space-y-2 text-sm text-gray-700">
              {points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2 font-medium">
                  <span className="text-[#008080] text-xl leading-none">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </PremiumCard>
    </div>
  );
}
