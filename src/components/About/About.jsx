import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import { STATS_DATA, BUSINESS_INFO } from '../../constants/data';

const About = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#F9F4E8] overflow-hidden">
      {/* Background Spiritual Ornament */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6A1B1A]/5 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Authentic Vedic Legacy"
          title="About Tathastu AstroVastu"
          subtitle="Guided by ancient spiritual scriptures, Parashari astrology, Lal Kitab wisdom, and divine Vastu Shastra principles from our consecrated center in Petlad, Anand, Gujarat."
        />

        {/* Main Grid: Left Image & Mandala Frame, Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column - Framed Spiritual Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(106,27,26,0.25)] bg-[#2E2A26]">
              <img
                src="/images/about_vedic_center.png"
                alt="Ancient Vedic Astrology Manuscripts and Spiritual Lamp"
                className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6A1B1A]/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-[#F9F4E8]">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-widest uppercase">
                  Spiritual Sanctuary
                </span>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold mt-1">
                  Petlad, Anand District, Gujarat
                </h3>
                <p className="text-xs sm:text-sm text-[#F3E5AB]/90 font-light mt-1">
                  Serving thousands across India and NRIs globally with divine ethical counsel.
                </p>
              </div>
            </div>

            {/* Floating Gold Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 z-20 bg-[#6A1B1A] border-2 border-[#D4AF37] rounded-2xl p-4 sm:p-6 shadow-2xl text-center max-w-[200px] text-[#F9F4E8]">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] mx-auto flex items-center justify-center mb-2">
                <Award className="w-5 h-5" />
              </div>
              <div className="font-['Cinzel',serif] font-bold text-xl sm:text-2xl text-gradient-gold">
                15+ Years
              </div>
              <div className="text-[11px] text-[#F3E5AB]/90 leading-tight">
                Excellence in Vedic Kundali & Vastu
              </div>
            </div>

            {/* Decorative Gold Frame Offset */}
            <div className="absolute top-6 left-6 w-full h-full border-2 border-[#D4AF37]/30 rounded-3xl -z-10 pointer-events-none" />
          </motion.div>

          {/* Right Column - Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-[#2E2A26]"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-['Cinzel',serif] font-bold text-[#6A1B1A] leading-snug">
                Where Ancient Vedic Science Meets Modern Life Clarity
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#2E2A26]/85 font-normal">
                At <span className="font-semibold text-[#6A1B1A]">Tathastu AstroVastu</span>, we believe that destiny is not to be feared—it is to be understood and mastered. Located in the heart of <span className="font-medium">Petlad, Anand, Gujarat</span>, our divine center combines classical mathematical calculations of Parashari and Jaimini Kundali analysis with practical Vastu Shastra and miraculous Lal Kitab remedies.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#2E2A26]/85 font-normal">
                We specialize in solving critical crossroads of life—be it delayed marriages, relationship harmony, unexpected financial stagnation, corporate career hurdles, or complex health and legal challenges. Every consultation is treated with sacred respect, transparency, and absolute confidentiality.
              </p>
            </div>

            {/* Key Ethical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 border border-[#D4AF37]/30 shadow-sm">
                <div className="p-2 rounded-xl bg-[#6A1B1A] text-[#D4AF37] mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] font-bold text-sm sm:text-base text-[#6A1B1A]">
                    Scientific & Exact
                  </h4>
                  <p className="text-xs text-[#2E2A26]/75 mt-0.5">
                    Precise birth time verification & multi-divisional chart study.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 border border-[#D4AF37]/30 shadow-sm">
                <div className="p-2 rounded-xl bg-[#6A1B1A] text-[#D4AF37] mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] font-bold text-sm sm:text-base text-[#6A1B1A]">
                    No-Demolition Vastu
                  </h4>
                  <p className="text-xs text-[#2E2A26]/75 mt-0.5">
                    Energy balancing through pyramids, yantras & color therapy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 border border-[#D4AF37]/30 shadow-sm">
                <div className="p-2 rounded-xl bg-[#6A1B1A] text-[#D4AF37] mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] font-bold text-sm sm:text-base text-[#6A1B1A]">
                    Lab-Tested Remedies
                  </h4>
                  <p className="text-xs text-[#2E2A26]/75 mt-0.5">
                    Authentic energized Ratna (gemstones) & Rudraksha guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 border border-[#D4AF37]/30 shadow-sm">
                <div className="p-2 rounded-xl bg-[#6A1B1A] text-[#D4AF37] mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] font-bold text-sm sm:text-base text-[#6A1B1A]">
                    100% Confidential
                  </h4>
                  <p className="text-xs text-[#2E2A26]/75 mt-0.5">
                    Complete privacy for personal, family & corporate queries.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6A1B1A] via-[#4E1212] to-[#6A1B1A] border border-[#D4AF37] text-[#F9F4E8] font-['Cinzel',serif] font-bold text-sm shadow-md hover:shadow-[0_0_25px_rgba(106,27,26,0.4)] transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Schedule Personal Consultation</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Animated Statistics Counter Strip */}
        <div className="bg-[#6A1B1A] border-2 border-[#D4AF37]/60 rounded-3xl p-8 sm:p-12 shadow-[0_10px_35px_rgba(106,27,26,0.3)] text-[#F9F4E8]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#D4AF37]/20">
            {STATS_DATA.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`pt-6 lg:pt-0 ${index > 0 ? "lg:pl-6" : ""}`}
              >
                <div className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-[#F3E5AB] uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-[#F9F4E8]/70 max-w-[200px] mx-auto leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
