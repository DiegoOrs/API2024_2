import { Router } from 'express';
import {
  getRecompensasByUsuario,
  createRecompensa,
  updateRecompensa,
  deleteRecompensa,
} from '../controllers/recompensas.controller.js';

const router = Router();

// Ruta para obtener las recompensas de un usuario
router.get('/:usuario_id', getRecompensasByUsuario);

// Ruta para crear una nueva recompensa
router.post('/', createRecompensa);

// Ruta para actualizar una recompensa
router.put('/:id', updateRecompensa);

// Ruta para eliminar una recompensa
router.delete('/:id', deleteRecompensa);

export default router;
