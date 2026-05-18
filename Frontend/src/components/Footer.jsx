import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f8ba2b] text-gray-900 pt-16 pb-10 px-6 overflow-hidden relative border-t border-amber-200">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* COLUMN 1: BRAND */}
          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ color: '#0F172A' }} className="text-2xl font-black text-[#0F172A] mb-4 tracking-tight font-heading">
              Mash <span style={{ color: '#008080' }} className="text-[#008080]">Magic.</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-800 font-medium">
              India’s premium mentoring-led learning platform. We empower students through personalized guidance, emotional support, and continuous tracking.
            </p>
            <div className="flex gap-4">
               <a href="https://www.instagram.com/mashmagic_?igsh=MWEzamU5OXU1eHN1Zg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-[#0F172A] hover:bg-[#008080] hover:text-white transition-all duration-300 shadow-sm">
                 <i className="fab fa-instagram text-lg"></i>
               </a>
               <a href="https://www.facebook.com/share/1DvdrJeax4/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-[#0F172A] hover:bg-[#008080] hover:text-white transition-all duration-300 shadow-sm">
                 <i className="fab fa-facebook-f text-lg"></i>
               </a>
               <a href="https://www.linkedin.com/company/mash-magic/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-[#0F172A] hover:bg-[#008080] hover:text-white transition-all duration-300 shadow-sm">
                 <i className="fab fa-linkedin-in text-lg"></i>
               </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 style={{ color: '#0F172A' }} className="text-sm font-black text-[#0F172A] uppercase tracking-widest mb-6 font-heading">Navigation</h4>
            <ul className="space-y-3 text-[15px]">
              <li><Link to="/" className="text-gray-900 hover:text-[#008080] font-semibold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-900 hover:text-[#008080] font-semibold transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-900 hover:text-[#008080] font-semibold transition-colors">Our Programs</Link></li>
              <li><Link to="/magic-mentor" className="text-gray-900 hover:text-[#008080] font-semibold transition-colors">Magic Mentor</Link></li>
              <li><Link to="/testimonials" className="text-gray-900 hover:text-[#008080] font-semibold transition-colors">Testimonials</Link></li>
              <li><Link to="/blogs" className="text-gray-900 hover:text-[#008080] font-semibold transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h4 style={{ color: '#0F172A' }} className="text-sm font-black text-[#0F172A] uppercase tracking-widest mb-6 font-heading">Get in Touch</h4>
            <ul className="space-y-4 text-[15px] font-medium text-gray-900">
              <li className="flex items-start gap-3">
                <span className="text-[#008080] mt-1 font-bold">📞</span>
                <span>+91 701212 8756</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#008080] mt-1 font-bold">✉️</span>
                <span className="break-all">hellomashmagic@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#008080] mt-1 font-bold">📍</span>
                <span>
                  <strong className="text-[#0F172A] block mb-1">Calicut Office:</strong>
                  First Floor, Old Bus Stand Bldg,<br />
                  Thamarassery, Calicut,<br />
                  Kerala - 673573
                </span>
              </li>
              <li className="flex items-start gap-3 pt-3 border-t border-black/10">
                <span className="text-[#008080] mt-1 font-bold">📍</span>
                <span>
                  <strong className="text-[#0F172A] block mb-1">Kochi Office:</strong>
                  10/1744, 1st Floor, Suite #1012,<br />
                  Sowbhagya Building, Athani,<br />
                  Kakkanad, Kusumagiri P.O,<br />
                  Kochi – 682030<br />
                  <span className="text-sm text-gray-800 block mt-1 font-semibold">📞 7012-128756</span>
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: TRUST */}
          <div>
            <h4 style={{ color: '#0F172A' }} className="text-sm font-black text-[#0F172A] uppercase tracking-widest mb-6 font-heading">Impact</h4>
            <div className="space-y-5">
               <div>
                 <div className="text-3xl font-black text-[#0F172A] font-heading">2000+</div>
                 <div className="text-xs uppercase tracking-widest text-gray-700 mt-1 font-bold">Trusted Parents</div>
               </div>
               <div>
                 <div className="text-3xl font-black text-[#0F172A] font-heading">12+</div>
                 <div className="text-xs uppercase tracking-widest text-gray-700 mt-1 font-bold">Global Countries</div>
               </div>
               <div className="pt-2">
                 <span className="inline-block px-4 py-2 border border-black/20 bg-black/5 rounded-full text-xs font-bold text-[#0F172A]">
                    ISO 9001:2015 CERTIFIED
                 </span>
               </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-800 font-medium">
            © 2026 Mash Magic Learning Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-[#0F172A]">
            <Link to="/privacy-policy" className="hover:text-[#008080] transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-[#008080] transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
