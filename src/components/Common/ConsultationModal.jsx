import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, Phone, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { BUSINESS_INFO } from '../../constants/data';

const ConsultationModal = ({ isOpen, onClose, initialService = "" }) => {
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
      problemCategory: initialService || "Marriage & Kundali Matching",
      preferredConsultation: "Online Video/Phone Consultation",
      birthDetails: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    // Simulate instant secure processing
    await new Promise(resolve => setTimeout(resolve, 800));
    setFormData(data);
    setIsSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    if (!formData) return;
    const text = `Hello Tathastu AstroVastu,%0A%0AI have booked a consultation:%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service/Problem:* ${formData.problemCategory}%0A*Mode:* ${formData.preferredConsultation}%0A*Birth Details:* ${formData.birthDetails || "Will share on call"}%0A*Message:* ${formData.message || "N/A"}`;
    window.open(`https://wa.me/919925435572?text=${text}`, '_blank');
  };

  const handleClose = () => {
    setIsSubmitted(false);
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#2E2A26]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl bg-[#6A1B1A] border-2 border-[#D4AF37] rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.4)] overflow-hidden text-[#F9F4E8] z-10 my-8"
          >
            {/* Top Gold Header Ornament */}
            <div className="bg-gradient-to-r from-[#4E1212] via-[#6A1B1A] to-[#4E1212] border-b border-[#D4AF37]/30 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-gradient-gold">
                    Book Vedic Consultation
                  </h3>
                  <p className="text-xs text-[#F3E5AB]/80 font-light flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    100% Confidential & Accurate
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/10 text-[#D4AF37] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#F3E5AB] mb-1">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/80 border border-[#D4AF37]/40 text-[#F9F4E8] placeholder-[#F9F4E8]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition-all"
                    />
                    {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#F3E5AB] mb-1">
                        Phone / WhatsApp <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9+\s-]{10,15}$/,
                            message: "Enter a valid 10-digit number"
                          }
                        })}
                        placeholder="+91 99254 35572"
                        className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/80 border border-[#D4AF37]/40 text-[#F9F4E8] placeholder-[#F9F4E8]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition-all"
                      />
                      {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#F3E5AB] mb-1">
                        Consultation Mode
                      </label>
                      <select
                        {...register("preferredConsultation")}
                        className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/80 border border-[#D4AF37]/40 text-[#F9F4E8] focus:outline-none focus:border-[#D4AF37] text-sm transition-all cursor-pointer"
                      >
                        <option value="Online Video/Phone Consultation" className="bg-[#6A1B1A]">Online (Phone/Video Call)</option>
                        <option value="Offline Center Visit - Petlad" className="bg-[#6A1B1A]">Offline Center (Petlad, Anand)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#F3E5AB] mb-1">
                      Primary Problem / Service Category
                    </label>
                    <select
                      {...register("problemCategory")}
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/80 border border-[#D4AF37]/40 text-[#F9F4E8] focus:outline-none focus:border-[#D4AF37] text-sm transition-all cursor-pointer"
                    >
                      <option value="Marriage & Kundali Matching" className="bg-[#6A1B1A]">❤️ Marriage & Kundali Matching</option>
                      <option value="Financial & Debt Problems" className="bg-[#6A1B1A]">💰 Financial & Debt Problems</option>
                      <option value="Career & Business Growth" className="bg-[#6A1B1A]">💼 Career & Business Growth</option>
                      <option value="Vastu Consultation (Home/Office)" className="bg-[#6A1B1A]">🏡 Vastu Consultation (Home/Office)</option>
                      <option value="Gemstone & Rudraksha Selection" className="bg-[#6A1B1A]">💎 Gemstone & Rudraksha Selection</option>
                      <option value="Relationship & Family Issues" className="bg-[#6A1B1A]">👨‍👩‍👧 Relationship & Family Issues</option>
                      <option value="Lal Kitab & Karmic Remedies" className="bg-[#6A1B1A]">📜 Lal Kitab & Karmic Remedies</option>
                      <option value="Foreign Travel / Court Matters" className="bg-[#6A1B1A]">✈️ Foreign Travel / Court Matters</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#F3E5AB] mb-1">
                      Birth Details <span className="text-xs font-normal text-[#F3E5AB]/70">(Optional, or share during call)</span>
                    </label>
                    <input
                      type="text"
                      {...register("birthDetails")}
                      placeholder="DD/MM/YYYY, Exact Time (AM/PM), Place of Birth"
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/80 border border-[#D4AF37]/40 text-[#F9F4E8] placeholder-[#F9F4E8]/40 focus:outline-none focus:border-[#D4AF37] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#F3E5AB] mb-1">
                      Your Message / Question
                    </label>
                    <textarea
                      rows={3}
                      {...register("message")}
                      placeholder="Briefly describe what you would like to know..."
                      className="w-full px-4 py-3 rounded-xl bg-[#4E1212]/80 border border-[#D4AF37]/40 text-[#F9F4E8] placeholder-[#F9F4E8]/40 focus:outline-none focus:border-[#D4AF37] text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#B8860B] text-[#2E2A26] font-['Cinzel',serif] font-bold text-base shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] transition-all flex items-center justify-center gap-2 transform active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Connecting...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-[#6A1B1A]" />
                        <span>Confirm Consultation Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#F3E5AB]/70 mt-2">
                    🔒 By clicking submit, our senior consultant will reach out via WhatsApp / Phone to confirm your appointment slot.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] text-[#D4AF37] mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="font-['Cinzel',serif] text-2xl font-bold text-gradient-gold mb-2">
                      Request Received Successfully!
                    </h4>
                    <p className="text-sm text-[#F9F4E8]/90 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#D4AF37] font-semibold">{formData.name}</span>. Our Vedic Astrology Center in Petlad has recorded your inquiry for <span className="underline">{formData.problemCategory}</span>.
                    </p>
                  </div>

                  <div className="bg-[#4E1212]/90 border border-[#D4AF37]/30 rounded-2xl p-4 text-xs text-left space-y-2">
                    <div className="flex items-center justify-between text-[#F3E5AB]">
                      <span>Contact Number:</span>
                      <span className="font-semibold">{formData.phone}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#F3E5AB]">
                      <span>Preferred Mode:</span>
                      <span className="font-semibold">{formData.preferredConsultation}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleOpenWhatsApp}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-102"
                    >
                      <Send className="w-4 h-4" />
                      Instant WhatsApp Connect
                    </button>
                    <button
                      onClick={handleClose}
                      className="py-3 px-6 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2E2A26] font-semibold text-sm transition-all"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
