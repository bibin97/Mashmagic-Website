import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#002b2b] text-gray-300 pt-24 pb-12 px-6 overflow-hidden relative border-t border-[#008080]/20">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008080]/30 blur-[120px] rounded-full -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* COLUMN 1: BRAND */}
          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ color: 'white' }} className="text-2xl font-black text-white mb-6 tracking-tight font-heading">
              Mash <span style={{ color: 'white' }} className="text-white">Magic.</span>
            </h3>
            <p className="text-sm leading-relaxed mb-8 text-gray-400">
              India’s premium mentoring-led learning platform. We empower students through personalized guidance, emotional support, and continuous tracking.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f8ba2b] hover:text-[#0F172A] transition-all duration-300">
                 <i className="fab fa-instagram text-lg"></i>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f8ba2b] hover:text-[#0F172A] transition-all duration-300">
                 <i className="fab fa-facebook-f text-lg"></i>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f8ba2b] hover:text-[#0F172A] transition-all duration-300">
                 <i className="fab fa-linkedin-in text-lg"></i>
               </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-8 font-heading">Navigation</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link to="/" className="hover:text-[#f8ba2b] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#f8ba2b] transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-[#f8ba2b] transition-colors">Our Programs</Link></li>
              <li><Link to="/magic-mentor" className="hover:text-[#f8ba2b] transition-colors">Magic Mentor</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#f8ba2b] transition-colors">Testimonials</Link></li>
              <li><Link to="/blogs" className="hover:text-[#f8ba2b] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-8 font-heading">Get in Touch</h4>
            <ul className="space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <span className="text-[#f8ba2b] mt-1">📞</span>
                <span>+91 701212 8756</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f8ba2b] mt-1">✉️</span>
                <span className="break-all">hellomashmagic@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f8ba2b] mt-1">📍</span>
                <span>
                  <strong className="text-white block mb-1">Calicut Office:</strong>
                  First Floor, Old Bus Stand Bldg,<br />
                  Thamarassery, Calicut,<br />
                  Kerala - 673573
                </span>
              </li>
              <li className="flex items-start gap-3 pt-3 border-t border-white/10">
                <span className="text-[#f8ba2b] mt-1">📍</span>
                <span>
                  <strong className="text-white block mb-1">Kochi Office:</strong>
                  10/1744, 1st Floor, Suite #1012,<br />
                  Sowbhagya Building, Athani,<br />
                  Kakkanad, Kusumagiri P.O,<br />
                  Kochi – 682030<br />
                  <span className="text-sm text-gray-400 block mt-1">📞 7012-128756</span>
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: TRUST */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-8 font-heading">Impact</h4>
            <div className="space-y-6">
               <div>
                 <div className="text-3xl font-black text-white font-heading">3700+</div>
                 <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Trusted Parents</div>
               </div>
               <div>
                 <div className="text-3xl font-black text-white font-heading">12+</div>
                 <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Global Countries</div>
               </div>
               <div className="pt-4">
                 <span className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-bold text-gray-400">
                    ISO 9001:2015 CERTIFIED
                 </span>
               </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © 2026 Mash Magic Learning Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
