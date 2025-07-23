import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const Hero = () => {

  const [bgIndex, setBgIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1622277430358-f4d134452e2e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502955422409-06e43fd3eff3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705288840070-6a879b431033?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1578317767641-c2a23b16b814?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599142296733-1c1f2073e6de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596181243306-e02a1897afb1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative pt-20 h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${images[bgIndex]})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Hayalinizdeki Gelinliği Keşfedin</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Özel gününüz için tasarlanmış zarif ve şık gelinlik koleksiyonumuzu inceleyin.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/koleksiyon"
            className="bg-rose-300 hover:bg-rose-400 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Koleksiyonu Gör
          </Link>
          <Link
            to="/randevu"
            className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-20 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Randevu Al
          </Link>
        </div>
      </div>

      {/* Aşağı ok ikonu */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
