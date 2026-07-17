import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import { PROBLEMS_DATA } from '../../constants/data';

const Problems = ({ onOpenConsultation }) => {
  return (
    <section id="problems" className="py-20 lg:py-28 relative bg-[#F9F4E8] text-[#2E2A26] overflow-hidden">
      {/* Background Mandala Watermarks */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6A1B1A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Spiritual Solutions"
          title="Problems We Help Solve"
          subtitle="Are you facing hurdles despite your hard work? Ancient Vedic astrology diagnoses the root karmic block and provides exact spiritual remedies."
        />

        {/* Poster-Inspired Two-Column & Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PROBLEMS_DATA.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => onOpenConsultation(problem.title)}
              className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-7 border-2 border-[#D4AF37]/30 hover:border-[#6A1B1A] hover:bg-[#6A1B1A] hover:text-[#F9F4E8] transition-all duration-400 shadow-md hover:shadow-2xl cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#6A1B1A]/10 group-hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-2xl sm:text-3xl transition-colors shadow-inner">
                    {problem.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#F9F4E8] text-[#6A1B1A] group-hover:bg-[#4E1212] group-hover:text-[#F3E5AB] border border-[#D4AF37]/30 transition-colors">
                    {problem.category}
                  </span>
                </div>

                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#6A1B1A] group-hover:text-gradient-gold transition-colors">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2E2A26]/75 group-hover:text-[#F9F4E8]/90 mt-2.5 leading-relaxed transition-colors font-light">
                  {problem.description}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 group-hover:border-[#D4AF37]/30 flex items-center justify-between text-xs font-semibold text-[#6A1B1A] group-hover:text-[#D4AF37] transition-colors">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Solution & Remedies</span>
                </span>
                <div className="w-7 h-7 rounded-full bg-[#6A1B1A]/10 group-hover:bg-[#D4AF37] group-hover:text-[#2E2A26] flex items-center justify-center transition-all">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Prompt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 bg-gradient-to-r from-[#6A1B1A] via-[#4E1212] to-[#6A1B1A] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-10 shadow-2xl text-center text-[#F9F4E8] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left space-y-2">
            <h4 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-gradient-gold">
              Don't See Your Specific Concern?
            </h4>
            <p className="text-sm text-[#F3E5AB]/90 max-w-xl font-light">
              Every birth chart is unique. Consult directly with our senior master astrologer in Petlad for a confidential 1-on-1 Janam Kundali diagnosis.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation("General Confidential Inquiry")}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-['Cinzel',serif] font-bold text-sm sm:text-base shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all flex-shrink-0 flex items-center gap-2"
          >
            <ShieldCheck className="w-5 h-5 text-[#6A1B1A]" />
            <span>Consult Privately Now</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
