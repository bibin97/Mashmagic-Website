import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";
import PremiumCard from "./PremiumCard";

const testimonials = [
  {
    text: "The classes are excellent, especially since I had difficulty in Mathematics. The teachers are amazing, and they took great care of my child.",
    author: "Alphin Shibu",
    position: "Grade 9th STATE | Kerala",
    img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    text: "As I complete my final course with Mash Magic Revision, I want to express my gratitude. The discipline helped me gain real confidence for my boards.",
    author: "Bezal Sanoj",
    position: "+2 CBSE | Qatar",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    text: "All your faculty are very good, supportive and co-operative. Thank you so much for allotting such good teachers and mentor. Thank you Mash Magic.",
    author: "Adv. Sujitha K.S",
    position: "M/o M.Suryadev | Grade +2 CBSE",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    text: "My son improved in confidence, discipline, and academics. The best decision we ever made for his future growth!",
    author: "Arun Kumar",
    position: "Parent of Grade 10 student",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

const TestimonialItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
      className="h-full"
    >
      <PremiumCard className="p-8 flex flex-col justify-between h-full relative group">
        {/* Decorative Quote Watermark */}
        <span className="absolute top-4 right-6 text-7xl font-serif text-slate-100 group-hover:text-[#008080]/10 transition-colors duration-500 select-none pointer-events-none">
          “
        </span>

        <div>
          {/* Author Header */}
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-md border-2 border-[#008080]/30 group-hover:border-[#008080] transition-colors duration-500">
              <img src={item.img} alt={item.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#008080] transition-colors duration-300">
                {item.author}
              </h4>
              <p className="text-xs text-[#008080] font-semibold uppercase tracking-wider mt-0.5">
                {item.position}
              </p>
              {/* Star Rating */}
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#f8ba2b] text-sm">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-slate-600 italic text-base leading-relaxed relative z-10 font-light">
            "{item.text}"
          </p>
        </div>

        {/* Bottom subtle accent line */}
        <div className="w-12 h-1 bg-[#f8ba2b] mt-6 rounded-full group-hover:w-full transition-all duration-500 relative z-10" />
      </PremiumCard>
    </motion.div>
  );
};

export default function TestimonialCard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="testimonial">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="badge-premium mb-4 inline-block">Success Stories</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#0F172A] mb-6 tracking-tight">
            Trusted by <span className="text-[#008080]">1000+ Families.</span>
          </h2>
          <div className="w-24 h-[3px] bg-[#008080] mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Real experiences from students and parents across the globe who transformed their academic journey with us.
          </p>
        </motion.div>

        {/* Area 1: Images with Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
          {testimonials.slice(0, 2).map((item, i) => (
            <TestimonialItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Area 2: Reviews Only (Without Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
          {testimonials.slice(2, 4).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <PremiumCard className="p-8 flex flex-col justify-between h-full relative group bg-slate-50/50 border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="absolute top-4 left-6 text-5xl font-serif text-[#008080]/10 select-none">“</span>
                <div className="relative z-10 pt-4">
                  <p className="text-slate-600 italic text-base leading-relaxed mb-6 font-light">
                    "{item.text}"
                  </p>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="text-lg font-bold font-heading text-[#0F172A]">{item.author}</h4>
                    <p className="text-xs text-[#008080] font-semibold uppercase tracking-wider mt-0.5">{item.position}</p>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Area 3: Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[1.5rem] overflow-hidden shadow-md border-4 border-white aspect-video bg-slate-900 relative group"
          >
            <video 
              src="/courses/testimonials1.mp4" 
              controls 
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[1.5rem] overflow-hidden shadow-md border-4 border-white aspect-video bg-slate-900 relative group"
          >
            <video 
              src="/courses/testimonials2.mp4" 
              controls 
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#0F172A] rounded-[1.5rem] p-6 md:p-8 text-center relative overflow-hidden shadow-[0_15px_60px_rgba(0,128,128,0.15)] border border-white/10 max-w-3xl mx-auto"
        >
          {/* Decorative Mesh Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,128,128,0.35),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(248,186,43,0.2),_transparent_50%)] pointer-events-none" />
          <div className="absolute top-0 left-1/3 w-60 h-60 bg-[#008080]/20 rounded-full blur-[60px] pointer-events-none -top-16 animate-pulse" />

          {/* Premium Pill Badge */}
          <div className="relative z-10 mb-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-inner">
              ✨ Next-Generation Learning Ecosystem
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-white mb-3 relative z-10 tracking-tight leading-tight">
            Ready to give your child the <br className="hidden sm:inline" /> 
            <span className="text-[#008080] drop-shadow-sm">Mash Magic Edge?</span>
          </h3>

          <p className="text-white text-sm md:text-base max-w-lg mx-auto mb-6 font-normal leading-relaxed relative z-10">
            Join thousands of students who have overcome exam fear, mastered their subjects, and achieved outstanding academic success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center relative z-10">
            <button 
              onClick={() => setShowForm(true)}
              className="group relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#f8ba2b] to-amber-400 text-slate-950 font-bold text-xs md:text-sm uppercase tracking-wider shadow-[0_5px_20px_rgba(248,186,43,0.4)] hover:shadow-[0_10px_25px_rgba(248,186,43,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              BOOK A FREE DEMO 🚀
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white text-white font-bold text-xs md:text-sm uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
              CONTACT ADMISSIONS 📞
            </button>
          </div>
        </motion.div>
      </div>

      {/* POPUP OVERLAY */}
      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999] flex justify-center items-center p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg p-2 relative"
            >
               <button 
                  onClick={() => setShowForm(false)}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-bold shadow-lg z-10 hover:bg-[#f8ba2b] hover:text-[#0F172A] transition-colors cursor-pointer"
               >
                 ✕
               </button>
              <ContactForm onClose={() => setShowForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
