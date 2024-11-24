import express from 'express';
import * as rutinasController from '../controllers/rutinas.controller.js';

const router = express.Router();

router.get('/', rutinasController.getRutinas); // Ruta para obtener todas las rutinas
router.get('/:id', rutinasController.getRutinaById); // Ruta para obtener una rutina por ID
router.post('/', rutinasController.createRutina); // Ruta para crear una nueva rutina
router.put('/:id', rutinasController.updateRutina); // Ruta para actualizar una rutina
router.delete('/:id', rutinasController.deleteRutina); // Ruta para eliminar una rutina

export default router;
