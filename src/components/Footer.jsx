import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaTwitter   } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Kategoriye göre gruplanmış gelinlik modelleri
  const dressCategories = [
    { name: 'Prenses Kesim', url: '/koleksiyon?kategori=prenses-kesim' },
    { name: 'Balık Sırtı', url: '/koleksiyon?kategori=balik-sirti' },
    { name: 'A-Line', url: '/koleksiyon?kategori=a-line' },
    { name: 'Uzun Kollu', url: '/koleksiyon?kategori=uzun-kollu' },
    { name: 'Etek-Ceket', url: '/koleksiyon?kategori=etek-ceket' },
    { name: 'İndirimdeki Modeller', url: '/koleksiyon?indirimde=true' },
  ];
  
  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaWhatsapp />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
  ];

  const quickLinks = [
    { name: 'Anasayfa', url: '/' },
    { name: 'Gelinlik Modelleri', url: '#' },
    { name: 'Hakkımızda', url: '#' },
    { name: 'İletişim', url: '#' },
  ];

  return (
    <footer className="bg-rose-50 text-gray-700 pt-12 pb-8">
      <div className="container px-8 md:mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-8 justify-between">
          {/* About */}
          <div className="lg:ml-20 md:ml-10">
            <h3 className="text-2xl font-playfair font-bold text-rose-300 mb-4">Sevgilim Gelinlik</h3>
            <p className="text-md mb-4">
              En özel gününüz için şık ve zarif gelinliklerimizle yanınızdayız. Hayalinizdeki gelinliği bulmanız için buradayız.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-600 hover:text-rose-300 transition-colors duration-300 text-3xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kategorize Gelinlik Modelleri */}
          <div className=' md:text-center'>
            <h4 className="font-semibold text-lg text-gray-800 mb-4">Modeller</h4>
            <ul className="space-y-1">
              {dressCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.url}
                    className="text-sm hover:text-rose-300 transition-colors duration-300 block py-1"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='xl:ml-20 lg:ml-10 md:ml-4'>
            <h4 className="font-semibold text-lg text-gray-800 mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-rose-400 mt-1 mr-3 text-2xl" />
                <span className="text-sm">Örnek Mah. Gelinlik Cad. No:123<br />İstanbul / Türkiye</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-rose-400 mr-3 text-2xl" />
                <span className="text-sm">+90 555 123 45 67</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-rose-400 mr-3 text-2xl" />
                <span className="text-sm">info@bridalelegance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-gray-500 md:mb-0">
              &copy; {currentYear} Sevgilim Gelinlik. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
