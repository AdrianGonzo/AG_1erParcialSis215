const mongoose = require('mongoose');

const schProducto = new mongoose.Schema({
  nombre: { type: String},
  precio: { type: Number},
  categoria: { type: String}
}, { timestamps: true });

module.exports = mongoose.model('Producto', schProducto);