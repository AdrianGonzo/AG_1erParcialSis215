require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const mongo_uri = process.env.mongo_uri;

if (!mongo_uri){
  console.error("Error: mongo_uri no esta definido");
  process.exit(1);
}

app.use(express.json()); //Manejar JSON

mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })//MongoDB
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error al conectar con MongoDB:', err));

const { contadorOperaciones, getOperaciones } = require('./contadorOp');
app.use(contadorOperaciones);

const usuarioRoutes = require('./rutas/usuarios');
const productoRoutes = require('./rutas/productos');
const contadorRoutes = require('./rutas/contadores');

app.use('/usuarios',usuarioRoutes);
app.use('/productos',productoRoutes);
app.use('/contadores', contadorRoutes);
app.get('/operaciones', getOperaciones);

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');//Prueba
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);//Ver Puerto Servidor
});
