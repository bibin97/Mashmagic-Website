import React from 'react';
import OurPrograms from '../components/OurPrograms';

export default function Courses() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-[#0F172A] text-white">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#f8ba2b]/20 to-transparent blur-3xl -z-10" />
        <div className="section-container relative z-10 text-center pb-0">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Academic <span className="text-[#f8ba2b]">Programs</span></h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Targeted curriculums designed to meet the exact academic needs of every student, from foundation building to ultimate exam prep.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <OurPrograms />
    </div>
  );
}
