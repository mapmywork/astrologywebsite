import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Problems from '../components/Problems/Problems';
import Remedies from '../components/Remedies/Remedies';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import ConsultationProcess from '../components/Consultation/ConsultationProcess';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';

const Home = ({ onOpenConsultation }) => {
  return (
    <main className="w-full">
      <Hero onOpenConsultation={() => onOpenConsultation("General Hero Consultation")} />
      <About onOpenConsultation={() => onOpenConsultation("About Section Consultation")} />
      <Services onOpenConsultation={onOpenConsultation} />
      <Problems onOpenConsultation={onOpenConsultation} />
      <Remedies onOpenConsultation={onOpenConsultation} />
      <WhyChooseUs onOpenConsultation={() => onOpenConsultation("Why Choose Us Inquiry")} />
      <ConsultationProcess onOpenConsultation={onOpenConsultation} />
      <Testimonials />
      <FAQ />
      <Contact onOpenConsultation={() => onOpenConsultation("Contact Section Inquiry")} />
    </main>
  );
};

export default Home;
