import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import { SERVICES_DATA } from '../../constants/data';

const Services = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#2E2A26] text-[#F9F4E8] overflow-hidden">
      {/* Background Gold Geometry Watermark */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#6A1B1A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Sacred Vedic Services"
          title="Our Divine Consultations & Guidance"
          subtitle="Explore time-tested Parashari astrology, no-demolition Vastu, and authentic spiritual remedies to bring peace, prosperity, and success."
          dark={true}
        />

        {/* 3x3 Responsive Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative bg-[#6A1B1A]/70 backdrop-blur-md rounded-3xl overflow-hidden border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all duration-500 shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)] flex flex-col"
            >
              {/* Image Banner with Hover Zoom */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A1B1A] via-[#6A1B1A]/40 to-transparent" />
                
                {/* Subtitle Badge Overlay */}
                <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F3E5AB] bg-[#4E1212]/90 border border-[#D4AF37]/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-gradient-gold group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F9F4E8]/80 leading-relaxed font-light mt-2.5">
                    {service.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <ul className="mt-4 space-y-2">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#F3E5AB]/90 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold tracking-wide text-[#D4AF37] hover:text-[#FFF8DC] flex items-center gap-1 transition-colors py-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="px-4 py-2 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/60 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#2E2A26] font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learn More Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-[#2E2A26]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#6A1B1A] border-2 border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl z-10 text-[#F9F4E8]"
            >
              <div className="relative h-64 sm:h-72">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A1B1A] via-[#6A1B1A]/50 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#2E2A26]/70 text-white hover:bg-[#D4AF37] hover:text-[#2E2A26] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#2E2A26]/80 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    {selectedService.subtitle}
                  </span>
                  <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-gradient-gold mt-2">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                    About This Consultation
                  </h4>
                  <p className="text-sm sm:text-base text-[#F9F4E8]/90 leading-relaxed font-light">
                    {selectedService.description} At Tathastu AstroVastu, every session is personalized. We take the time to calculate precise planetary alignments and answer all your doubts with deep patience and clarity.
                  </p>
                </div>

                <div className="bg-[#4E1212]/90 border border-[#D4AF37]/30 rounded-2xl p-5 space-y-3">
                  <h5 className="text-xs sm:text-sm font-bold text-[#F3E5AB] flex items-center gap-2 uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    What You Receive:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#F9F4E8]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F9F4E8]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>Post-Consultation Support</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#D4AF37]/20">
                  <div className="text-xs text-[#F3E5AB]/80">
                    📍 Available via <span className="font-semibold text-[#D4AF37]">Online Video/Phone</span> or <span className="font-semibold text-[#D4AF37]">In-Person Visit</span> at Petlad, Anand.
                  </div>

                  <button
                    onClick={() => {
                      const serviceTitle = selectedService.title;
                      setSelectedService(null);
                      onOpenConsultation(serviceTitle);
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-['Cinzel',serif] font-bold text-sm shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.9)] transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#6A1B1A]" />
                    <span>Book This Service Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
