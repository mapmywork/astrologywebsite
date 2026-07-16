import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import FloatingButtons from './components/Common/FloatingButtons';
import ConsultationModal from './components/Common/ConsultationModal';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");

  const handleOpenModal = (serviceName = "") => {
    setModalService(typeof serviceName === 'string' ? serviceName : "");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalService("");
  };

  return (
    <Router>
      <div className="app-container bg-[#F9F4E8] text-[#2E2A26] min-h-screen flex flex-col font-['Inter',sans-serif]">
        {/* Sticky Header */}
        <Navbar onOpenConsultation={handleOpenModal} />

        {/* Main Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={handleOpenModal} />} />
          </Routes>
        </div>

        {/* Luxury Footer */}
        <Footer onOpenConsultation={handleOpenModal} />

        {/* Floating Quick Action Widgets */}
        <FloatingButtons onOpenConsultation={handleOpenModal} />

        {/* Global Consultation Booking Modal */}
        <ConsultationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialService={modalService}
        />
      </div>
    </Router>
  );
}

export default App;
