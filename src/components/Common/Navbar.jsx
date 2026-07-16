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
      setScrolled(window.scrollY > 30);

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
      <div className="bg-[#4E1212] text-[#F3E5AB] text-xs sm:text-sm py-1.5 px-4 border-b border-[#D4AF37]/30 hidden lg:block z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {BUSINESS_INFO.location}
            </span>
            <span className="flex items-center gap-1.5 text-[#D4AF37] font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              {BUSINESS_INFO.badge}
            </span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {BUSINESS_INFO.primaryPhone}
            </a>
            <span className="text-[#D4AF37]/40">|</span>
            <a
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {BUSINESS_INFO.secondaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 lg:top-auto w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#6A1B1A]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.35)] py-3 border-b border-[#D4AF37]/40"
            : "bg-[#6A1B1A]/85 backdrop-blur-sm py-4 border-b border-[#D4AF37]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFF8DC] to-[#B8860B] p-[2px] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#6A1B1A] flex items-center justify-center">
                <span className="text-[#D4AF37] font-['Cinzel',serif] text-xl sm:text-2xl font-bold">ॐ</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-gradient-gold">
                Tathastu
              </span>
              <span className="text-[#F3E5AB] text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light">
                AstroVastu & Remedies
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all relative ${
                    isActive
                      ? "text-[#F3E5AB] font-semibold"
                      : "text-[#F9F4E8]/80 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 transition-all flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden px-6 py-2.5 rounded-full font-medium text-sm text-[#2E2A26] bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-[#6A1B1A]" />
              <span className="font-semibold tracking-wide">Book Consultation</span>
              <div className="absolute inset-0 bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-[#4E1212]/98 border-t border-[#D4AF37]/30 px-4 pt-4 pb-6 mt-3 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-[#F9F4E8]/90 hover:bg-[#6A1B1A] hover:text-[#D4AF37] flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]/50" />
                  </a>
                ))}

                <div className="h-[1px] bg-[#D4AF37]/20 my-2" />

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhone}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#6A1B1A] text-[#D4AF37] border border-[#D4AF37]/30 font-medium text-xs sm:text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-xs sm:text-sm shadow-md"
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
                  className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-semibold text-sm shadow-lg flex items-center justify-center gap-2"
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
