import { Router } from 'express';
import {
  createRacha,
  getRacha,
  updateRacha,
  deleteRacha,
} from '../controllers/racha.controller.js';

const router = Router();

// Ruta para crear una racha
router.post('/', createRacha);

// Ruta para obtener una racha
router.get('/:usuario_id', getRacha);

// Ruta para actualizar una racha
router.put('/', updateRacha);

// Ruta para eliminar una racha
router.delete('/:usuario_id', deleteRacha);

export default router;