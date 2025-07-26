import React from 'react';
import { FaTruck, FaMedal, FaHeart, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaTruck className="text-3xl text-rose-400" />,
      title: 'Özel Tasarım',
      description: 'Size özel tasarlanmış gelinlik modelleri ve kişiselleştirme seçenekleri'
    },
    {
      icon: <FaMedal className="text-3xl text-rose-400" />,
      title: 'Ölçü & Prova',
      description: 'Profesyonel ölçü alımı ve detaylı prova süreçleriyle mükemmel uyum'
    },
    {
      icon: <FaHeart className="text-3xl text-rose-400" />,
      title: 'Kişisel Danışmanlık',
      description: 'Uzman Ekibimizden kişiselleştirilmiş stil danışmanlık hizmeti'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-11/12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
