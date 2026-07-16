import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Sparkles, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../../constants/data';

const Navbar = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map(link => link.href.replace("#", ""));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#4E1212] text-[#F3E5AB] text-xs sm:text-sm h-[38px] px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30 hidden lg:flex items-center justify-between z-50 relative w-full">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
              {BUSINESS_INFO.location}
            </span>
            <span className="flex items-center gap-1.5 text-[#D4AF37] font-medium whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 animate-spin flex-shrink-0" style={{ animationDuration: '6s' }} />
              {BUSINESS_INFO.badge}
            </span>
          </div>
          <div className="flex items-center gap-6 font-medium whitespace-nowrap">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
              {BUSINESS_INFO.primaryPhone}
            </a>
            <span className="text-[#D4AF37]/40">|</span>
            <a
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
              {BUSINESS_INFO.secondaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed left-0 right-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-[#6A1B1A]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.35)] py-2 sm:py-2.5 border-b border-[#D4AF37]/40"
            : "top-0 lg:top-[38px] bg-[#6A1B1A]/90 backdrop-blur-sm py-2.5 sm:py-3.5 border-b border-[#D4AF37]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-3">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFF8DC] to-[#B8860B] p-[2px] sm:p-[2.5px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
              <div className="w-full h-full rounded-full bg-[#2E2A26] flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.jpeg"
                  alt="Tathastu AstroVastu Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0">
              <span className="font-['Cinzel',serif] text-lg sm:text-xl xl:text-2xl font-bold tracking-wider text-gradient-gold whitespace-nowrap leading-tight">
                Tathastu
              </span>
              <span className="text-[#F3E5AB] text-[9px] sm:text-[10px] xl:text-xs tracking-[0.18em] uppercase font-light whitespace-nowrap">
                AstroVastu & Remedies
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 flex-shrink-1">
            {NAV_LINKS.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all relative whitespace-nowrap ${
                    isActive
                      ? "text-[#F3E5AB] font-semibold"
                      : "text-[#F9F4E8]/80 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 sm:gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 transition-all flex items-center justify-center flex-shrink-0"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="relative group overflow-hidden px-4 sm:px-5 xl:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-[#2E2A26] bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all flex items-center gap-1.5 sm:gap-2 transform hover:-translate-y-0.5 flex-shrink-0 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-[#6A1B1A] flex-shrink-0" />
                <span className="font-semibold tracking-wide whitespace-nowrap">Book Consultation</span>
                <div className="absolute inset-0 bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors flex-shrink-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-[#4E1212]/98 border-t border-[#D4AF37]/30 px-4 pt-4 pb-6 mt-2.5 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-1.5 max-h-[70vh] overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-[#F9F4E8]/90 hover:bg-[#6A1B1A] hover:text-[#D4AF37] flex items-center justify-between transition-colors"
                  >
                    <span>{link.name}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]/50" />
                  </a>
                ))}

                <div className="h-[1px] bg-[#D4AF37]/20 my-2" />

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhone}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#6A1B1A] text-[#D4AF37] border border-[#D4AF37]/30 font-medium text-xs sm:text-sm transition-all hover:bg-[#6A1B1A]/80"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-xs sm:text-sm shadow-md hover:bg-[#20bd5a] transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:shadow-xl"
                >
                  <Calendar className="w-4 h-4 text-[#6A1B1A]" />
                  Book Free Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
