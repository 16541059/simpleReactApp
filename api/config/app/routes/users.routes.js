module.exports = (app) => {
    const users = require('../controllers/users.controller')

    // yeni not oluştur
    app.post('/users', users.create)

    // tüm notları getir
    app.get('/users', users.findAll)

    // belirli Idye sahip notu getir
    app.get('/users/:bookId', users.findOne)

    // belirli Idye sahip notu güncelle
    app.put('/users/:bookId', users.update)

    // Idye sahip notu sil
    app.delete('/users/:bookId', users.delete)
}