import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DressModelsDropdown = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const dressCategories = [
    {
      title: 'Etep Tipi',
      models: [
        { name: 'Prenses Gelinlik', path: '/gelinlik-modelleri/prenses' },
        { name: 'A kesim Gelinlik', path: '/gelinlik-modelleri/A-kesim' },
        { name: 'Helen Gelinlik', path: '/gelinlik-modelleri/helen' },
        { name: 'Balık Gelinlik', path: '/gelinlik-modelleri/balik' },
        { name: 'Kısa Gelinlik', path: '/gelinlik-modelleri/kisa' },
        { name: 'Kabarık Gelinlik', path: '/gelinlik-modelleri/Kabarik' },
      ]
    },
    {
      title: 'Yaka Tipi',
      models: [
        { name: 'Kayık Yaka Gelinlik', path: '/gelinlik-modelleri/kayik-yaka' },
        { name: 'Hakim Yaka Gelinlik', path: '/gelinlik-modelleri/hakim-yaka' },
        { name: 'V Yaka Gelinlik', path: '/gelinlik-modelleri/V-yaka' },
        { name: 'Kalp Yaka Gelinlik', path: '/gelinlik-modelleri/kalp-yaka' },
        { name: 'Kare Yaka Gelinlik', path: '/gelinlik-modelleri/kare-yaka' },
      ]
    },
    {
      title: 'Kol Tipi',
      models: [
        { name: 'Uzun Kollu Gelinlik', path: '/gelinlik-modelleri/uzun-kollu' },
        { name: 'Balon Kol Gelinlik', path: '/gelinlik-modelleri/balon-kol' },
        { name: 'Tek Omuz Gelinlik', path: '/gelinlik-modelleri/tek-omuz' },
        { name: 'Düşük Omuz Gelinlik', path: '/gelinlik-modelleri/dusuk-omuz' },
        { name: 'Kolsun/Sıfır Kol Gelinlik', path: '/gelinlik-modelleri/sifir-kol' },
      ]
    },
    {
      title: 'Kumaş',
      models: [
        { name: 'Dantelli Gelinlik', path: '/gelinlik-modelleri/ozel-kesim' },
        { name: 'Tül Gelinlik', path: '/gelinlik-modelleri/el-isi' },
        { name: 'Saten Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Fransız Dantelli Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Şifon Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Simli Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
      ]
    },
    {
      title: 'Tarzlar',
      models: [
        { name: 'Bohem Gelinlik', path: '/gelinlik-modelleri/ozel-kesim' },
        { name: 'Vintage Gelinlik', path: '/gelinlik-modelleri/el-isi' },
        { name: 'Sade Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Zarif Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Modern Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Sade Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },

      ]
    }
  ];


  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex items-center gap-1 text-xl font-sans transition-all duration-300 cursor-pointer text-gray-700 hover:text-rose-300 group`}
      >
        Gelinlik Modelleri
        <FaChevronDown className={`text-sm mt-1 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div
          className="fixed left-0 right-0 mt-4 bg-white shadow-xl z-50"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-5 gap-8">
              {dressCategories.map((category, index) => (
                <div key={index} className="p-4">
                  <h4 className="font-semibold text-lg text-rose-700 mb-4 pb-2 border-b border-gray-200">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.models.map((model, modelIndex) => (
                      <li key={modelIndex} className="mb-2">
                        <Link
                          to={model.path}
                          className="block py-2 px-3 text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {model.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                to="tum-gelinlik-modelleri"
                className="inline-block py-3 px-8 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tüm Modelleri Gör
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};





const MobileDressModels = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState(Array(5).fill(false)); // 5 kategori için başlangıç değeri

  const dressCategories = [
    {
      title: 'Etep Tipi',
      models: [
        { name: 'Prenses Gelinlik', path: '/gelinlik-modelleri/saten' },
        { name: 'A kesim Gelinlik', path: '/gelinlik-modelleri/dantel' },
        { name: 'Helen Gelinlik', path: '/gelinlik-modelleri/tul' },
        { name: 'Balık Gelinlik', path: '/gelinlik-modelleri/tul' },
        { name: 'Kısa Gelinlik', path: '/gelinlik-modelleri/tul' },
        { name: 'Kabarık Gelinlik', path: '/gelinlik-modelleri/tul' },
      ]
    },
    {
      title: 'Yaka Tipi',
      models: [
        { name: 'Kayık Yaka Gelinlik', path: '/gelinlik-modelleri/uzun-kollu' },
        { name: 'Hakim Yaka Gelinlik', path: '/gelinlik-modelleri/islemeli' },
        { name: 'V Yaka Gelinlik', path: '/gelinlik-modelleri/prenses' },
        { name: 'Kalp Yaka Gelinlik', path: '/gelinlik-modelleri/prenses' },
        { name: 'Kare Yaka Gelinlik', path: '/gelinlik-modelleri/prenses' },
        { name: 'V Yaka Gelinlik', path: '/gelinlik-modelleri/prenses' },
      ]
    },
    {
      title: 'Kol Tipi',
      models: [
        { name: 'Uzun Kollu Gelinlik', path: '/gelinlik-modelleri/ozel-kesim' },
        { name: 'Balon Kol Gelinlik', path: '/gelinlik-modelleri/el-isi' },
        { name: 'Tek Omuz Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Düşük Omuz Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Kolsun/Sıfır Kol Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Tek Omuz Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },

      ]
    },
    {
      title: 'Kumaş',
      models: [
        { name: 'Dantelli Gelinlik', path: '/gelinlik-modelleri/ozel-kesim' },
        { name: 'Tül Gelinlik', path: '/gelinlik-modelleri/el-isi' },
        { name: 'Saten Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Fransız Dantelli Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Şifon Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Simli Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },

      ]
    },
    {
      title: 'Tarzlar',
      models: [
        { name: 'Bohem Gelinlik', path: '/gelinlik-modelleri/ozel-kesim' },
        { name: 'Vintage Gelinlik', path: '/gelinlik-modelleri/el-isi' },
        { name: 'Sade Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Zarif Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Modern Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },
        { name: 'Sade Gelinlik', path: '/gelinlik-modelleri/sifir-beden' },

      ]
    }
  ];

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between py-2 text-gray-700 hover:text-rose-300 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Gelinlik Modelleri</span>
        {isOpen ? <FaChevronUp className="text-sm absolute left-40" /> : <FaChevronDown className="text-sm absolute left-40" />}
      </div>

      {isOpen && (
        <div className="w-full py-2 pl-4 pr-2 bg-white">
          {dressCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-2">
              <div 
                className="flex items-center justify-between py-2 px-2 text-gray-700 font-medium cursor-pointer"
                onClick={() => {
                  const newOpenCategories = [...openCategories];
                  newOpenCategories[catIndex] = !newOpenCategories[catIndex];
                  setOpenCategories(newOpenCategories);
                }}
              >
                <span>{category.title}</span>
                {openCategories[catIndex] ? 
                  <FaChevronUp className="text-xs absolute left-32" /> : 
                  <FaChevronDown className="text-xs absolute left-32" />
                }
              </div>
              
              {openCategories[catIndex] && (
                <div className="ml-3 border-l-2 border-gray-100 pl-3 py-1">
                  {category.models.map((model, modelIndex) => (
                    <Link
                      key={modelIndex}
                      to={model.path}
                      className="block py-2 px-2 text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors text-sm"
                      onClick={() => onClose()}
                    >
                      {model.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-4 pt-3 border-t border-gray-100">
            <Link
              to="/gelinlik-modelleri/tum-modeller"
              className="block w-full py-2 px-4 text-center bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors text-sm font-medium"
              onClick={() => onClose()}
            >
              Tüm Modelleri Gör
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};






const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Gelinlik Modelleri', path: '/tum-gelinlik-modelleri' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 pt-3">
        <div className="flex gap-40 items-center justify-center lg:justify-normal mx-auto">
          {/* Logo */}
          <div className="text-4xl font-dancing tracking-wider text-rose-500 hover:text-rose-400 transition-colors duration-300">
            <Link to="/" className="hover:no-underline">Sevgilim Gelinlik</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.name === 'Gelinlik Modelleri' ? (
                  <DressModelsDropdown isScrolled={true} />
                ) : (
                  <Link
                    to={link.path}
                    className="text-xl font-sans text-gray-700 hover:text-rose-300 transition-colors duration-300 relative"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="absolute left-5 lg:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-300 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white lg:hidden pl-8 pr-8 py-10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full border-b border-gray-300">
                  {link.name === 'Gelinlik Modelleri' ? (
                    <MobileDressModels onClose={() => setIsOpen(false)} />
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-2 text-gray-700 hover:text-rose-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
