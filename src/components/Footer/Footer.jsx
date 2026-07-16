import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, Shield, Heart } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS, SERVICES_DATA } from '../../constants/data';

const Footer = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#2E2A26] text-[#F9F4E8] border-t-2 border-[#D4AF37]/50 relative overflow-hidden pt-16 pb-12">
      {/* Background Sacred Geometric Watermark */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#D4AF37]/10 pointer-events-none flex items-center justify-center">
        <div className="w-[75%] h-[75%] rounded-full border border-[#D4AF37]/10 border-dashed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#D4AF37]/25">
          
          {/* Column 1: Brand & Narrative */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFF8DC] to-[#B8860B] p-[2.5px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-[#2E2A26] flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.jpeg"
                    alt="Tathastu AstroVastu Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-['Cinzel',serif] text-2xl font-bold tracking-wider text-gradient-gold">
                  Tathastu
                </span>
                <span className="text-[#F3E5AB] text-[10px] tracking-[0.2em] uppercase font-light">
                  AstroVastu & Remedies
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#F9F4E8]/80 leading-relaxed font-light max-w-sm">
              Authentic Vedic Astrology, Numerology, Vastu Consultation, Lal Kitab Remedies, and Gemstone Guidance. We combine ancient wisdom with practical remedies to bring peace, prosperity, and success to your personal and professional life.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#2E2A26] flex items-center justify-center hover:scale-110 transition-transform shadow-md font-bold"
                title="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-10 h-10 rounded-full bg-[#6A1B1A] text-[#F3E5AB] border border-[#D4AF37]/50 flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-['Cinzel',serif] text-base font-bold text-gradient-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F9F4E8]/80">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37]/60">▸</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sacred Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Cinzel',serif] text-base font-bold text-gradient-gold uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F9F4E8]/80">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span className="text-[#D4AF37]/60 group-hover:translate-x-0.5 transition-transform">▸</span>
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Working Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Cinzel',serif] text-base font-bold text-gradient-gold uppercase tracking-wider">
              Divine Center
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F9F4E8]/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div><a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="hover:text-[#D4AF37] transition-colors">{BUSINESS_INFO.primaryPhone}</a></div>
                  <div><a href={`tel:${BUSINESS_INFO.secondaryPhone}`} className="hover:text-[#D4AF37] transition-colors">{BUSINESS_INFO.secondaryPhone}</a></div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D4AF37] transition-colors truncate">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation("General Footer Consultation")}
                className="w-full py-2.5 rounded-xl bg-[#6A1B1A] hover:bg-[#4E1212] border border-[#D4AF37]/50 text-[#F3E5AB] font-['Cinzel',serif] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F9F4E8]/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Tathastu AstroVastu. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> in Petlad, Gujarat
            </span>
            <span>|</span>
            <span className="text-[#D4AF37] font-semibold">Vedic Heritage & Trust</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
