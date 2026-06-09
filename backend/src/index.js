const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Ortam değişkenlerini yükle
dotenv.config();

const uygulama = express();

// Middleware
uygulama.use(cors());
uygulama.use(express.json());
uygulama.use(express.urlencoded({ extended: true }));

// Veritabanı bağlantısı
const veritabaniBaslat = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB bağlantısı başarılı');
  } catch (hata) {
    console.error('❌ MongoDB bağlantı hatası:', hata);
    process.exit(1);
  }
};

veritabaniBaslat();

// API Rotaları
uygulama.use('/api/kimlik', require('./routes/kimlik'));
uygulama.use('/api/ogretmenler', require('./routes/ogretmenler'));
uygulama.use('/api/veliler', require('./routes/veliler'));
uygulama.use('/api/ogrenciler', require('./routes/ogrenciler'));
uygulama.use('/api/uygunluk', require('./routes/uygunluk'));
uygulama.use('/api/randevular', require('./routes/randevular'));
uygulama.use('/api/yonetim', require('./routes/yonetim'));

// Sağlık kontrol
uygulama.get('/api/saglik', (req, res) => {
  res.json({ durum: 'Sunucu çalışıyor ✅' });
});

// Hata işleyicisi
uygulama.use((err, req, res, next) => {
  console.error('Hata:', err);
  res.status(err.status || 500).json({
    basarili: false,
    mesaj: err.message || 'Sunucu hatası'
  });
});

const PORT = process.env.PORT || 5000;
uygulama.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
});
