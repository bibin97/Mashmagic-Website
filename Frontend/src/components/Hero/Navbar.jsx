import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";
import ContactForm from "../ContactForm";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 150) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`w-full flex justify-center fixed top-4 z-[9999] px-4 transition-all duration-500 ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0 pointer-events-none"}`}>
        <nav className="px-6 sm:px-8 py-2 rounded-full flex items-center gap-8 md:gap-12 bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 w-auto font-sans">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer py-1">
            <img src={Logo} alt="Mash Magic" className="h-8 sm:h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <NavItem label="Home" path="/" active={location.pathname === "/"} />
            <NavItem label="About" path="/about" active={location.pathname === "/about"} />
            <NavItem label="Programs" path="/courses" active={location.pathname === "/courses"} />
            <NavItem label="Magic Mentor" path="/magic-mentor" active={location.pathname === "/magic-mentor"} />
            <NavItem label="Success Stories" path="/testimonials" active={location.pathname === "/testimonials"} />
            <NavItem label="Blog" path="/blogs" active={location.pathname === "/blogs"} />
            <NavItem label="Student Login" path="/student-login" active={location.pathname === "/student-login"} />
            
            <button 
              onClick={() => setShowContact(true)}
              className="bg-[#f8ba2b] text-black px-6 py-2 rounded-full font-semibold text-sm tracking-wide hover:bg-[#e0a624] transition-all duration-300 shadow-md"
            >
              Contact Us
            </button>
          </ul>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-gray-700 focus:outline-none ml-auto" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 w-11/12 max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 md:hidden font-sans"
            >
              <ul className="flex flex-col gap-4 text-gray-700 font-medium text-base">
                <MobileNavItem label="Home" path="/" onClick={() => setOpen(false)} />
                <MobileNavItem label="About" path="/about" onClick={() => setOpen(false)} />
                <MobileNavItem label="Programs" path="/courses" onClick={() => setOpen(false)} />
                <MobileNavItem label="Magic Mentor" path="/magic-mentor" onClick={() => setOpen(false)} />
                <MobileNavItem label="Success Stories" path="/testimonials" onClick={() => setOpen(false)} />
                <MobileNavItem label="Blog" path="/blogs" onClick={() => setOpen(false)} />
                <MobileNavItem label="Student Login" path="/student-login" onClick={() => setOpen(false)} />
                <button 
                  onClick={() => { setShowContact(true); setOpen(false); }}
                  className="w-full bg-[#f8ba2b] text-black py-3 rounded-xl font-semibold text-center mt-2 shadow-md hover:bg-[#e0a624]"
                >
                  Contact Us
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showContact && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999999] flex justify-center items-center p-4 font-sans overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-white via-white to-teal-50/40 rounded-[2.5rem] shadow-[0_25px_70px_rgba(0,0,0,0.2)] border border-white/80 w-full max-w-lg p-6 sm:p-8 relative overflow-hidden"
            >
              <button onClick={() => setShowContact(false)} className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-teal-50 hover:text-[#008080] text-gray-500 rounded-full flex items-center justify-center font-bold transition-all duration-300 z-50 shadow-sm border border-gray-200/60 text-lg">✕</button>
              <ContactForm onClose={() => setShowContact(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ label, path, active }) {
  return (
    <li>
      <Link 
        to={path} 
        className={`text-base font-medium tracking-normal transition-colors duration-300 ${active ? "text-[#008080]" : "text-gray-700 hover:text-[#008080]"}`}
      >
        {label}
      </Link>
    </li>
  );
}

function MobileNavItem({ label, path, onClick }) {
  return (
    <li>
      <Link 
        to={path} 
        onClick={onClick} 
        className="block text-base font-medium text-gray-800 py-2 border-b border-gray-50 hover:text-[#008080]"
      >
        {label}
      </Link>
    </li>
  );
}
