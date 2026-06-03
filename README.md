# Okul Veli Randevu Sistemi

Okullar için veli randevu yönetim sistemini sağlayan tam bir web uygulamasıdır.

## Özellikler

- 👨‍💼 **Öğretmen Yönetimi**: Öğretmen profilleri ve bilgileri
- 📅 **Uygunluk Yönetimi**: Öğretmenlerin uygun saatleri belirleme
- 👨‍👩‍👧‍👦 **Veli Portalı**: Velilerin randevu alması ve yönetmesi
- 📋 **Öğrenci İlişkisi**: Öğrenci-veli-öğretmen bağlantıları
- 🔔 **Bildirimler**: Email bildirimleri
- 📊 **Yönetim Paneli**: Sistem yöneticisi kontrol paneli
- 📱 **Responsive Tasarım**: Mobil uyumlu arayüz
- 🔐 **Güvenlik**: Rol tabanlı erişim kontrolü

## Teknoloji Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js + Express
- MongoDB
- JWT Kimlik Doğrulama
- Nodemailer (Email)

## Kurulum

### Gereksinimler
- Node.js 16+
- npm veya yarn
- MongoDB

### Adımlar

\`\`\`bash
# Repository klonla
git clone https://github.com/mehmeturalbilisim/okul-veli-randevu-sistemi.git
cd okul-veli-randevu-sistemi

# Bağımlılıkları yükle
cd backend && npm install
cd ../frontend && npm install

# Ortam dosyasını oluştur
cp backend/.env.example backend/.env

# Geliştirme sunucusunu başlat
cd backend && npm run dev
# Başka bir terminal penceresinde:
cd frontend && npm start
\`\`\`

## Proje Yapısı

\`\`\`
okul-veli-randevu-sistemi/
├── backend/                 # Express sunucu
│   ├── src/
│   │   ├── models/         # Veritabanı şemaları
│   │   ├── routes/         # API endpoint'leri
│   │   ├── controllers/    # İş mantığı
│   │   ├── middleware/     # Kimlik doğrulama, validasyon
│   │   └── config/         # Yapılandırma dosyaları
│   └── package.json
├── frontend/                # React uygulaması
│   ├── src/
│   │   ├── components/     # React bileşenleri
│   │   ├── pages/          # Sayfa bileşenleri
│   │   ├── services/       # API çağrıları
│   │   ├── contexts/       # Context API
│   │   └── styles/         # CSS dosyaları
│   └── package.json
└── README.md
\`\`\`

## Lisans

MIT
