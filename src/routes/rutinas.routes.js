import express from 'express';
import {
  createRutina,
  getRutinas,
  getRutinaById,
  updateRutina,
  deleteRutina,
} from '../controllers/rutinas.Ctrl.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas protegidas con middleware
router.post('/rutinas', verifyToken, createRutina);  // Crear rutina
router.get('/usuario/:usr_id', verifyToken, getRutinas);  // Obtener rutinas por usuario
router.get('/:rut_id', verifyToken, getRutinaById);  // Obtener rutina por ID
router.put('/:rut_id', verifyToken, updateRutina);  // Actualizar rutina
router.delete('/:rut_id', verifyToken, deleteRutina);  // Eliminar rutina

export default router;
