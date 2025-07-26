import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaPinterest />, url: '#' },
  ];

  const quickLinks = [
    { name: 'Gizlilik Politikası', url: '#' },
    { name: 'Kullanım Koşulları', url: '#' },
    { name: 'İade Politikası', url: '#' },
    { name: 'Sıkça Sorulan Sorular', url: '#' },
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="col-span-1">
            <h3 className="text-xl font-playfair font-bold text-rose-300 mb-4">Sevgilim Gelinlik</h3>
            <p className="text-sm mb-4">
              En özel gününüz için şık ve zarif gelinliklerimizle yanınızdayız. Hayalinizdeki gelinliği bulmanız için buradayız.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-600 hover:text-rose-300 transition-colors duration-300 text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-sm hover:text-rose-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Modeller</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-rose-300 transition-colors duration-300">2025 Koleksiyonu</a></li>
              <li><a href="#" className="text-sm hover:text-rose-300 transition-colors duration-300">Özel Tasarımlar</a></li>
              <li><a href="#" className="text-sm hover:text-rose-300 transition-colors duration-300">Gelinlik Modelleri</a></li>
              <li><a href="#" className="text-sm hover:text-rose-300 transition-colors duration-300">Aksesuarlar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-rose-300 mt-1 mr-3" />
                <span className="text-sm">Örnek Mah. Gelinlik Cad. No:123<br />İstanbul / Türkiye</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-rose-300 mr-3" />
                <span className="text-sm">+90 555 123 45 67</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-rose-300 mr-3" />
                <span className="text-sm">info@bridalelegance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} BridalElegance. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <img src="/images/payment-methods.png" alt="Ödeme Yöntemleri" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
