import React from 'react';
import { Target, Users, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#0F172A] text-white">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#008080]/40 to-transparent blur-3xl -z-10" />
        <div className="section-container relative z-10 text-center">
          <span className="text-[#f8ba2b] font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">More Than Just <span className="text-[#f8ba2b]">Tuition.</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Mash Magic was born out of a profound realization: traditional tuition centers treat students as numbers. We decided to treat them like family.
          </p>
        </div>
      </section>

      {/* The Problem & Our Solution */}
      <section className="py-20 section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-[#0F172A] mb-6">The Problem with Traditional Tuition</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In most tuition centers, learning is mechanical. Students attend classes, take notes, and leave. There is no emotional connection, no one to track if they are stressed, and no one to build their confidence when they fail a test.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Parents are often left in the dark until the report card arrives. We knew there had to be a better way—a system that supports the child academically and emotionally.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-[#008080]/5 border border-slate-100">
            <h2 className="text-3xl font-bold font-heading text-black mb-6">The <span className="text-[#008080]">Mash Magic</span> Philosophy</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-[#f8ba2b] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F172A]">Emotional Support</h4>
                  <p className="text-sm text-slate-600">We mentor the student's mindset, removing exam fear.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Target className="w-6 h-6 text-[#f8ba2b] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F172A]">Personalized Tracking</h4>
                  <p className="text-sm text-slate-600">Every student gets a tailored roadmap for their exact weaknesses.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#f8ba2b] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F172A]">Parent Partnership</h4>
                  <p className="text-sm text-slate-600">You are always informed. We act as your academic partners.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-slate-50 rounded-3xl border border-slate-100">
              <Shield className="w-12 h-12 text-[#008080] mb-6" />
              <h3 className="text-2xl font-bold font-heading text-[#0F172A] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide a caring, disciplined, and highly effective academic mentorship ecosystem that transforms ordinary students into confident high-achievers.
              </p>
            </div>
            <div className="p-12 bg-[#008080] text-white rounded-3xl shadow-2xl shadow-[#008080]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <Target className="w-12 h-12 text-[#f8ba2b] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold font-heading mb-4 relative z-10">Our Vision</h3>
              <p className="text-slate-200 leading-relaxed relative z-10">
                To be the most trusted educational partner for parents globally, ensuring no child ever feels lost or unsupported in their academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
