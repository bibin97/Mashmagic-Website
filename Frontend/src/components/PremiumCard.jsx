import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PremiumCard({ children, className = "" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className={`relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,128,128,0.04)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,128,128,0.15)] hover:border-teal-500/20 ${className}`}
    >
      {/* Dynamic Mouse Tracking Flashlight Glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 128, 128, 0.08), transparent 80%)`
            : `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 128, 128, 0), transparent 80%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.15 }}
      />

      {/* Subtle Top Border Glow on Hover */}
      <div className={`absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#008080]/40 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

      {/* Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
