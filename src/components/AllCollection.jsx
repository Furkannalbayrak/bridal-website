import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCollection = () => {
  const navigate = useNavigate();
  const [dresses] = useState([
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

  const [openFilter, setOpenFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    etekTipi: [],
    yakaTipi: [],
    kolTipi: [],
    kumas: [],
    konsept: []
  });

  const filteredDresses = dresses.filter(dress => 
    Object.entries(selectedFilters).every(([key, values]) => 
      values.length === 0 || values.includes(dress.filters[key])
    )
  );

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <section className="py-16 px-1 md:px-2 lg:px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Tüm Gelinlik Modellerimiz
          </h2>
          <div className="w-72 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries({
            etekTipi: 'Etek Tipi',
            yakaTipi: 'Yaka Tipi',
            kolTipi: 'Kol Tipi',
            kumas: 'Kumaş',
            konsept: 'Tasarım/Konsept'
          }).map(([key, label]) => (
            <div key={key} className="relative">
              <button
                onClick={() => setOpenFilter(openFilter === key ? null : key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                  selectedFilters[key].length > 0
                    ? 'bg-rose-100 text-rose-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {label}
                {selectedFilters[key].length > 0 && (
                  <span className="bg-rose-300 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {selectedFilters[key].length}
                  </span>
                )}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openFilter === key ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openFilter === key && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <div className="max-h-60 overflow-y-auto">
                    {filterOptions[key]?.map((option) => (
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
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            {filteredDresses.length} ürün bulundu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredDresses.map((dress) => (
            <div
              key={dress.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/gelinlik-modeli/${dress.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {dress.isSale && (
                  <div className="absolute top-2 right-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded">
                    İNDİRİM
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">{dress.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-rose-500 font-medium">{dress.price}</span>
                  {dress.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {dress.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{dress.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCollection;