import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, ArrowUp, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/data';

const FloatingButtons = ({ onOpenConsultation }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Book Consultation Quick Pill (Desktop & Mobile) */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={onOpenConsultation}
        className="pointer-events-auto group relative flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#6A1B1A] via-[#4E1212] to-[#6A1B1A] border-2 border-[#D4AF37] text-[#F9F4E8] shadow-[0_4px_25px_rgba(106,27,26,0.8)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all transform hover:-translate-y-1"
      >
        <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#6A1B1A] flex items-center justify-center font-bold">
          <Calendar className="w-3.5 h-3.5" />
        </div>
        <span className="font-['Cinzel',serif] font-bold text-xs sm:text-sm tracking-wide text-gradient-gold">
          Book Consultation
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
        </span>
      </motion.button>

      {/* Floating Action Circle Stack */}
      <div className="flex items-center gap-3">
        {/* WhatsApp Floating Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] transform hover:scale-110 transition-all relative group"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#2E2A26] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call Floating Button */}
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#B8860B] text-[#2E2A26] flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] transform hover:scale-110 transition-all relative group font-bold"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDuration: '3s' }} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#2E2A26] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call: {BUSINESS_INFO.primaryPhone}
          </span>
        </a>

        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#6A1B1A]/90 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shadow-md hover:bg-[#D4AF37] hover:text-[#6A1B1A] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingButtons;
