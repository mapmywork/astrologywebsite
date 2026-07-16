import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SectionHeading = ({ badge, title, subtitle, dark = false, align = "center" }) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 ${
            dark
              ? "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30"
              : "bg-[#6A1B1A]/10 text-[#6A1B1A] border border-[#6A1B1A]/20"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl sm:text-4xl md:text-5xl font-['Cinzel',serif] font-bold tracking-tight mb-4 ${
          dark ? "text-[#F9F4E8]" : "text-[#2E2A26]"
        }`}
      >
        {title.split(" ").map((word, idx) => {
          // Highlight key spiritual words in gold
          const goldWords = ["Vedic", "Astrology", "Vastu", "Wisdom", "Transform", "Divine", "Sacred", "Tathastu", "Remedies", "Solve", "Why", "Consultation", "Guaranteed"];
          const isGold = goldWords.some(gw => word.toLowerCase().includes(gw.toLowerCase()));
          return isGold ? (
            <span key={idx} className="text-gradient-gold drop-shadow-sm mr-2.5 inline-block">
              {word}{" "}
            </span>
          ) : (
            <span key={idx} className="mr-2.5 inline-block">
              {word}{" "}
            </span>
          );
        })}
      </motion.h2>

      {/* Sacred Geometry / Mandala Gold Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`flex items-center gap-3 my-4 ${align === "center" ? "justify-center" : "justify-start"}`}
      >
        <div className={`h-[1px] w-12 sm:w-20 ${dark ? "bg-gradient-to-r from-transparent to-[#D4AF37]/60" : "bg-gradient-to-r from-transparent to-[#6A1B1A]/60"}`} />
        <div className="relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37] border border-[#6A1B1A]" />
          <div className="absolute w-5 h-5 rounded-full border border-[#D4AF37]/40 animate-ping" />
        </div>
        <div className={`h-[1px] w-12 sm:w-20 ${dark ? "bg-gradient-to-l from-transparent to-[#D4AF37]/60" : "bg-gradient-to-l from-transparent to-[#6A1B1A]/60"}`} />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-base sm:text-lg leading-relaxed ${
            dark ? "text-[#F9F4E8]/80 font-light" : "text-[#2E2A26]/75"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
