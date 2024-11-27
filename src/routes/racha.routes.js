import { Router } from 'express';
import {
  createRacha,
  getRacha,
  updateRacha,
  deleteRacha,
  getAllRachas, // Importa la nueva función
} from '../controllers/racha.controller.js';

const router = Router();

// Ruta para crear una racha
router.post('/', createRacha);

// Ruta para obtener una racha específica por usuario
router.get('/:usuario_id', getRacha);

// Ruta para obtener todas las rachas
router.get('/', getAllRachas); // Nueva ruta

// Ruta para actualizar una racha
router.put('/', updateRacha);

// Ruta para eliminar una racha
router.delete('/:usuario_id', deleteRacha);

export default router;
