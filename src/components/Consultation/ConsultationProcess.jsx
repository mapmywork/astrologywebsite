import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import { PROCESS_DATA } from '../../constants/data';

const ConsultationProcess = ({ onOpenConsultation }) => {
  return (
    <section id="process" className="py-20 lg:py-28 relative bg-[#2E2A26] text-[#F9F4E8] overflow-hidden">
      {/* Background Subtle Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Seamless 6-Step Journey"
          title="Our Consultation Process"
          subtitle="From your first inquiry to lasting positive transformation, experience a structured, compassionate, and transparent astrological consultation."
          dark={true}
        />

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative">
          {PROCESS_DATA.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#6A1B1A]/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all duration-400 shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)] flex flex-col justify-between"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#4E1212] border-2 border-[#D4AF37] text-[#D4AF37] font-['Cinzel',serif] text-2xl font-extrabold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#F3E5AB]/70 px-3 py-1 rounded-full bg-[#2E2A26]/80 border border-[#D4AF37]/20">
                  Step {step.step} of 06
                </span>
              </div>

              <div>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-gradient-gold group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F9F4E8]/85 font-light leading-relaxed mt-2.5">
                  {step.description}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs font-medium text-[#D4AF37]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Step</span>
                </span>
                {index < PROCESS_DATA.length - 1 && (
                  <span className="hidden lg:flex items-center gap-1 text-[#F3E5AB]/60">
                    Next <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to start step 1 */}
        <div className="text-center mt-16">
          <button
            onClick={() => onOpenConsultation("Step 01: Initial Appointment Booking")}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-['Cinzel',serif] font-bold text-base shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:shadow-[0_0_45px_rgba(212,175,55,0.9)] transition-all transform hover:-translate-y-1 inline-flex items-center gap-2.5"
          >
            <Calendar className="w-5 h-5 text-[#6A1B1A]" />
            <span>Begin Step 01: Book Appointment Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
