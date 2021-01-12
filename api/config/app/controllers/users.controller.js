const User = require('../models/users.model')

// Yeni kullanıcı oluştur
exports.create = (req, res) => {
    if(!req.body.email) {
        return res.status(400).send({
            message: "E-mail alanı boş olamaz"
        })
    }

    const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password

    })

    user.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err.message.json())
        })
}

// tüm kullanıcıları getir
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.status(500).send(err.message.json())
        })
}

// idye sahip kullanıcıy  getir
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "Kullanıcı bulunamadı"
                })
            }

            res.send(user)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `bu idye sahip Kullanıcı bulunamadı id: ${req.params.userId}`
                })
            }
            return res.status(500).send({
                message: `Kullanıcı getirirken hata oluştu. userID: ${req.params.userId}, ${err.message}`
            })
        })
}

// idye sahip kullanıcıyı güncelle
exports.update = (req, res) => {
    if(!req.body.email && !req.body.password) {
        return res.status(400).send({
            message: `Email içeriği boş olamaz`
        })
    }

    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name || "Isimsiz Kullanıcı",
        email: req.body.email
    }, {new: true})
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: `şu idye sahip Kullancı bulunamadı: ${req.params.userId}`
                })
            }
            res.send(user)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `şu idye sahip Kullancı bulunamadı ${req.params.userId}`
                })
            }
            return res.status(500).send({
                message: `Kullancı getirirken hata oluştu. userId: ${req.params.userId}, ${err.message}`
            })
        })
}

// idye sahip kullanıyı sil
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "KUllancı bulunamadı. id: " + req.params.userId
                });
            }
            res.send({
                message: `not başarıyla silindi!`
            })
        })
        .catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Kitap bulunamadı id: " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Kitap bulunamadı id: " + req.params.userId
            });
        })
}