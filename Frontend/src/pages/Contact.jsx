import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="badge-premium inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#f8ba2b]" /> Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black mb-6">
            Let's Start Your Child's <span className="text-[#008080]">Success Journey.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Have questions about our mentoring programs, schedules, or fee structures? Our team is here to provide complete clarity.
          </p>
        </motion.div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 bg-gradient-to-br from-[#008080] via-[#006666] to-[#003333] text-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f8ba2b]/15 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <h3 style={{ color: 'white' }} className="text-2xl sm:text-3xl font-bold font-heading mb-6 relative z-10 text-white">
              Direct Contact <span className="text-[#f8ba2b]">Lines</span>
            </h3>
            <p className="text-slate-300 mb-10 text-sm sm:text-base leading-relaxed relative z-10 font-light">
              Prefer speaking directly with our academic counselors? Reach out through any of our official channels below.
            </p>

            <div className="space-y-8 relative z-10 mb-12">
              <a href="tel:+917012128756" className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group/link">
                <div className="w-12 h-12 rounded-xl bg-[#008080]/20 flex items-center justify-center text-[#008080] group-hover/link:bg-[#008080] group-hover/link:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Call Admissions</div>
                  <div className="text-lg font-bold text-white">+91 701212 8756</div>
                </div>
              </a>

              <a href="https://wa.me/917012128756" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group/link">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover/link:bg-[#25D366] group-hover/link:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp Chat</div>
                  <div className="text-lg font-bold text-white">+91 701212 8756</div>
                </div>
              </a>

              <a href="mailto:hellomashmagic@gmail.com" className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group/link">
                <div className="w-12 h-12 rounded-xl bg-[#f8ba2b]/20 flex items-center justify-center text-[#f8ba2b] group-hover/link:bg-[#f8ba2b] group-hover/link:text-[#0F172A] transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Email Us</div>
                  <div className="text-base sm:text-lg font-bold text-white truncate">hellomashmagic@gmail.com</div>
                </div>
              </a>

              <div className="flex items-start gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Head Office (Calicut)</div>
                  <div className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mt-1">
                    First Floor, Old Bus Stand Bldg,<br />
                    Thamarassery, Calicut, Kerala - 673573
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Corporate Office (Kochi)</div>
                  <div className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mt-1">
                    10/1744, 1st Floor, Suite #1012,<br />
                    Sowbhagya Building, Athani,<br />
                    Kakkanad, Kusumagiri P.O, Kochi – 682030<br />
                    <span className="text-xs text-slate-400 mt-1 block">📞 7012-128756</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 relative z-10">
              <span>Working Hours: 9:00 AM - 8:00 PM</span>
              <span className="text-[#f8ba2b] font-bold">ISO 9001:2015 CERTIFIED</span>
            </div>
          </motion.div>

          {/* Right Column: Registration Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-[#008080]/5 border border-slate-100"
          >
            <ContactForm isModal={false} />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
