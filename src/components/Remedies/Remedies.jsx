import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Shield, Gem, Flame } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import { REMEDIES_DATA } from '../../constants/data';

const Remedies = ({ onOpenConsultation }) => {
  return (
    <section id="remedies" className="py-20 lg:py-28 relative bg-[#2E2A26] text-[#F9F4E8] overflow-hidden">
      {/* Background Gold Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6A1B1A]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Authentic & Consecrated"
          title="Spiritual Remedies Section"
          subtitle="Astrological knowledge without accurate remedies is incomplete. We provide lab-certified gemstones, energized Rudraksha, and practical Lal Kitab solutions."
          dark={true}
        />

        {/* Large Image Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REMEDIES_DATA.map((remedy, index) => (
            <motion.div
              key={remedy.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#6A1B1A]/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-500 shadow-xl hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)] flex flex-col justify-between"
            >
              {/* Large Image Showcase */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={remedy.image}
                  alt={remedy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A1B1A] via-[#6A1B1A]/30 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#2E2A26]/80 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-semibold backdrop-blur-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{remedy.subtitle}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5 -mt-8 relative z-10">
                <div>
                  <h3 className="font-['Cinzel',serif] text-2xl font-bold text-gradient-gold group-hover:text-white transition-colors">
                    {remedy.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F9F4E8]/85 leading-relaxed font-light mt-2.5">
                    {remedy.description}
                  </p>

                  {/* Tags Pill Container */}
                  <div className="flex flex-wrap gap-2 mt-4.5">
                    {remedy.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#4E1212] text-[#F3E5AB] border border-[#D4AF37]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Inquire Button */}
                <div className="pt-4 border-t border-[#D4AF37]/25">
                  <button
                    onClick={() => onOpenConsultation(`Remedy Guidance: ${remedy.title}`)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-['Cinzel',serif] font-bold text-xs sm:text-sm shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] transition-all flex items-center justify-center gap-2 group-hover:scale-102"
                  >
                    <span>Inquire About {remedy.title.split(" ")[0]}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#6A1B1A]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Remedies;
