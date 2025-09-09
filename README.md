# Bridal Website (Gelinlik Sitesi)

Modern ve şık bir gelinlik tanıtım/ticaret sitesidir. Vitrin, koleksiyon, model detay ve tüm koleksiyon sayfalarından oluşur. Vite ile oluşturuldu, Tailwind CSS ile stillendi ve GitHub Pages üzerinde yayınlanacak şekilde yapılandırıldı.

Canlı Demo: `https://Furkannalbayrak.github.io/bridal-website/`


## 🚀 Özellikler

- **Ana sayfa vitrini**: `Hero` bileşeni ile öne çıkan görseller ve çağrı-aksiyonlar.
- **Seçme koleksiyon**: `Collection` bileşeni ile öne çıkan gelinlikler.
- **Tüm koleksiyon**: `/tum-gelinlik-modelleri` rotasında filtrelenebilir liste.
- **Ürün detayı**: `/gelinlik-modeli/:id` rotasında modelin detayları.
- **Yumuşak gezinim**: `ScrollToTop` ile sayfa geçişlerinde en üste kaydırma.
- **Bileşen tabanlı mimari**: `Header`, `Footer`, `Hero`, `Collection`, `AllCollection`, `ProductDetail`.
- **Hızlı geliştirme**: Vite ile anında yenileme ve optimize build.
- **Responsive tasarım**: Tailwind CSS ile tüm ekran boyutlarında uyumlu.


## 📂 Proje Yapısı

- `src/main.jsx`: Giriş noktası; uygulama `HashRouter` ile sarılır.
- `src/App.jsx`: Uygulama kabuğu; `RouterConfig` ve `Footer` render edilir.
- `src/config/RouterConfig.jsx`: Tüm rotaların tanımı:
  - `/` → `Header`, `Hero`, `Collection`
  - `/gelinlik-modeli/:id` → `Header`, `ProductDetail`
  - `/tum-gelinlik-modelleri` → `Header`, `AllCollection`
  - `/tum-gelinlik-modelleri/:category/:modelName` → `Header`, `AllCollection`
- `src/components/`:
  - `Header.jsx`, `Footer.jsx`, `Hero.jsx`, `Collection.jsx`, `AllCollection.jsx`, `ProductDetail.jsx`
  - (Ekstra: `About.jsx`, `Features.jsx`, `Testimonials.jsx` mevcut)
- `src/scrollSetting/ScrollToTop.jsx`: Sayfa geçişlerinde yukarı kaydırma.
- `src/index.css` ve `tailwind.config.js`: Tailwind kurulum ve kapsam tanımı.
- `vite.config.js`: GitHub Pages için `base: '/bridal-website/'` ayarı.


## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- JavaScript (ES Modules)
- Tailwind CSS
- React Router DOM (HashRouter)
- React Icons


## 🛠 Kurulum ve Kullanım

Yerelde çalıştırmak için:

1. Node.js kurulu olmalı: `https://nodejs.org` (LTS önerilir)
2. Projeyi indirin/klonlayın
3. Proje klasörüne girin
4. Terminal/Powershell’i bu klasörde açın
5. Bağımlılıkları yükleyin
    ```bash
    npm install
    ```
6. Geliştirme sunucusunu başlatın
    ```bash
    npm run dev
    ```
7. Tarayıcıda verilen yerel adresi açın (örn. `http://localhost:5173`).


### Build Alma
1. Üretim için optimize build:
    ```bash
    npm run build
    ```
2. Ardından önizleme için:
    ```bash
    npm run preview
    ```


## 🚢 GitHub Pages’e Deploy
Proje, GitHub Pages’e yayınlamak için hazırdır.

- `package.json` içinde `homepage` ve `deploy` komutu tanımlı
- `vite.config.js` içinde `base: '/bridal-website/'`
- `HashRouter` kullanıldığı için 404 yönlendirme sorunu yaşanmaz

Yayınlamak için:
```bash
npm run deploy
```


## 📜 License
Bu proje **MIT lisansı** altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz.
