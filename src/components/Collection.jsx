import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Collection = () => {
  // Koleksiyon kategorileri
  const categories = [
    'Tümü',
    'Prenses Kesim',
    'Balık Sırtı',
    'A-Line',
    'Etek-Ceket',
    'Uzun Kollu'
  ];

  // Örnek gelinlik verileri
  const [dresses, setDresses] = useState([
    {
      id: 1,
      name: 'Prenses Kesim Gelinlik',
      price: '12.999 TL',
      category: 'Prenses Kesim',
      image: 'https://images.unsplash.com/photo-1596704017255-ee658a1e5eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      isNew: true,
      isSale: false,
      filters: {
        etekTipi: 'prenses',
        yakaTipi: 'v-yaka',
        kolTipi: 'kolsuz',
        kumas: 'tafeta',
        konsept: 'klasik'
      }
    },
    {
      id: 2,
      name: 'Balık Sırtı Gelinlik',
      price: '14.999 TL',
      category: 'Balık Sırtı',
      image: 'https://images.unsplash.com/photo-1590845947676-fa2576f401d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      isNew: false,
      isSale: true,
      filters: {
        etekTipi: 'balik-sirti',
        yakaTipi: 'halka-yaka',
        kolTipi: 'uzun-kol',
        kumas: 'kadife',
        konsept: 'modern'
      }
    },
    {
      id: 3,
      name: 'A-Line Gelinlik',
      price: '11.999 TL',
      originalPrice: '13.999 TL',
      category: 'A-Line',
      image: 'https://images.unsplash.com/photo-1596694537169-6f9f5a7f5e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      isNew: false,
      isSale: true,
      filters: {
        etekTipi: 'a-line',
        yakaTipi: 'yuvarlak',
        kolTipi: 'yarim-kol',
        kumas: 'organze',
        konsept: 'romantik'
      }
    },
    {
      id: 4,
      name: 'Uzun Kollu Gelinlik',
      price: '16.999 TL',
      category: 'Uzun Kollu',
      image: 'https://images.unsplash.com/photo-1596704017255-ee658a1e5eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      isNew: true,
      isSale: false,
      filters: {
        etekTipi: 'prenses',
        yakaTipi: 'v-yaka',
        kolTipi: 'uzun-kol',
        kumas: 'dantel',
        konsept: 'klasik'
      }
    },
    {
      id: 5,
      name: 'Etek-Ceket Gelinlik',
      price: '15.999 TL',
      category: 'Etek-Ceket',
      image: 'https://images.unsplash.com/photo-1596704017255-ee658a1e5eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      isNew: false,
      isSale: false,
      filters: {
        etekTipi: 'duz',
        yakaTipi: 'yuvarlak',
        kolTipi: 'kolsuz',
        kumas: 'organze',
        konsept: 'modern'
      }
    },
    {
      id: 6,
      name: 'İnci İşlemeli',
      price: '17.999 TL',
      originalPrice: '19.999 TL',
      category: 'Prenses Kesim',
      image: 'https://images.unsplash.com/photo-1590845947676-fa2576f401d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      isNew: false,
      isSale: true,
      filters: {
        etekTipi: 'prenses',
        yakaTipi: 'v-yaka',
        kolTipi: 'yarim-kol',
        kumas: 'tafeta',
        konsept: 'romantik'
      }
    }
  ]);

  // Filtre seçenekleri
  const filterOptions = {
    etekTipi: [
      { id: 'prenses', label: 'Prenses' },
      { id: 'balik-sirti', label: 'Balık Sırtı' },
      { id: 'a-line', label: 'A-Line' },
      { id: 'duz', label: 'Düz' },
      { id: 'saten', label: 'Saten' }
    ],
    yakaTipi: [
      { id: 'v-yaka', label: 'V Yaka' },
      { id: 'yuvarlak', label: 'Yuvarlak Yaka' },
      { id: 'halka-yaka', label: 'Halka Yaka' },
      { id: 'askili', label: 'Askılı' },
      { id: 'omuz-acik', label: 'Omuz Açık' }
    ],
    kolTipi: [
      { id: 'kolsuz', label: 'Kolsuz' },
      { id: 'yarim-kol', label: 'Yarım Kol' },
      { id: 'uzun-kol', label: 'Uzun Kol' },
      { id: 'dantel-kol', label: 'Dantel Kol' },
      { id: 'fermuarli', label: 'Fermuarlı' }
    ],
    kumas: [
      { id: 'tafeta', label: 'Taşlı Tafta' },
      { id: 'organze', label: 'Organze' },
      { id: 'kadife', label: 'Kadife' },
      { id: 'dantel', label: 'Dantel' },
      { id: 'saten', label: 'Saten' }
    ],
    konsept: [
      { id: 'klasik', label: 'Klasik' },
      { id: 'modern', label: 'Modern' },
      { id: 'romantik', label: 'Romantik' },
      { id: 'boho', label: 'Boho' },
      { id: 'vintage', label: 'Vintage' }
    ]
  };

  // Açık olan filtreyi takip etmek için state
  const [openFilter, setOpenFilter] = useState(null);
  
  // Seçili filtreleri tutacak state
  const [selectedFilters, setSelectedFilters] = useState({
    etekTipi: [],
    yakaTipi: [],
    kolTipi: [],
    kumas: [],
    konsept: []
  });

  // Filtreleme fonksiyonu
  const filteredDresses = dresses.filter(dress => {
    return Object.entries(selectedFilters).every(([key, values]) => {
      // Eğer bu filtre için seçim yapılmamışsa tümünü göster
      if (values.length === 0) return true;
      
      // Filtre değerlerinden en az biri eşleşiyorsa true döndür
      return values.includes(dress.filters[key]);
    });
  });

  // Filtre seçimini güncelleme
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(v => v !== value);
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
      return newFilters;
    });
  };

  // Filtre menüsünü açıp kapama
  const toggleFilter = (filterType) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  const [activeCategory, setActiveCategory] = useState('Tümü');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4 tracking-wide">Gelinlik Modellerimiz</h2>
          <div className="w-72 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-6"></div>
        </div>

        {/* Filtreleme Menüsü */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 relative">
          {Object.entries({
            etekTipi: 'Etek Tipi',
            yakaTipi: 'Yaka Tipi',
            kolTipi: 'Kol Tipi',
            kumas: 'Kumaş',
            konsept: 'Tasarım/Konsept'
          }).map(([key, label]) => (
            <div key={key} className="relative">
              <button
                onClick={() => toggleFilter(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-md font-semibold transition-all duration-300 ${
                  selectedFilters[key].length > 0
                    ? 'bg-rose-100 text-rose-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
                {selectedFilters[key].length > 0 && (
                  <span className="bg-rose-300 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {selectedFilters[key].length}
                  </span>
                )}
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${openFilter === key ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Açılır Filtre Menüsü */}
              {openFilter === key && (
                <div className="absolute z-20 mt-2 w-56 bg-white rounded-lg shadow-lg py-2">
                  <div className="max-h-60 overflow-y-auto">
                    {filterOptions[key].map((option) => (
                      <label 
                        key={option.id}
                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters[key].includes(option.id)}
                          onChange={() => handleFilterChange(key, option.id)}
                          className="rounded border-gray-300 text-rose-500 focus:ring-rose-300 mr-2"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {selectedFilters[key].length > 0 && (
                    <div className="border-t border-gray-100 px-4 py-2">
                      <button
                        onClick={() => {
                          setSelectedFilters(prev => ({
                            ...prev,
                            [key]: []
                          }));
                        }}
                        className="text-xs text-rose-500 hover:text-rose-700"
                      >
                        Temizle
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {/* Seçili filtreleri göster */}
          {Object.values(selectedFilters).some(arr => arr.length > 0) && (
            <div className="w-full mt-4 flex flex-wrap gap-2">
              <span className="text-md text-gray-500 mr-2">Seçilenler:</span>
              {Object.entries(selectedFilters).map(([filterType, values]) =>
                values.map(value => {
                  const option = filterOptions[filterType].find(opt => opt.id === value);
                  if (!option) return null;
                  return (
                    <span 
                      key={`${filterType}-${value}`}
                      className="inline-flex items-center bg-rose-50 text-rose-700 text-sm px-4 py-1.5 rounded-full"
                    >
                      {option.label}
                      <button
                        onClick={() => handleFilterChange(filterType, value)}
                        className="ml-2 text-rose-400 hover:text-rose-700"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </span>
                  );
                })
              )}
              <button
                onClick={() => {
                  setSelectedFilters({
                    etekTipi: [],
                    yakaTipi: [],
                    kolTipi: [],
                    kumas: [],
                    konsept: []
                  });
                }}
                className="ml-auto text-md text-rose-500 hover:text-rose-700 flex items-center"
              >
                Tümünü Temizle
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* filtrelenen ürün sayısı */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            {filteredDresses.length} ürün bulundu
          </p>
        </div>

        {/* Gelinlik Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDresses.map((dress) => (
            <div key={dress.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={dress.image} 
                  alt={dress.name} 
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Yeni ve İndirim Etiketleri */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {dress.isNew && (
                    <span className="bg-white text-rose-300 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      YENİ
                    </span>
                  )}
                  {dress.isSale && (
                    <span className="bg-rose-300 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      İNDİRİM
                    </span>
                  )}
                </div>
                
                {/* Hover Butonları */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                    <button className="bg-white text-gray-800 hover:bg-rose-300 hover:text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <Link 
                      to={`/urun/${dress.id}`}
                      className="bg-white text-gray-800 hover:bg-rose-300 hover:text-white rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{dress.name}</h3>
                    <p className="text-sm text-gray-500">{dress.category}</p>
                  </div>
                  <div className="text-right">
                    {dress.originalPrice ? (
                      <>
                        <span className="text-gray-400 line-through text-sm mr-2">{dress.originalPrice}</span>
                        <span className="text-rose-300 font-bold">{dress.price}</span>
                      </>
                    ) : (
                      <span className="text-gray-800 font-bold">{dress.price}</span>
                    )}
                  </div>
                </div>
                
                <Link 
                  to={`/randevu?model=${encodeURIComponent(dress.name)}`}
                  className="mt-4 block w-full bg-gray-100 hover:bg-rose-300 hover:text-white text-center py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Randevu Al
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/koleksiyon" 
            className="inline-block border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Tüm Koleksiyonu Gör
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
