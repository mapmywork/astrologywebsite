import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, MessageCircle, Calendar, Send, CheckCircle2, ShieldCheck, Compass, Star } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { BUSINESS_INFO } from '../../constants/data';

const Hero = ({ onOpenConsultation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      problem: "Marriage & Kundali Matching",
      preferredConsultation: "Online Phone/Video Call",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    setFormData(data);
    setIsSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    if (!formData) return;
    const text = `Hello Tathastu AstroVastu,%0A%0AI have requested a Free Consultation from the website Hero Form:%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Problem:* ${formData.problem}%0A*Preferred Mode:* ${formData.preferredConsultation}%0A*Message:* ${formData.message || "N/A"}`;
    window.open(`https://wa.me/919925435572?text=${text}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#2E2A26]">
      {/* Cinematic Background Composition with Parallax & Cosmic Sky */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_cosmic_background.png"
          alt="Cosmic Starry Galaxy Background"
          className="w-full h-full object-cover opacity-55 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4E1212]/95 via-[#6A1B1A]/85 to-[#2E2A26]/95 backdrop-blur-[1px]" />
      </div>

      {/* Rotating Zodiac Wheel / Sacred Geometry Watermark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full border-[1px] border-[#D4AF37]/15 pointer-events-none flex items-center justify-center z-0"
      >
        <div className="w-[85%] h-[85%] rounded-full border-[1px] border-[#D4AF37]/20 border-dashed flex items-center justify-center">
          <div className="w-[70%] h-[70%] rounded-full border-[1px] border-[#D4AF37]/15 flex items-center justify-center">
            <span className="text-9xl text-[#D4AF37]/10 font-['Cinzel',serif] select-none">ॐ</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Glowing Particles Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: Math.random() * 0.5 + 0.2,
              x: Math.random() * 1000,
              y: Math.random() * 800
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Hero Messaging & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs sm:text-sm font-medium tracking-wide shadow-lg backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <span>✨ Trusted Astrology & Vastu Consultation</span>
            </motion.div>

            {/* Large Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Cinzel',serif] font-bold tracking-tight text-gradient-gold leading-[1.15]">
                Tathastu AstroVastu
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-['Cormorant_Garamond',serif] italic font-semibold text-[#F9F4E8]/95 leading-snug">
                Transform Your Life Through Ancient Vedic Wisdom
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#F9F4E8]/80 leading-relaxed max-w-2xl font-light">
              Experience authentic Vedic Astrology, Numerology, Vastu Consultation, Lal Kitab Remedies, Gemstone Guidance, and Spiritual Remedies designed to bring peace, prosperity, success, and positive transformation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-['Cinzel',serif] font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:shadow-[0_0_45px_rgba(212,175,55,0.9)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#6A1B1A]" />
                <span>Book Consultation</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="px-6 py-3.5 rounded-full bg-[#4E1212] border border-[#D4AF37]/50 hover:bg-[#6A1B1A] text-[#F3E5AB] font-semibold text-sm sm:text-base transition-all flex items-center gap-2 shadow-md hover:border-[#D4AF37]"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 border-t border-[#D4AF37]/25 grid grid-cols-3 gap-4 text-[#F3E5AB]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Star className="w-5 h-5 fill-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold font-['Cinzel',serif]">15+ Years</div>
                  <div className="text-[11px] text-[#F9F4E8]/60">Mastery & Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold font-['Cinzel',serif]">10,000+</div>
                  <div className="text-[11px] text-[#F9F4E8]/60">Kundali Analyzed</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold font-['Cinzel',serif]">100% Privacy</div>
                  <div className="text-[11px] text-[#F9F4E8]/60">Petlad & Anand Center</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Premium Glass Consultation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative bg-[#6A1B1A]/80 backdrop-blur-xl border-2 border-[#D4AF37]/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden text-[#F9F4E8]">
              {/* Ornamental Gold Corner Glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#D4AF37]/30 rounded-full blur-2xl pointer-events-none" />

              <div className="text-center mb-6">
                <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                  Immediate Vedic Guidance
                </span>
                <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-gradient-gold">
                  Free Consultation Inquiry
                </h3>
                <p className="text-xs text-[#F3E5AB]/80 mt-1">
                  Share your concern & our master astrologer will guide you
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your Name *"
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/90 border border-[#D4AF37]/40 text-[#F9F4E8] placeholder-[#F9F4E8]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition-all"
                    />
                    {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9+\s-]{10,15}$/,
                          message: "Enter valid 10-digit phone number"
                        }
                      })}
                      placeholder="Phone / WhatsApp Number *"
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/90 border border-[#D4AF37]/40 text-[#F9F4E8] placeholder-[#F9F4E8]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition-all"
                    />
                    {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <select
                      {...register("problem")}
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/90 border border-[#D4AF37]/40 text-[#F9F4E8] focus:outline-none focus:border-[#D4AF37] text-sm transition-all cursor-pointer"
                    >
                      <option value="Marriage & Kundali Matching" className="bg-[#6A1B1A]">❤️ Marriage & Kundali Matching</option>
                      <option value="Relationship & Family Harmony" className="bg-[#6A1B1A]">👨‍👩‍👧 Relationship & Family Harmony</option>
                      <option value="Financial Growth & Debt Clearance" className="bg-[#6A1B1A]">💰 Financial Growth & Debt Clearance</option>
                      <option value="Career & Business Expansion" className="bg-[#6A1B1A]">💼 Career & Business Expansion</option>
                      <option value="Vastu Consultation (No Demolition)" className="bg-[#6A1B1A]">🏡 Vastu Consultation (No Demolition)</option>
                      <option value="Gemstone & Rudraksha Guidance" className="bg-[#6A1B1A]">💎 Gemstone & Rudraksha Guidance</option>
                      <option value="Lal Kitab & Karmic Remedies" className="bg-[#6A1B1A]">📜 Lal Kitab & Karmic Remedies</option>
                      <option value="Foreign Travel & Legal Victory" className="bg-[#6A1B1A]">✈️ Foreign Travel & Legal Victory</option>
                    </select>
                  </div>

                  <div>
                    <select
                      {...register("preferredConsultation")}
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/90 border border-[#D4AF37]/40 text-[#F9F4E8] focus:outline-none focus:border-[#D4AF37] text-sm transition-all cursor-pointer"
                    >
                      <option value="Online Phone/Video Call" className="bg-[#6A1B1A]">Preferred: Online (Phone/Video Call)</option>
                      <option value="Offline Center Visit - Petlad" className="bg-[#6A1B1A]">Preferred: Offline Center Visit (Petlad)</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      {...register("message")}
                      placeholder="Brief details or question (Optional)..."
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/90 border border-[#D4AF37]/40 text-[#F9F4E8] placeholder-[#F9F4E8]/50 focus:outline-none focus:border-[#D4AF37] text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-['Cinzel',serif] font-bold text-base shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:shadow-[0_0_40px_rgba(212,175,55,0.9)] transition-all flex items-center justify-center gap-2 transform active:scale-98 mt-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-[#6A1B1A]" />
                        <span>Get Free Consultation</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#F3E5AB]/75 mt-1">
                    📞 Direct Helpline: <span className="text-[#D4AF37] font-semibold">+91 9925435572</span> | Petlad, Gujarat
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] text-[#D4AF37] mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-['Cinzel',serif] text-xl font-bold text-gradient-gold">
                      Inquiry Received!
                    </h4>
                    <p className="text-xs text-[#F9F4E8]/90 mt-1 max-w-xs mx-auto">
                      Namaste <span className="text-[#D4AF37] font-semibold">{formData.name}</span>! We have received your inquiry for <span className="underline">{formData.problem}</span>.
                    </p>
                  </div>

                  <button
                    onClick={handleOpenWhatsApp}
                    className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-102"
                  >
                    <Send className="w-4 h-4" />
                    Open WhatsApp to Connect Now
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      reset();
                    }}
                    className="text-xs text-[#F3E5AB]/70 underline hover:text-[#D4AF37] transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
