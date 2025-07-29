import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Collection = () => {

  const navigate = useNavigate()

  const [dresses, setDresses] = useState([
    {
      id: 1,
      name: 'Prenses Kesim Gelinlik',
      price: '12.999 TL',
      category: 'Prenses Kesim',
      image: 'https://www.yesimgelinlik.com/wp-content/uploads/2022/08/prenses-gelinlik-modeli-33-4056835395.jpg',
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
      image: 'https://alissenuera.com/cdn/shop/files/Alisse-nuerA-Dusuk-Omuzlu-Drapeli-Sade-Helen-Gelinlik-Modeli-Front-Image_2048x.jpg?v=1683900280',
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
      image: 'https://cdn.dsmcdn.com/ty784/product/media/images/20230317/16/306358829/889458153/1/1_org_zoom.jpg',
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
      image: 'https://www.yesimgelinlik.com/wp-content/uploads/2025/01/Urun1-700x1050.jpg',
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
      image: 'https://medihacambaz.com/cdn/shop/files/luxe-22-el-yapimi-isiltili-prenses-model-gelinlik-mediha-cambaz-bridal-3_800x.jpg?v=1749036785',
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
      image: 'https://www.davetcokelbisemyok.com/media/catalog/product/cache/401798936e1f39ab34bbb19329bd4ca1/g/e/gemma_gelinlik_dhbd.jpg',
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
    <section className="py-16 px-1 md:px-2 lg:px-6 bg-gray-50">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-md font-semibold transition-all duration-300 ${selectedFilters[key].length > 0
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
          {filteredDresses.map((dress) => (
            <div
              key={dress.id}
              className="group bg-transparent rounded-lg overflow-hidden transition-shadow duration-300"
              onClick={() => navigate(`/gelinlik-modeli/${dress.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                {/* Hover siyah opaklık sadece resmin üstüne */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>

              <div className="pt-2 pb-5 lg:py-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md sm:text-lg font-semibold text-gray-800">{dress.name}</h3>
                    <p className="text-sm text-gray-600">{dress.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-12">
          <Link
            to="/tum-gelinlik-modelleri"
            className="inline-block border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Tüm Modelleri Gör
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
