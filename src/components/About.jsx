import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Resim Bölümü */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <div className="relative">
              <img 
                src="/images/about-1.jpg" 
                alt="Hakkımızda" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-center">
                  <span className="text-4xl font-playfair font-bold text-rose-300 block">10+</span>
                  <span className="text-gray-600">Yıllık Deneyim</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* İçerik Bölümü */}
          <div className="lg:w-1/2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-6">Hikayemiz ve Misyonumuz</h2>
              <div className="w-20 h-1 bg-rose-300 mb-6"></div>
              
              <p className="text-gray-600 mb-6">
                2010 yılında İstanbul'da kurulan BridalElegance, gelinlik sektöründe yeni bir soluk getirmek amacıyla yola çıktı. 
                O günden bu yana binlerce mutlu gelinin hayallerini süsleyen gelinlikleri tasarladık.
              </p>
              
              <p className="text-gray-600 mb-8">
                Misyonumuz, her gelinin kendini özel ve güzel hissedeceği, unutulmaz bir gün yaşamasını sağlamak. 
                Uzman ekibimizle birlikte, en son moda trendlerini takip ederek, kaliteli kumaşlar ve işçilikle özel tasarımlar üretiyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Özel Tasarım</h4>
                    <p className="text-sm text-gray-600">Hayalinizdeki gelinliği birlikte tasarlayalım</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Uzman Ekip</h4>
                    <p className="text-sm text-gray-600">Deneyimli tasarımcılarımızla hizmetinizdeyiz</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Kaliteli Kumaşlar</h4>
                    <p className="text-sm text-gray-600">En iyi kalite malzemeler kullanıyoruz</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Müşteri Memnuniyeti</h4>
                    <p className="text-sm text-gray-600">%100 müşteri memnuniyeti garantisi</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/hakkimizda" 
                className="inline-block bg-rose-300 hover:bg-rose-400 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
