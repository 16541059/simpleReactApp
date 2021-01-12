const mongoose = require('mongoose')

// not modelimizi tanımlıyoruz
const UserSchema = mongoose.Schema({
  // içeriği başlık ve içerikten oluşacak, ikisi de string olacak

   name:String,
   email:String,
   password:String

}, {
  timestamps: true
})

// not modelimizi sonradan kullanılabilmesi için exportluyoruz.
module.exports = mongoose.model('User',UserSchema )