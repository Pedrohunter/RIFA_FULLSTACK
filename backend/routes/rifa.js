// routes/rifa.js
const express = require('express');
const Rifa = require('../models/Rifa');
const router = express.Router();

// Crear un nuevo puesto en la rifa (POST)
router.post('/', async (req, res) => {
    try {
        const nuevaRifa = new Rifa(req.body);
        const rifaGuardada = await nuevaRifa.save();
        res.status(201).json(rifaGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Leer todos los puestos de la rifa (GET)
router.get('/', async (req, res) => {
    try {
        const rifas = await Rifa.find();
        res.json(rifas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Leer un puesto específico por ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const rifa = await Rifa.findOne({ id: req.params.id });
        if (!rifa) return res.status(404).json({ message: 'Rifa no encontrada' });
        res.json(rifa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un puesto de la rifa por ID (PUT)
router.put('/:id', async (req, res) => {
    try {
        const rifaActualizada = await Rifa.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        if (!rifaActualizada) return res.status(404).json({ message: 'Rifa no encontrada' });
        res.json(rifaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un puesto de la rifa por ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const rifaEliminada = await Rifa.findOneAndDelete({ id: req.params.id });
        if (!rifaEliminada) return res.status(404).json({ message: 'Rifa no encontrada' });
        res.json({ message: 'Rifa eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
