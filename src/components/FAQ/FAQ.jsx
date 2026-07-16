import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import { FAQS_DATA, BUSINESS_INFO } from '../../constants/data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#2E2A26] text-[#F9F4E8] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Clear Your Doubts"
          title="Frequently Asked Questions"
          subtitle="We believe an informed client gets the maximum benefit from astrological remedies. Here are exact answers to common questions."
          dark={true}
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#6A1B1A]/90 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.25)]"
                    : "bg-[#6A1B1A]/50 border-[#D4AF37]/30 hover:border-[#D4AF37]/60"
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-gradient-gold flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#4E1212] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#D4AF37] text-[#6A1B1A]" : ""}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Expandable Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#F9F4E8]/85 leading-relaxed font-light border-t border-[#D4AF37]/20 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Doubts Prompt */}
        <div className="mt-12 text-center bg-[#4E1212]/80 border border-[#D4AF37]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#F3E5AB]">
              Have a Specific Question About Your Kundali or Vastu?
            </h4>
            <p className="text-xs text-[#F9F4E8]/70">
              Our Master Astrologer is available to answer direct initial inquiries via WhatsApp.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
