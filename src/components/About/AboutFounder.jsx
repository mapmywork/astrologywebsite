import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, BookOpen, HeartHandshake } from 'lucide-react';

const AboutFounder = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6A1B1A]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-4 border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(106,27,26,0.15)] bg-[#F9F4E8]">
              <img
                src="/images/founder.jpeg"
                alt="Acharya Jagdish - Founder of Tathastu AstroVastu"
                className="w-full h-[450px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#6A1B1A] via-[#6A1B1A]/80 to-transparent pt-24 pb-6 px-6 text-center text-[#F9F4E8]">
                <h3 className="font-['Cinzel',serif] text-2xl font-bold">
                  Acharya Jagdish
                </h3>
                <p className="text-sm text-[#F3E5AB] mt-1 font-medium tracking-wide">
                  Master Vedic Astrologer & Vastu Expert
                </p>
              </div>
            </div>

            {/* Floating Gold Badge */}
            <div className="absolute -top-6 -left-6 sm:top-8 sm:-left-8 z-20 bg-[#6A1B1A] border-2 border-[#D4AF37] rounded-2xl p-4 shadow-2xl text-center hidden sm:block">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] mx-auto flex items-center justify-center mb-1">
                <Star className="w-6 h-6 fill-[#D4AF37]" />
              </div>
              <div className="font-['Cinzel',serif] font-bold text-lg text-[#F9F4E8]">
                Trusted
              </div>
              <div className="text-[10px] text-[#F3E5AB]/90 uppercase tracking-wider">
                Guide
              </div>
            </div>
          </motion.div>

          {/* Right Column - Founder Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-[#2E2A26]"
          >
            <div>
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">
                Meet The Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-['Cinzel',serif] font-bold text-[#6A1B1A] leading-tight mb-4">
                Guiding Lives with Divine Vision & Ancient Wisdom
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#2E2A26]/85">
              <p>
                With over <span className="font-semibold text-[#6A1B1A]">15 years of dedicated spiritual sadhana</span> and astrological research, <span className="font-semibold">Acharya Jagdish</span> has been the guiding light behind Tathastu AstroVastu. His journey began with a profound calling to demystify ancient Vedic scriptures and make their profound wisdom practically accessible to the modern world.
              </p>
              <p>
                Renowned for his compassionate approach and precise mathematical calculations, he specializes in Parashari Astrology, Lal Kitab, and no-demolition Vastu Shastra. He firmly believes that astrology is not a tool to create fear, but a divine roadmap to empower individuals to make conscious, life-changing decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-4 bg-[#F9F4E8] p-3 rounded-xl border border-[#D4AF37]/20">
                <div className="w-10 h-10 rounded-full bg-[#6A1B1A]/10 flex items-center justify-center text-[#6A1B1A]">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-[#2E2A26]">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-4 bg-[#F9F4E8] p-3 rounded-xl border border-[#D4AF37]/20">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#6A1B1A]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-[#2E2A26]">Vedic Scholar</span>
              </div>
              <div className="flex items-center gap-4 bg-[#F9F4E8] p-3 rounded-xl border border-[#D4AF37]/20">
                <div className="w-10 h-10 rounded-full bg-[#6A1B1A]/10 flex items-center justify-center text-[#6A1B1A]">
                  <Star className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-[#2E2A26]">10,000+ Consultations</span>
              </div>
              <div className="flex items-center gap-4 bg-[#F9F4E8] p-3 rounded-xl border border-[#D4AF37]/20">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#6A1B1A]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-[#2E2A26]">Compassionate Guide</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
