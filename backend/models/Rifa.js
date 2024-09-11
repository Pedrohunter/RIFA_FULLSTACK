// models/Rifa.js
const mongoose = require('mongoose');

const RifaSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    estado: {
        type: String,
        enum: ['disponible', 'pendiente', 'vendido'],
        default: 'disponible',
    },
    comprador: { type: String, default: '' },
    pagado: { type: String, enum: ['SI', 'NO'], default: 'NO' },
});

module.exports = mongoose.model('Rifa', RifaSchema);
