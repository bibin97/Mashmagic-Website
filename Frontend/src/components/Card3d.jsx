import React from "react";
import PremiumCard from "./PremiumCard";

const Card3D = ({ title, description, badge, imageUrl }) => {
  return (
    <PremiumCard
      className="
        relative 
        w-full 
        h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80
        bg-white 
        p-0
      "
    >
      {/* Protruding Image */}
      <div
        className="
          absolute 
          -left-4 sm:-left-6 md:-left-8
          top-1/2 
          -translate-y-1/2 
          z-10
          h-[130%]
        "
      >
        <div
          className="
            relative 
            h-full 
            w-28 sm:w-36 md:w-44 lg:w-52 
            rounded-2xl 
            overflow-hidden 
            shadow-2xl
          "
        >
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div
        className="
          ml-28 sm:ml-36 md:ml-44 lg:ml-56
          pr-6
          h-full 
          flex 
          flex-col 
          justify-center
        "
      >
        <div className="w-fit">
          <span className="text-xs sm:text-sm px-3 py-1 bg-teal-50 text-[#008080] rounded-full font-semibold border border-teal-100">
            {badge}
          </span>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-3">
          {title}
        </h2>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 line-clamp-3">
          {description}
        </p>

        <button className="mt-4 w-fit px-6 py-2 text-sm sm:text-base bg-[#f8ba2b] hover:bg-[#e0a624] text-black font-bold rounded-xl shadow-md transition-all duration-300">
          Learn More
        </button>
      </div>
    </PremiumCard>
  );
};

export default Card3D;
