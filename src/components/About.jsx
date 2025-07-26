import React from 'react';

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-rose-200 via-white to-pink-200 overflow-hidden">
      {/* Arka plan dekoratif elementler */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-100/30 to-pink-100/30 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-2">
          {/* Resim Bölümü */}
          <div className="w-full lg:w-1/2 relative group flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 max-w-md w-full">
              <img
                src="https://medihacambaz.com/cdn/shop/files/luxe-22-el-yapimi-isiltili-prenses-model-gelinlik-mediha-cambaz-bridal-3_800x.jpg?v=1749036785"
                alt="Hakkımızda"
                className="w-full object-cover rounded-2xl"
                style={{ maxHeight: '700px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 right-10 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-100 transform transition-all duration-500 hover:scale-110 hidden md:block">
              <div className="text-center">
                <div className="relative">
                  <span className="text-5xl font-playfair font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent block leading-tight">10+</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-rose-300 rounded-full animate-pulse"></div>
                </div>
                <span className="text-gray-600 font-medium mt-2 block">Yıllık Deneyim</span>
              </div>
            </div>
          </div>

          {/* İçerik Bölümü */}
          <div className="lg:w-1/2">
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Başlık kısmı */}
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6 leading-tight">
                  Hikayemiz ve
                  <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent"> Misyonumuz</span>
                </h2>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
                  <div className="w-8 h-1 bg-rose-200 rounded-full"></div>
                  <div className="w-4 h-1 bg-rose-100 rounded-full"></div>
                </div>
              </div>

              {/* İçerik metinleri */}
              <div className="space-y-6 mb-12">
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-800">2010 yılında İstanbul'da</span> kurulan BridalElegance, gelinlik sektöründe yeni bir soluk getirmek amacıyla yola çıktı. O günden bu yana binlerce mutlu gelinin hayallerini süsleyen gelinlikleri tasarladık.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Misyonumuz, her gelinin kendini <span className="italic text-rose-600">özel ve güzel</span> hissedeceği, unutulmaz bir gün yaşamasını sağlamak. Uzman ekibimizle birlikte, en son moda trendlerini takip ederek, kaliteli kumaşlar ve işçilikle özel tasarımlar üretiyoruz.
                </p>
              </div>

              {/* Özellikler grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A1.934 1.934 0 004 17.693V20a2 2 0 002 2h12a2 2 0 002-2v-2.307a1.934 1.934 0 00-.244-1.053zM9 12.75a3.75 3.75 0 117.5 0c0 7.5-7.5 7.5-7.5 0z",
                    title: "Özel Tasarım",
                    desc: "Hayalinizdeki gelinliği birlikte tasarlayalım"
                  },
                  {
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    title: "Uzman Ekip",
                    desc: "Deneyimli tasarımcılarımızla hizmetinizdeyiz"
                  },
                  {
                    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                    title: "Premium Kalite",
                    desc: "En iyi kalite malzemeler kullanıyoruz"
                  },
                  {
                    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                    title: "Müşteri Memnuniyeti",
                    desc: "%100 müşteri memnuniyeti garantisi"
                  }
                ].map((item, index) => (
                  <div key={index} className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-100/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-3 rounded-xl group-hover:from-rose-200 group-hover:to-pink-200 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-6 ml-10">
                <a
                  href="/hakkimizda"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span>Daha Fazla Bilgi</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>

                <div className="flex items-center gap-2 text-gray-600">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-rose-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-pink-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-rose-300 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium">1000+ Mutlu Gelin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;