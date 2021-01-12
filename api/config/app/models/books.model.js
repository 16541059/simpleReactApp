const mongoose = require('mongoose')

// not modelimizi tanımlıyoruz
const BookSchema = mongoose.Schema({
  // içeriği başlık ve içerikten oluşacak, ikisi de string olacak

  author: String,
  title: String,
  content: String,
  imageLink:String,
  pages: String,
  price:String,
  category:String

}, {
  timestamps: true
})

// not modelimizi sonradan kullanılabilmesi için exportluyoruz.
module.exports = mongoose.model('Book', BookSchema)