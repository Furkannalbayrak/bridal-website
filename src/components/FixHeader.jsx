import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Gelinlik Modelleri', path: '/gelinlik-modelleri' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-40 items-center mx-auto">
          {/* Logo */}
          <div className="text-4xl font-dancing tracking-wider text-rose-500 hover:text-rose-400">
            <Link to="/" className="hover:no-underline">Sevgilim Gelinlik</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className="text-xl font-sans text-gray-700 group-hover:text-rose-300"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-rose-300 py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
