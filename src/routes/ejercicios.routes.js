import express from 'express';
import * as ejerciciosController from '../controllers/ejercicios.controller.js';

const router = express.Router();

// Definir rutas
router.get('/', ejerciciosController.getEjercicios);
router.get('/:id', ejerciciosController.getEjercicioById);
router.post('/', ejerciciosController.createEjercicio);
router.put('/:id', ejerciciosController.updateEjercicio);
router.delete('/:id', ejerciciosController.deleteEjercicio);

export default router;

