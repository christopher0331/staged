"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { homeData } from "../data";

export function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const partnersPerSlide = 6;
  const totalSlides = Math.ceil(homeData.partners.length / partnersPerSlide);

  // Auto-rotate slides every 5 seconds (only when modal is closed)
  useEffect(() => {
    if (isModalOpen) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides, isModalOpen]);

  // Handle modal keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Handle click outside modal to close
  useEffect(() => {
    if (!isModalOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Modal controls
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Get partners for the current slide
  const currentPartners = homeData.partners.slice(
    currentSlide * partnersPerSlide,
    (currentSlide + 1) * partnersPerSlide
  );

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Working together with leading organizations to advance LMS research and patient care
          </p>
        </div>
        
        <div className="relative bg-white rounded-xl shadow-md p-6 md:p-8 mb-4">
          {/* Carousel Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center">
            {currentPartners.map((partner, index) => (
              <a
                key={currentSlide * partnersPerSlide + index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-20 w-full transition-all hover:scale-105"
                aria-label={partner.name}
              >
                <div className="relative h-16 w-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-16 max-w-full"
                    unoptimized={true}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-6">
          <button 
            onClick={openModal}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium bg-transparent border-0 cursor-pointer"
          >
            View all our partners and collaborators
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* All Partners Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="partners-modal-title"
          >
            <div className="p-6 flex justify-between items-center border-b">
              <h3 id="partners-modal-title" className="text-2xl font-bold text-gray-900">All Partners & Collaborators</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
                {homeData.partners.map((partner, index) => (
                  <a
                    key={index}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all w-full h-32"
                    aria-label={partner.name}
                  >
                    <div className="relative h-20 w-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={130}
                        height={70}
                        className="object-contain max-h-20 max-w-full"
                        unoptimized={true}
                      />
                    </div>
                    <span className="mt-2 text-xs text-gray-600 text-center truncate w-full">{partner.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t flex justify-end">
              <button 
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
