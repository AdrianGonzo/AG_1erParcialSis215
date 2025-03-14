const mongoose = require('mongoose');

const schUsuario = new mongoose.Schema({
    nombre: {type: String},
    edad: {type: Number},
    ocupacion: {type: String}
}, {timestamps: true})

module.exports = mongoose.model('Usuario',schUsuario);