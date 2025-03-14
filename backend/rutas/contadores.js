const express = require('express');
const Usuario = require('../Usuario');
const Producto = require('../Producto');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const totalUsuarios = await Usuario.countDocuments();
    const totalProductos = await Producto.countDocuments();

    res.json({
      usuarios: totalUsuarios,
      productos: totalProductos
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;