import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroImg from "../../assets/hero.png";
import ContactForm from "../ContactForm";

gsap.registerPlugin(useGSAP);

const CT = ["First", "Premium", "Trusted", "One&Only"];

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const flipRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (flipRef.current) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
        CT.forEach((S) => {
          const b = { val: 0 };
          tl.call(() => {
            flipRef.current.textContent = "";
            b.val = 0;
          });
          tl.to(b, {
            val: S.length,
            duration: S.length * 0.08,
            ease: "none",
            onUpdate: () => {
              flipRef.current.textContent = S.slice(0, Math.round(b.val));
            },
          });
          tl.to({}, { duration: 1 });
          tl.to(b, {
            val: 0,
            duration: S.length * 0.06,
            ease: "none",
            onUpdate: () => {
              flipRef.current.textContent = S.slice(0, Math.round(b.val));
            },
          });
          tl.to({}, { duration: 0.3 });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="pt-[120px] md:pt-[140px] pb-[60px] px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 text-center md:text-left space-y-5 sm:space-y-6"
          >
            <p className="text-gray-500 text-base sm:text-lg md:text-xl font-semibold">
              Welcome To Mash Magic
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="font-bold text-[#008080] block sm:inline">India’s </span>
              <span className="inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px]">
                <span ref={flipRef} className="text-black font-bold">First</span>
              </span>
              <span className="text-[#008080] block sm:inline font-bold"> Mentoring-Based </span>
              <span className="block text-black mt-2 font-bold">Learning Platform</span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base max-w-sm sm:max-w-md mx-auto md:mx-0">
              We don’t just teach — We Guide, Mentor and Elevate your child’s learning journey.
            </p>
            <div>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-[#f8ba2b] hover:bg-[#e0a624] text-black px-8 py-4 rounded-xl font-bold shadow-lg transition-all"
              >
                BOOK FREE DEMO
              </button>
              <p className="text-gray-600 text-xs sm:text-sm mt-2">30 Minute Session - Parent + Student</p>
            </div>
            
            <div className="mt-2 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-5 sm:gap-8">
              <div className="text-center flex flex-col items-center w-[120px] sm:w-[110px]">
                <div className="flex -space-x-3 mb-2">
                   {[
                     "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=100&h=100",
                     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
                     "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
                     "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
                   ].map((src, i) => (
                     <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                        <img src={src} alt="Parent" className="w-full h-full object-cover" />
                     </div>
                   ))}
                </div>
                <span className="text-xl sm:text-3xl font-bold text-[#008080]">
                  <span className="count">3700</span>+
                </span>
                <p className="text-black w-[200px] text-xs sm:text-sm font-medium mt-1">Trusted Parents</p>
              </div>
              <div className="text-center flex flex-col items-center w-[120px] sm:w-[110px]">
                <img alt="Success Stories" className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-1" src="/images/success.png" />
                <span className="text-xl sm:text-3xl font-bold text-[#008080]">
                  <span className="count">1000</span>+
                </span>
                <p className="text-black w-[200px] text-xs sm:text-sm font-medium mt-1">Success Stories</p>
              </div>
              <div className="text-center flex flex-col items-center w-[120px] sm:w-[110px]">
                <img alt="Countries" className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-1" src="/images/country.png" />
                <span className="text-xl sm:text-3xl font-bold text-[#008080]">
                  <span className="count">12</span>+
                </span>
                <p className="text-black w-[200px] text-xs sm:text-sm font-medium mt-1">Countries</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 p-4 md:p-8 text-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <img 
                src={HeroImg} 
                alt="Student Success" 
                className="w-full max-w-[600px] mx-auto object-contain drop-shadow-xl" 
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Popup */}
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
              <button onClick={() => setShowForm(false)} className="absolute -top-4 -right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shadow-lg z-10 hover:bg-[#f8ba2b] hover:text-black transition-colors">✕</button>
              <ContactForm onClose={() => setShowForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
