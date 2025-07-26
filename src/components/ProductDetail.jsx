import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {

  const { id } = useParams();  // url den id yi alıyoruz
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const sampleProducts = [
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
  ]

  useEffect(() => {
    const foundProduct = sampleProducts.find(product => product.id === parseInt(id));
    setProduct(foundProduct);
    setLoading(false);
  }, [id]); // id değiştiğinde useEffect yeniden çalışacak

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Ürün bulunamadı</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Ürün Resmi */}
            <div className="md:w-1/2 p-6">
              <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Ürün Detayları */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-2xl text-pink-600 font-semibold mb-6">
                {product.price}
              </p>

              {/* <p className="text-gray-600 mb-8">
                {product.description}
              </p> */}

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Ürün Detayları</h2>
                <div className="space-y-3">
                  {
                    Object.entries(product.filters).map((key, value) => {
                      <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{key}:</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    })
                  }
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors">
                  Hemen Satın Al
                </button>
                <Link
                  to="/collection"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-center hover:bg-gray-50 transition-colors"
                >
                  Koleksiyona Dön
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <p>Ürün hakkında daha fazla bilgi için bizi arayabilirsiniz.</p>
                <p className="mt-1">Müşteri Hizmetleri: 0850 123 45 67</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
