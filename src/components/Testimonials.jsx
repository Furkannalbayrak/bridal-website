import React, { useState, useEffect, useCallback } from 'react';
import { FaQuoteLeft, FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ayşe Yılmaz',
      role: 'Gelin',
      content: 'Harika bir deneyimdi! Hayalimdeki gelinliği buldum ve mükemmel bir gün geçirdim.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Mehmet Demir',
      role: 'Damat',
      content: 'Eşim için mükemmel bir gelinlik seçtik. İlgi ve alakanız için teşekkürler.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Zeynep Kaya',
      role: 'Gelin',
      content: 'Profesyonel ekibiniz sayesinde hayalimdeki günü yaşadım. Teşekkürler!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 4,
      name: 'Elif Şahin',
      role: 'Gelin',
      content: 'Mükemmel bir hizmet ve harika bir ekip. Herkese tavsiye ederim!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 5,
      name: 'Ahmet Yıldız',
      role: 'Damat',
      content: 'Eşimin hayalindeki gelinliği bulmasına yardımcı olduğunuz için teşekkürler.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 6,
      name: 'Selin Demir',
      role: 'Gelin',
      content: 'İnanılmaz bir deneyimdi. Her şey için çok teşekkürler!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
      id: 7,
      name: 'Berkay Korkmaz',
      role: 'Damat',
      content: 'Profesyonel yaklaşımları için teşekkürler. Her şey mükemmeldi!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      id: 8,
      name: 'Deniz Arslan',
      role: 'Gelin',
      content: 'İlk görüşte aşık olduğum bir gelinlik buldum. Teşekkürler!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
      id: 9,
      name: 'Cem Yılmaz',
      role: 'Damat',
      content: 'Eşim çok mutlu oldu, ben de onun mutluluğuyla mutlu oldum. Teşekkürler!',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/29.jpg'
    },
    {
      id: 10,
      name: 'Sude Nur',
      role: 'Gelin',
      content: 'Hayalimdeki gün için mükemmel bir gelinlik seçtim. Herkese tavsiye ederim!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/33.jpg'
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = 3; // 9 testimonials / 3 per page

  // Pagination functions
  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  // Auto-advance pages
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextPage]);

  // Calculate which testimonials to show
  const startIndex = currentPage * testimonialsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      i < rating ? 
        <FaStar key={i} className="text-yellow-400" /> : 
        <FaRegStar key={i} className="text-gray-300" />
    ));
  };



  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4 tracking-wide">Mutlu Gelinlerimiz</h2>
          <div className="w-72 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-6"></div>
        </div>

        <div className="relative px-16">
          <div className="flex justify-between items-center gap-6">
            <button 
              onClick={prevPage}
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors duration-300 z-10"
              aria-label="Önceki sayfa"
            >
              <FaChevronLeft className="text-rose-400 text-xl" />
            </button>

            <div className="flex-1 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                      <div className="text-rose-300 text-3xl mb-3">
                        <FaQuoteLeft />
                      </div>
                      <p className="text-gray-600 italic mb-4 text-md">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-gray-500 mb-1">{testimonial.role}</p>
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextPage}
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors duration-300 z-10"
              aria-label="Sonraki sayfa"
            >
              <FaChevronRight className="text-rose-400 text-xl" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-rose-400 w-6' : 'bg-rose-200 w-3'
              }`}
              aria-label={`${index + 1}. sayfa`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
