const express = require('express');
const router = express.Router();
const Libro = require('../models/libro');

router.get('/', async (req, res) => {
    try {
        const Libros = await Libro.find()
        res.json(Libros)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los libros" });

    }
})

router.post('/', async (req, res) => {
    try {
        const LibroNuevo = new Libro(req.body);
        await LibroNuevo.save()
        res.json(LibroNuevo)
    } catch {
        res.status(500).json({ error: "Error al crear libro" })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const LibroUpdate = await Libro.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            });
        res.json(LibroUpdate);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el Libro" });
    }
});

router.delete('/:id', async (req,res) => {
    try {
         await Libro.findByIdAndDelete(req.params.id)
        res.json({message: 'Libro eliminado correctamente'})
        
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar libro"})
    }
});


module.exports = router;