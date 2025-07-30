import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {

  const { id } = useParams();  // url den id yi alıyoruz
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isImageOpen, setIsImageOpen] = useState(false);
  
  const [zoomStyle, setZoomStyle] = useState({
    transform: 'scale(1)',
    transformOrigin: 'center center',
    transition: 'transform 0.3s ease'
  });

  const toggleImageModal = () => {
    setIsImageOpen(!isImageOpen);
    // Reset zoom when closing modal
    setZoomStyle({
      transform: 'scale(1)',
      transformOrigin: 'center center',
      transition: 'transform 0.3s ease'
    });
    // Prevent scrolling when modal is open
    document.body.style.overflow = isImageOpen ? 'auto' : 'hidden';
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const isZoomed = zoomStyle.transform !== 'scale(1)';
    
    setZoomStyle({
      transform: isZoomed ? 'scale(1)' : 'scale(2)',
      transformOrigin: `${x}% ${y}%`,
      transition: 'transform 0.3s ease'
    });
  };

  const sampleProducts = [
    {
      id: 1,
      name: 'Prenses Kesim Gelinlik',
      price: '12.999 TL',
      category: 'Prenses Kesim',
      image: 'https://www.yesimgelinlik.com/wp-content/uploads/2022/08/prenses-gelinlik-modeli-33-4056835395.jpg',
      isSale: false,
      filters: {
        "Etek Tipi": 'Prenses',
        "Yaka Tipi": 'V-yaka',
        "Kol Tipi": 'Kolsuz',
        "Kumaş": 'Tafeta',
        "Konsept": 'Klasik'
      },
      sizes: ['32', '34', '36', '38']
    },
    {
      id: 2,
      name: 'Balık Sırtı Gelinlik',
      price: '14.999 TL',
      category: 'Balık Sırtı',
      image: 'https://alissenuera.com/cdn/shop/files/Alisse-nuerA-Dusuk-Omuzlu-Drapeli-Sade-Helen-Gelinlik-Modeli-Front-Image_2048x.jpg?v=1683900280',
      isSale: true,
      filters: {
        "Etek Tipi": 'Balık Sırtı',
        "Yaka Tipi": 'Halka Yaka',
        "Kol Tipi": 'Uzun Kol',
        "Kumaş": 'Kadife',
        "Konsept": 'Modern'
      },
      sizes: ['34', '36', '38']
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
        "Etek Tipi": 'A-Line',
        "Yaka Tipi": 'Yuvarlak',
        "Kol Tipi": 'Yarım Kol',
        "Kumaş": 'Organze',
        "Konsept": 'Romantik'
      },
      sizes: ['30', '32', '34', '36', '38']
    },
    {
      id: 4,
      name: 'Uzun Kollu Gelinlik',
      price: '16.999 TL',
      category: 'Uzun Kollu',
      image: 'https://www.yesimgelinlik.com/wp-content/uploads/2025/01/Urun1-700x1050.jpg',
      isSale: false,
      filters: {
        "Etek Tipi": 'Prenses',
        "Yaka Tipi": 'V-yaka',
        "Kol Tipi": 'Uzun Kol',
        "Kumaş": 'Dantel',
        "Konsept": 'Klasik'
      },
      sizes: ['34', '36', '38', '40', '42']
    },
    {
      id: 5,
      name: 'Etek-Ceket Gelinlik',
      price: '15.999 TL',
      category: 'Etek-Ceket',
      image: 'https://medihacambaz.com/cdn/shop/files/luxe-22-el-yapimi-isiltili-prenses-model-gelinlik-mediha-cambaz-bridal-3_800x.jpg?v=1749036785',
      isSale: false,
      filters: {
        "Etek Tipi": 'Düz',
        "Yaka Tipi": 'Yuvarlak',
        "Kol Tipi": 'Kolsuz',
        "Kumaş": 'Organze',
        "Konsept": 'Modern'
      },
      sizes: ['36', '38', '40']
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
        "Etek Tipi": 'Prenses',
        "Yaka Tipi": 'V-yaka',
        "Kol Tipi": 'Yarım Kol',
        "Kumaş": 'Tafeta',
        "Konsept": 'Romantik'
      },
      sizes: ['32', '34', '36', '38', '40', '42']
      
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
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Image Modal */}
      {isImageOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={toggleImageModal}
        >
          <div className="relative max-w-3xl w-full max-h-[95vh] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[90vh] object-contain cursor-zoom-in"
              style={zoomStyle}
              onClick={handleImageClick}
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={toggleImageModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Ürün Resmi */}
            <div className="md:w-1/2 p-6">
              <div className="h-auto rounded-lg overflow-hidden cursor-zoom-in" onClick={toggleImageModal}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Ürün Detayları */}
            <div className="p-8 w-4/12">
              <h1 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="border-t border-gray-300 pt-6">
                <h2 className="text-xl font-semibold text-gray-800 my-6">Ürün Detayları</h2>
                <div className="space-y-3">
                  {
                    Object.entries(product.filters).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{key}</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    ))
                  }
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Bedenler</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <div 
                        key={index}
                        className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-rose-50 hover:border-rose-300 cursor-pointer transition-colors"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
