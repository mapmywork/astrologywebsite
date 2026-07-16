import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Sun, Sparkles, Award, Globe, HeartHandshake, ShieldCheck, CheckCircle } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import { WHY_CHOOSE_US_DATA } from '../../constants/data';

const iconMap = {
  Target: Target,
  Compass: Compass,
  Sun: Sun,
  Sparkles: Sparkles,
  Award: Award,
  Globe: Globe,
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck
};

const WhyChooseUs = ({ onOpenConsultation }) => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 relative bg-[#F9F4E8] text-[#2E2A26] overflow-hidden">
      {/* Background Sacred Geometric Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#D4AF37]/20 pointer-events-none flex items-center justify-center">
        <div className="w-[80%] h-[80%] rounded-full border border-[#6A1B1A]/10 border-dashed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why Clients Trust Us"
          title="Why Choose Tathastu AstroVastu"
          subtitle="Combining mathematical astrology precision with compassionate counseling, we deliver ethical, confidential, and life-changing results."
        />

        {/* 4x2 or 3x3 Grid of Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#D4AF37]/40 hover:border-[#6A1B1A] hover:bg-[#6A1B1A] hover:text-[#F9F4E8] transition-all duration-400 shadow-md hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-[#6A1B1A] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#6A1B1A] flex items-center justify-center mb-5 transition-all shadow-md group-hover:scale-110">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-[#6A1B1A] group-hover:text-gradient-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E2A26]/75 group-hover:text-[#F9F4E8]/90 mt-2.5 leading-relaxed font-light transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Checkmark indicator */}
                <div className="mt-6 pt-3 border-t border-[#D4AF37]/20 group-hover:border-[#D4AF37]/30 flex items-center gap-1.5 text-xs font-semibold text-[#6A1B1A] group-hover:text-[#D4AF37] transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Royal Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-[#4E1212] border-2 border-[#D4AF37]/60 rounded-3xl p-6 sm:p-8 text-[#F9F4E8] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#6A1B1A] flex items-center justify-center font-bold text-xl flex-shrink-0">
              ॐ
            </div>
            <div>
              <h4 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-[#F3E5AB]">
                Guaranteed Ethical & Transparent Guidance
              </h4>
              <p className="text-xs sm:text-sm text-[#F9F4E8]/80 font-light">
                No false fear-mongering, no forced expensive rituals. Just pure Vedic knowledge & practical Vastu alignment.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation("Ethical Vedic Consultation")}
            className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#2E2A26] font-['Cinzel',serif] font-bold text-xs sm:text-sm shadow-md transition-colors whitespace-nowrap flex-shrink-0"
          >
            Experience Our Guidance
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
