import express from 'express';
import * as logrosController from '../controllers/logros.controller.js';

const router = express.Router();

router.get('/', logrosController.getLogros);
router.get('/:id', logrosController.getLogroById); // Obtener un logro por ID
router.post('/', logrosController.createLogro); // Crear un nuevo logro
router.put('/:id', logrosController.updateLogro); // Actualizar un logro
router.delete('/:id', logrosController.deleteLogro); // Eliminar un logro

export default router;
