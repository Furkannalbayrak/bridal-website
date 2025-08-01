import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import AllCollection from './AllCollection'

const DressModelsDropdown = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const dressCategories = [
    {
      title: 'Etek Tipi',
      category: 'etek-tipi',
      models: [
        { name: 'Prenses Gelinlik', slug: 'prenses' },
        { name: 'A kesim Gelinlik', slug: 'a-kesim' },
        { name: 'Helen Gelinlik', slug: 'helen' },
        { name: 'Balık Gelinlik', slug: 'balik' },
        { name: 'Kısa Gelinlik', slug: 'kisa' },
        { name: 'Kabarık Gelinlik', slug: 'kabarik' },
      ]
    },
    {
      title: 'Yaka Tipi',
      category: 'yaka-tipi',
      models: [
        { name: 'Kayık Yaka Gelinlik', slug: 'kayik-yaka' },
        { name: 'Hakim Yaka Gelinlik', slug: 'hakim-yaka' },
        { name: 'V Yaka Gelinlik', slug: 'v-yaka' },
        { name: 'Kalp Yaka Gelinlik', slug: 'kalp-yaka' },
        { name: 'Askılı Gelinlik', slug: 'askili' },
        { name: 'Kare Yaka Gelinlik', slug: 'kare-yaka' },
        { name: 'Omuz Açık Gelinlik', slug: 'omuz-acik' },
      ]
    },
    {
      title: 'Kol Tipi',
      category: 'kol-tipi',
      models: [
        { name: 'Uzun Kollu Gelinlik', slug: 'uzun-kollu' },
        { name: 'Yarım Kollu Gelinlik', slug: 'yarim-kollu' },
        { name: 'Balon Kollu Gelinlik', slug: 'balon-kollu' },
        { name: 'Tek Omuz Gelinlik', slug: 'tek-omuz' },
        { name: 'Düşük Omuz Gelinlik', slug: 'dusuk-omuz' },
        { name: 'Kolsuz/Sıfır Kollu Gelinlik', slug: 'kolsuz' },
      ]
    },
    {
      title: 'Kumaş',
      category: 'kumas',
      models: [
        { name: 'Dantelli Gelinlik', slug: 'dantelli' },
        { name: 'Tül Gelinlik', slug: 'tul' },
        { name: 'Saten Gelinlik', slug: 'saten' },
        { name: 'Fransız Dantelli Gelinlik', slug: 'fransiz-dantelli' },
        { name: 'Şifon Gelinlik', slug: 'sifon' },
        { name: 'Simli Gelinlik', slug: 'simli' },
      ]
    },
    {
      title: 'Tarzlar / Konseptler',
      category: 'tarzlar',
      models: [
        { name: 'Bohem Gelinlik', slug: 'bohem' },
        { name: 'Vintage Gelinlik', slug: 'vintage' },
        { name: 'Sade Gelinlik', slug: 'sade' },
        { name: 'Zarif Gelinlik', slug: 'zarif' },
        { name: 'Modern Gelinlik', slug: 'modern' },
      ]
    }
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    etekTipi: [],
    yakaTipi: [],
    kolTipi: [],
    kumas: [],
    konsept: []
  });


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
                  <h4 className="font-semibold text-lg text-rose-700 mb-4 pb-2 border-b border-gray-200">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.models.map((model, modelIndex) => (
                      <li key={modelIndex} className="mb-2">
                        <Link
                          to={`/tum-gelinlik-modelleri/${category.category}/${model.slug}`}
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
                to="/tum-gelinlik-modelleri"
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
      title: 'Etek Tipi',
      category: 'etek-tipi',
      models: [
        { name: 'Prenses Gelinlik', slug: 'prenses' },
        { name: 'A kesim Gelinlik', slug: 'a-kesim' },
        { name: 'Helen Gelinlik', slug: 'helen' },
        { name: 'Balık Gelinlik', slug: 'balik' },
        { name: 'Kısa Gelinlik', slug: 'kisa' },
        { name: 'Kabarık Gelinlik', slug: 'kabarik' },
      ]
    },
    {
      title: 'Yaka Tipi',
      category: 'yaka-tipi',
      models: [
        { name: 'Kayık Yaka Gelinlik', slug: 'kayik-yaka' },
        { name: 'Hakim Yaka Gelinlik', slug: 'hakim-yaka' },
        { name: 'V Yaka Gelinlik', slug: 'v-yaka' },
        { name: 'Kalp Yaka Gelinlik', slug: 'kalp-yaka' },
        { name: 'Askılı Gelinlik', slug: 'askili' },
        { name: 'Kare Yaka Gelinlik', slug: 'kare-yaka' },
        { name: 'Omuz Açık Gelinlik', slug: 'omuz-acik' },
      ]
    },
    {
      title: 'Kol Tipi',
      category: 'kol-tipi',
      models: [
        { name: 'Uzun Kollu Gelinlik', slug: 'uzun-kollu' },
        { name: 'Yarım Kollu Gelinlik', slug: 'yarim-kollu' },
        { name: 'Balon Kollu Gelinlik', slug: 'balon-kollu' },
        { name: 'Tek Omuz Gelinlik', slug: 'tek-omuz' },
        { name: 'Düşük Omuz Gelinlik', slug: 'dusuk-omuz' },
        { name: 'Kolsuz/Sıfır Kollu Gelinlik', slug: 'kolsuz' },
      ]
    },
    {
      title: 'Kumaş',
      category: 'kumas',
      models: [
        { name: 'Dantelli Gelinlik', slug: 'dantelli' },
        { name: 'Tül Gelinlik', slug: 'tul' },
        { name: 'Saten Gelinlik', slug: 'saten' },
        { name: 'Fransız Dantelli Gelinlik', slug: 'fransiz-dantelli' },
        { name: 'Şifon Gelinlik', slug: 'sifon' },
        { name: 'Simli Gelinlik', slug: 'simli' },
      ]
    },
    {
      title: 'Tarzlar / Konseptler',
      category: 'tarzlar',
      models: [
        { name: 'Bohem Gelinlik', slug: 'bohem' },
        { name: 'Vintage Gelinlik', slug: 'vintage' },
        { name: 'Sade Gelinlik', slug: 'sade' },
        { name: 'Zarif Gelinlik', slug: 'zarif' },
        { name: 'Modern Gelinlik', slug: 'modern' },
      ]
    }
  ];

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between py-3 text-gray-700 hover:text-rose-300 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">Gelinlik Modelleri</span>
        {isOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
      </div>

      {isOpen && (
        <div className="w-full py-2 pl-4 pr-2 bg-white">
          {dressCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-2">
              <div
                className="flex transition duration-100 items-center justify-between py-2 px-2 text-gray-700 hover:bg-rose-50 font-medium cursor-pointer"
                onClick={() => {
                  const newOpenCategories = [...openCategories];
                  newOpenCategories[catIndex] = !newOpenCategories[catIndex];
                  setOpenCategories(newOpenCategories);
                }}
              >
                <span>{category.title}</span>
                {openCategories[catIndex] ?
                  <FaChevronUp className="text-xs" /> :
                  <FaChevronDown className="text-xs" />
                }
              </div>

              {openCategories[catIndex] && (
                <div className="ml-3 border-l-2 border-gray-100 pl-3 py-1">
                  {category.models.map((model, modelIndex) => (
                    <Link
                      key={modelIndex}
                      to={`/tum-gelinlik-modelleri/${category.category}/${model.slug}`}
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
              to="tum-gelinlik-modelleri"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setIsOverlayVisible(true);
      // Small delay to allow the overlay to be rendered before showing the menu
      setTimeout(() => setIsMenuVisible(true), 10);
    } else {
      setIsMenuVisible(false);
      // Wait for the menu to slide out before hiding the overlay
      setTimeout(() => {
        setIsOverlayVisible(false);
        // Small delay before resetting the menu state
        setTimeout(() => setIsMenuOpen(false), 300);
      }, 300);
    }
  };

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
          <div className="absolute left-5 lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-rose-300 focus:outline-none "
            >
              {<RxHamburgerMenu size={24} />}

            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Dark overlay with fade effect */}
            <div
              className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ${isOverlayVisible ? 'opacity-50' : 'opacity-0'
                }`}
              onClick={toggleMenu}
            />

            {/* Mobile menu panel with slide-in effect */}
            <div
              className={`fixed top-0 left-0 h-full w-96 bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out overflow-y-auto ${isMenuVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
              style={{ zIndex: 50 }}
            >
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name} className="w-full border-b border-gray-200">
                      {link.name === 'Gelinlik Modelleri' ? (
                        <MobileDressModels onClose={toggleMenu} />
                      ) : (
                        <Link
                          to={link.path}
                          className="block py-3 text-gray-700 hover:text-rose-400 transition-colors duration-200 text-lg"
                          onClick={toggleMenu}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
