import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ayşe K.',
      role: 'Gelin',
      content: 'Hayalimdeki gelinliği buldum! Mükemmel işçilik ve harika bir deneyimdi. Tüm ekibe teşekkürler!',
      rating: 5,
      image: '/images/testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'Zeynep T.',
      role: 'Gelin',
      content: 'Güler yüzlü personeli ve kaliteli hizmet anlayışları için teşekkürler. Herkese gönül rahatlığıyla tavsiye ederim.',
      rating: 5,
      image: '/images/testimonial-2.jpg'
    },
    {
      id: 3,
      name: 'Elif S.',
      role: 'Gelin',
      content: 'Özel tasarım gelinliğim için harika bir iş çıkardılar. İlgi ve özenleri için çok teşekkür ederim.',
      rating: 4,
      image: '/images/testimonial-3.jpg'
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} inline-block`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">Mutlu Gelinlerimiz</h2>
          <div className="w-20 h-1 bg-rose-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Müşterilerimizin deneyimlerini ve düşüncelerini keşfedin. Siz de ailemizin bir parçası olun.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-rose-300 text-4xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mb-1">{testimonial.role}</p>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-rose-300 hover:bg-rose-400 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
            Tüm Yorumları Gör
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
