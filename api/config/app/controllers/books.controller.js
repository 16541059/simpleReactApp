const Book = require('../models/books.model')

// Yeni Kitap oluştur
exports.create = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Kitap içeriği boş olamaz"
        })
    }

    const book = new Book({
        title: req.body.title || "Başlıksız Kitap",
        content: req.body.content,
        author:req.body.author,
        imageLink: req.body.imageLink,
        pages:req.body.pages,
        price:req.body.price,
        category:req.body.category

    })

    book.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err.message.json())
        })
}

// tüm Kitapları getir
exports.findAll = (req, res) => {
    Book.find()
        .then(books => {
            res.send(books)
        })
        .catch(err => {
            res.status(500).send(err.message.json())
        })
}

// idye sahip Kitap getir
exports.findOne = (req, res) => {
    Book.findById(req.params.bookId)
        .then(book => {
            if(!book) {
                return res.status(404).send({
                    message: "Kitap bulunamadı"
                })
            }

            res.send(book)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `bu idye sahip kitap bulunamadı id: ${req.params.bookId}`
                })
            }
            return res.status(500).send({
                message: `Kitap getirirken hata oluştu. bookId: ${req.params.bookId}, ${err.message}`
            })
        })
}

// idye sahip Kitap güncelle
exports.update = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: `Kitap içeriği boş olamaz`
        })
    }

    Book.findByIdAndUpdate(req.params.bookId, {
        title: req.body.title || "başlıksız Kitap",
        content: req.body.content
    }, {new: true})
        .then(book => {
            if(!book) {
                return res.status(404).send({
                    message: `şu idye sahip Kitap bulunamadı: ${req.params.bookId}`
                })
            }
            res.send(book)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `şu idye sahip Kitap bulunamadı ${req.params.bookId}`
                })
            }
            return res.status(500).send({
                message: `Kitap getirirken hata oluştu. bookId: ${req.params.bookId}, ${err.message}`
            })
        })
}

// idye sahip Kitap sil
exports.delete = (req, res) => {
    Book.findByIdAndRemove(req.params.bookId)
        .then(book => {
            if(!book) {
                return res.status(404).send({
                    message: "Kitap bulunamadı. id: " + req.params.bookId
                });
            }
            res.send({
                message: `Kitap başarıyla silindi!`
            })
        })
        .catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'KitapFound') {
                return res.status(404).send({
                    message: "Kitap bulunamadı id: " + req.params.bookId
                });
            }
            return res.status(500).send({
                message: "Kitap bulunamadı id: " + req.params.bookId
            });
        })
}