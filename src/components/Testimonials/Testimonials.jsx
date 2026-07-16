import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SectionHeading from '../Common/SectionHeading';
import { TESTIMONIALS_DATA } from '../../constants/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-[#F9F4E8] text-[#2E2A26] overflow-hidden">
      {/* Background Mandala Accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6A1B1A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Client Transformations"
          title="What Our Clients Say"
          subtitle="Discover real stories from families, business owners, and professionals across Gujarat and abroad whose lives transformed through our Vedic guidance."
        />

        {/* Swiper JS Glassmorphic Carousel */}
        <div className="relative px-2 sm:px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {TESTIMONIALS_DATA.map((review, index) => (
              <SwiperSlide key={review.name} className="h-auto flex">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/35 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full w-full relative"
                >
                  {/* Top Quote Icon */}
                  <div className="absolute top-6 right-6 text-[#D4AF37]/25">
                    <Quote className="w-10 h-10 transform rotate-180" />
                  </div>

                  <div>
                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                      ))}
                      <span className="text-xs font-semibold text-[#6A1B1A] ml-2">5.0 Verified</span>
                    </div>

                    {/* Comment Body */}
                    <p className="text-xs sm:text-sm text-[#2E2A26]/85 leading-relaxed font-light italic relative z-10">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Client Profile Footer */}
                  <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Cinzel',serif] font-bold text-sm sm:text-base text-[#6A1B1A] truncate">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-[#2E2A26]/60">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        <span>{review.location}</span>
                      </div>
                    </div>
                    <div title="Verified Consultation" className="p-1 rounded-full bg-[#25D366]/15 text-[#25D366]">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Styling for Swiper Pagination & Navigation */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .swiper-pagination-bullet {
              background: #6A1B1A !important;
              opacity: 0.3 !important;
              width: 10px !important;
              height: 10px !important;
            }
            .swiper-pagination-bullet-active {
              background: #D4AF37 !important;
              opacity: 1 !important;
              width: 24px !important;
              border-radius: 6px !important;
            }
            .swiper-button-prev, .swiper-button-next {
              color: #6A1B1A !important;
              width: 36px !important;
              height: 36px !important;
              background: rgba(212, 175, 55, 0.25) !important;
              border-radius: 50% !important;
              border: 1px solid #D4AF37 !important;
            }
            .swiper-button-prev:after, .swiper-button-next:after {
              font-size: 14px !important;
              font-weight: bold !important;
            }
            .swiper-button-prev:hover, .swiper-button-next:hover {
              background: #6A1B1A !important;
              color: #D4AF37 !important;
            }
          `
        }} />
      </div>
    </section>
  );
};

export default Testimonials;
