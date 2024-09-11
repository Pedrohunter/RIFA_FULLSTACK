const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware para parsear el body de las peticiones
app.use(express.json());
app.use(bodyParser.json());

// Conectar a MongoDB (URL se configurará desde Docker)
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Definir una ruta de prueba
app.get('/', (req, res) => {
    res.send('API funcionando');
});

// Rutas para Rifa
const rifaRoutes = require('./routes/rifa');
app.use('/api/rifas', rifaRoutes);

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
