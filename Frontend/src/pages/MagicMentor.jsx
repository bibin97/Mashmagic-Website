import React from 'react';
import { Sparkles, CalendarCheck, MessageCircleHeart, Activity } from 'lucide-react';

export default function MagicMentor() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#f8ba2b]/10 to-transparent -z-10" />
        <div className="section-container relative z-10 text-center">
          <span className="text-[#008080] font-bold tracking-widest uppercase text-sm mb-4 block inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#f8ba2b]" /> The Secret Sauce
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-black mb-6">The <span className="text-[#008080]">Magic Mentor</span> Program</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Unlike standard tutors, our Magic Mentors take complete responsibility for your child's academic, emotional, and disciplinary growth.
          </p>
        </div>
      </section>

      {/* Mentor Responsibilities */}
      <section className="py-20 section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-10 rounded-3xl shadow-lg shadow-[#008080]/5 border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-[#008080]/10 flex items-center justify-center mb-6">
              <CalendarCheck className="w-7 h-7 text-[#008080]" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0F172A] mb-4">Daily Academic Tracking</h3>
            <p className="text-slate-600 leading-relaxed">
              Mentors monitor daily study hours, homework completion, and test scores. If a student falls behind, the mentor intervenes immediately to bring them back on track.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg shadow-[#008080]/5 border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-[#f8ba2b]/20 flex items-center justify-center mb-6">
              <MessageCircleHeart className="w-7 h-7 text-[#f8ba2b]" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0F172A] mb-4">Emotional & Confidence Support</h3>
            <p className="text-slate-600 leading-relaxed">
              Exam stress is real. Mentors act as a big brother/sister, offering a safe space for students to discuss their fears, helping build their self-belief before big exams.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg shadow-[#008080]/5 border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-6">
              <Activity className="w-7 h-7 text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0F172A] mb-4">Discipline & Habit Formation</h3>
            <p className="text-slate-600 leading-relaxed">
              Success is a habit. We guide students to create realistic timetables, reduce phone addiction during study hours, and maintain a disciplined routine.
            </p>
          </div>

          <div className="bg-[#008080] text-white p-10 rounded-3xl shadow-xl shadow-[#008080]/20 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="w-14 h-14 rounded-full bg-[#f8ba2b]/20 flex items-center justify-center mb-6 relative z-10">
              <Users className="w-7 h-7 text-[#f8ba2b]" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 relative z-10">Parent-Mentor Coordination</h3>
            <p className="text-slate-200 leading-relaxed relative z-10">
              Weekly updates and direct WhatsApp communication. You will never have to guess how your child is performing. We keep you in the loop, always.
            </p>
          </div>
          
        </div>
      </section>

    </div>
  );
}

// Quick component for the missing icon above
function Users(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
}
