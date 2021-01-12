module.exports = (app) => {
    const books = require('../controllers/books.controller')

  
    // yeni not oluştur
    app.post('/books', books.create)

    // tüm notları getir
    app.get('/books', books.findAll)

    // belirli Idye sahip notu getir
    app.get('/books/:bookId', books.findOne)

    // belirli Idye sahip notu güncelle
    app.put('/books/:bookId', books.update)

    // Idye sahip notu sil
    app.delete('/books/:bookId', books.delete)
}