const mongoose = require('mongoose');

const randevuSemasi = new mongoose.Schema({
  veli: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veli',
    required: true
  },
  ogretmen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ogretmen',
    required: true
  },
  ogrenci: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ogrenci',
    required: true
  },
  uygunluk: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Uygunluk',
    required: true
  },
  tarih: Date,
  baslamaSaati: String,
  bitisSaati: String,
  durum: {
    type: String,
    enum: ['beklemede', 'onaylandi', 'iptal', 'tamamlandi'],
    default: 'beklemede'
  },
  not: String,
  olusturulmaTarihi: {
    type: Date,
    default: Date.now
  },
  guncellemeTarihi: Date
});

module.exports = mongoose.model('Randevu', randevuSemasi);
