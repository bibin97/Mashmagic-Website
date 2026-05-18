import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-12 pb-6 px-6 overflow-hidden relative border-t border-white/10">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008080]/20 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* COLUMN 1: BRAND */}
          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ color: 'white' }} className="text-2xl font-black text-white mb-3 tracking-tight font-heading">
              Mash <span style={{ color: '#f8ba2b' }} className="text-[#f8ba2b]">Magic.</span>
            </h3>
            <p className="text-xs leading-relaxed mb-5 text-gray-400 font-normal">
              India’s premium mentoring-led learning platform. We empower students through personalized guidance, emotional support, and continuous tracking.
            </p>
            <div className="flex gap-3">
               <a href="https://www.instagram.com/mashmagic_?igsh=MWEzamU5OXU1eHN1Zg==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#008080] hover:text-white transition-all duration-300 shadow-sm text-sm">
                 <i className="fab fa-instagram"></i>
               </a>
               <a href="https://www.facebook.com/share/1DvdrJeax4/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#008080] hover:text-white transition-all duration-300 shadow-sm text-sm">
                 <i className="fab fa-facebook-f"></i>
               </a>
               <a href="https://www.linkedin.com/company/mash-magic/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#008080] hover:text-white transition-all duration-300 shadow-sm text-sm">
                 <i className="fab fa-linkedin-in"></i>
               </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 style={{ color: '#f8ba2b' }} className="text-sm font-black text-[#f8ba2b] uppercase tracking-widest mb-4 font-heading">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-[#f8ba2b] hover:text-[#008080] font-semibold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-[#f8ba2b] hover:text-[#008080] font-semibold transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-[#f8ba2b] hover:text-[#008080] font-semibold transition-colors">Our Programs</Link></li>
              <li><Link to="/magic-mentor" className="text-[#f8ba2b] hover:text-[#008080] font-semibold transition-colors">Magic Mentor</Link></li>
              <li><Link to="/testimonials" className="text-[#f8ba2b] hover:text-[#008080] font-semibold transition-colors">Testimonials</Link></li>
              <li><Link to="/blogs" className="text-[#f8ba2b] hover:text-[#008080] font-semibold transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h4 style={{ color: '#f8ba2b' }} className="text-sm font-black text-[#f8ba2b] uppercase tracking-widest mb-4 font-heading">Get in Touch</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-normal text-gray-300">
              <li className="flex items-start gap-2.5">
                <span className="text-[#f8ba2b] mt-0.5 font-bold">📞</span>
                <span>+91 701212 8756</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#f8ba2b] mt-0.5 font-bold">✉️</span>
                <span className="break-all">hellomashmagic@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#f8ba2b] mt-0.5 font-bold">📍</span>
                <span>
                  <strong className="text-white block mb-0.5">Calicut Office:</strong>
                  First Floor, Old Bus Stand Bldg, Thamarassery, Calicut, Kerala - 673573
                </span>
              </li>
              <li className="flex items-start gap-2.5 pt-2.5 border-t border-white/10">
                <span className="text-[#f8ba2b] mt-0.5 font-bold">📍</span>
                <span>
                  <strong className="text-white block mb-0.5">Kochi Office:</strong>
                  10/1744, 1st Floor, Suite #1012, Sowbhagya Building, Athani, Kakkanad, Kusumagiri P.O, Kochi – 682030
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: TRUST */}
          <div>
            <h4 style={{ color: '#f8ba2b' }} className="text-sm font-black text-[#f8ba2b] uppercase tracking-widest mb-4 font-heading">Impact</h4>
            <div className="space-y-4">
               <div>
                 <div className="text-2xl sm:text-3xl font-black text-[#f8ba2b] font-heading">2000+</div>
                 <div className="text-[11px] uppercase tracking-widest text-gray-400 mt-0.5 font-bold">Trusted Parents</div>
               </div>
               <div>
                 <div className="text-2xl sm:text-3xl font-black text-[#f8ba2b] font-heading">12+</div>
                 <div className="text-[11px] uppercase tracking-widest text-gray-400 mt-0.5 font-bold">Global Countries</div>
               </div>
               <div className="pt-1">
                 <span className="inline-block px-3.5 py-1.5 border border-white/20 bg-white/5 rounded-full text-[11px] font-bold text-white">
                    ISO 9001:2015 CERTIFIED
                 </span>
               </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-normal">
            © 2026 Mash Magic Learning Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold text-gray-400">
            <Link to="/privacy-policy" className="hover:text-[#008080] transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-[#008080] transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
