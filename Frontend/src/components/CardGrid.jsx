import React from "react";
import { HeartHandshake, BrainCircuit, LineChart, ShieldCheck, UserCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const CardGrid = () => {
  const cardsData = [
    {
      number: 1,
      title: "Personalized Mentoring",
      description: "Dedicated mentors providing one-to-one emotional and academic guidance for your child.",
      Icon: UserCheck,
      align: "left",
    },
    {
      number: 2,
      title: "Confidence Building",
      description: "We focus on removing fear of subjects, building self-belief and positive academic habits.",
      Icon: BrainCircuit,
      align: "right",
    },
    {
      number: 3,
      title: "Continuous Tracking",
      description: "Daily and weekly academic evaluations to ensure your child never falls behind.",
      Icon: LineChart,
      align: "left",
    },
    {
      number: 4,
      title: "Parent Partnership",
      description: "Complete transparency. We keep parents involved and informed every step of the way.",
      Icon: Users,
      align: "right",
    },
    {
      number: 5,
      title: "Emotional Support",
      description: "A caring environment that treats students like family, reducing exam anxiety.",
      Icon: HeartHandshake,
      align: "left",
    },
    {
      number: 6,
      title: "Disciplined Routine",
      description: "Instilling strong study habits, time management, and a sense of academic responsibility.",
      Icon: ShieldCheck,
      align: "right",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-28 overflow-hidden relative" id="whyus">
      {/* Background subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#008080]/5 via-transparent to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="badge-premium mb-4 inline-block">The Mash Magic Promise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#0F172A] mb-6 tracking-tight">
            Why Parents Trust <span className="text-[#008080]">Mash Magic</span>
          </h2>
          <div className="w-24 h-[3px] bg-[#008080] mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            We provide a complete ecosystem of learning, discipline, and emotional care. Your child's growth is our responsibility.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line for Desktop */}
          <div className="absolute hidden md:block left-1/2 top-12 bottom-12 w-[2px] bg-[#008080] transform -translate-x-1/2" />

          {/* Left Vertical Line for Mobile */}
          <div className="absolute md:hidden left-[36px] top-6 bottom-20 w-[2px] bg-[#008080] transform -translate-x-1/2" />

          {cardsData.map((step) => {
            const isLeft = step.align === "left";
            return (
              <div key={step.number} className="relative flex items-center mb-16 md:mb-28 last:mb-0">
                {/* Desktop Layout Container */}
                <div className="hidden md:flex w-full items-center relative">
                  {isLeft ? (
                    <>
                      {/* Left Content Box */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="w-1/2 pr-16 text-right flex flex-col items-end"
                      >
                        <div className="w-16 h-16 mb-6 rounded-[1.5rem] bg-[#008080]/10 flex items-center justify-center shadow-sm border border-[#008080]/20 group hover:bg-[#008080] transition-all duration-500 transform hover:scale-110">
                          <step.Icon className="w-8 h-8 text-[#008080] group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-3xl font-bold font-heading text-[#0F172A] mb-4 hover:text-[#008080] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg max-w-md font-light">
                          {step.description}
                        </p>
                      </motion.div>
                      {/* Right Empty Half */}
                      <div className="w-1/2" />
                    </>
                  ) : (
                    <>
                      {/* Left Empty Half */}
                      <div className="w-1/2" />
                      {/* Right Content Box */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="w-1/2 pl-16 text-left flex flex-col items-start"
                      >
                        <div className="w-16 h-16 mb-6 rounded-[1.5rem] bg-[#008080]/10 flex items-center justify-center shadow-sm border border-[#008080]/20 group hover:bg-[#008080] transition-all duration-500 transform hover:scale-110">
                          <step.Icon className="w-8 h-8 text-[#008080] group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-3xl font-bold font-heading text-[#0F172A] mb-4 hover:text-[#008080] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg max-w-md font-light">
                          {step.description}
                        </p>
                      </motion.div>
                    </>
                  )}

                  {/* Center Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                      className="w-14 h-14 rounded-full bg-[#008080] text-white flex items-center justify-center text-xl font-bold shadow-[0_0_0_10px_rgba(248,250,252,1)] border border-teal-600"
                    >
                      {step.number}
                    </motion.div>
                  </div>
                </div>

                {/* Mobile Layout Container (max-md) */}
                <div className="flex md:hidden w-full items-center pl-16 relative">
                  {/* Mobile Number Circle */}
                  <div className="absolute left-[36px] top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                      className="w-12 h-12 rounded-full bg-[#008080] text-white flex items-center justify-center text-lg font-bold shadow-[0_0_0_8px_rgba(248,250,252,1)] border border-teal-600"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    className="w-full bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-start text-left"
                  >
                    <div className="w-14 h-14 mb-5 rounded-2xl bg-[#008080]/10 flex items-center justify-center shadow-sm border border-[#008080]/20 group hover:bg-[#008080] transition-all duration-500">
                      <step.Icon className="w-7 h-7 text-[#008080] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-[#0F172A] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base font-light">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
