import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import SectionHeading from '../Common/SectionHeading';
import { BUSINESS_INFO } from '../../constants/data';

const Contact = ({ onOpenConsultation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      service: "Vedic Astrology / Kundali Analysis",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmittedName(data.name);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#F9F4E8] text-[#2E2A26] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Connect With Divine Guidance"
          title="Contact Tathastu AstroVastu"
          subtitle="Whether you seek in-person consultation in Petlad, Anand or worldwide phone/video guidance, we are here to support your spiritual journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Business Details & Direct Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-[#6A1B1A] text-[#F9F4E8] rounded-3xl p-8 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-['Cinzel',serif] text-2xl font-bold text-gradient-gold mb-6 border-b border-[#D4AF37]/30 pb-4 flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                <span>Divine Center Details</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#4E1212] border border-[#D4AF37]/40 text-[#D4AF37] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#F3E5AB]">
                      Center Location
                    </h4>
                    <p className="text-xs sm:text-sm text-[#F9F4E8]/85 font-light mt-1 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#4E1212] border border-[#D4AF37]/40 text-[#D4AF37] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#F3E5AB]">
                      Direct Helplines
                    </h4>
                    <div className="text-xs sm:text-sm text-[#F9F4E8]/85 font-light mt-1 space-y-1">
                      <div>📞 <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="hover:text-[#D4AF37] transition-colors">{BUSINESS_INFO.primaryPhone}</a></div>
                      <div>📞 <a href={`tel:${BUSINESS_INFO.secondaryPhone}`} className="hover:text-[#D4AF37] transition-colors">{BUSINESS_INFO.secondaryPhone}</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#4E1212] border border-[#D4AF37]/40 text-[#D4AF37] flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#F3E5AB]">
                      Email Address
                    </h4>
                    <p className="text-xs sm:text-sm text-[#F9F4E8]/85 font-light mt-1">
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D4AF37] transition-colors">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#4E1212] border border-[#D4AF37]/40 text-[#D4AF37] flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#F3E5AB]">
                      Working Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-[#F9F4E8]/85 font-light mt-1">
                      {BUSINESS_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons Box */}
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/30 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="py-3 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#2E2A26] font-['Cinzel',serif] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-xl h-64 sm:h-80 relative bg-[#2E2A26]">
              <iframe
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tathastu AstroVastu Location Map"
                className="w-full h-full filter contrast-[1.05]"
              />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-xl border-2 border-[#D4AF37]/50 rounded-3xl p-8 sm:p-10 shadow-2xl relative"
          >
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6A1B1A] bg-[#6A1B1A]/10 px-3 py-1 rounded-full border border-[#6A1B1A]/20">
                Direct Inquiry Form
              </span>
              <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#6A1B1A] mt-2">
                Send Us A Message
              </h3>
              <p className="text-xs sm:text-sm text-[#2E2A26]/75 font-light mt-1">
                Fill out the form below & our team will get back to you within 2 business hours.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#6A1B1A] mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Please enter your name" })}
                    placeholder="e.g. Amit Patel"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F9F4E8]/80 border border-[#D4AF37]/50 text-[#2E2A26] placeholder-[#2E2A26]/40 focus:outline-none focus:border-[#6A1B1A] focus:ring-2 focus:ring-[#6A1B1A]/10 text-sm sm:text-base transition-all"
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#6A1B1A] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Please enter your phone number",
                        pattern: {
                          value: /^[0-9+\s-]{10,15}$/,
                          message: "Enter valid 10-digit number"
                        }
                      })}
                      placeholder="+91 99254 35572"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F9F4E8]/80 border border-[#D4AF37]/50 text-[#2E2A26] placeholder-[#2E2A26]/40 focus:outline-none focus:border-[#6A1B1A] focus:ring-2 focus:ring-[#6A1B1A]/10 text-sm sm:text-base transition-all"
                    />
                    {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#6A1B1A] mb-1.5">
                      Select Service
                    </label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F9F4E8]/80 border border-[#D4AF37]/50 text-[#2E2A26] focus:outline-none focus:border-[#6A1B1A] text-sm sm:text-base transition-all cursor-pointer"
                    >
                      <option value="Vedic Astrology / Kundali Analysis">Vedic Astrology / Kundali Analysis</option>
                      <option value="Vastu Consultation (Home/Office)">Vastu Consultation (Home/Office)</option>
                      <option value="Numerology & Name Correction">Numerology & Name Correction</option>
                      <option value="Gemstone & Rudraksha Selection">Gemstone & Rudraksha Selection</option>
                      <option value="Lal Kitab Practical Remedies">Lal Kitab Practical Remedies</option>
                      <option value="Marriage / Relationship Guidance">Marriage / Relationship Guidance</option>
                      <option value="Online Video / Phone Consultation">Online Video / Phone Consultation</option>
                      <option value="Offline Center Visit - Petlad">Offline Center Visit - Petlad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#6A1B1A] mb-1.5">
                    Your Message / Question
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Write your primary question or share exact birth details (DD/MM/YYYY, Time, City)..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F9F4E8]/80 border border-[#D4AF37]/50 text-[#2E2A26] placeholder-[#2E2A26]/40 focus:outline-none focus:border-[#6A1B1A] focus:ring-2 focus:ring-[#6A1B1A]/10 text-sm sm:text-base transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6A1B1A] via-[#4E1212] to-[#6A1B1A] text-[#F9F4E8] font-['Cinzel',serif] font-bold text-base shadow-xl hover:shadow-[0_0_25px_rgba(106,27,26,0.6)] transition-all flex items-center justify-center gap-2 transform active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-gradient-gold">Send Message To Astrologer</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#6A1B1A]/10 border-2 border-[#6A1B1A] text-[#6A1B1A] mx-auto flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="font-['Cinzel',serif] text-2xl font-bold text-[#6A1B1A]">
                  Thank You, {submittedName || "Friend"}!
                </h4>
                <p className="text-sm text-[#2E2A26]/80 max-w-md mx-auto leading-relaxed">
                  Your message has been received by our senior consultation team in Petlad, Anand. We will call or send you a WhatsApp confirmation shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#6A1B1A] text-[#F9F4E8] text-xs font-semibold hover:bg-[#4E1212] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
