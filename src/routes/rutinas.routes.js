import { Router } from 'express';
import {
  createRutina,
  getRutinas,
  getRutinaById,
  updateRutina,
  deleteRutina,
  getAllRutinas,  // Importa la nueva función
} from '../controllers/rutinas.Ctrl.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();

// Ruta para obtener las rutinas de un usuario
router.get('/:usuario_id', verifyToken, getRutinas);

// Ruta para obtener todas las rutinas (sin filtro por usuario)
router.get('/', verifyToken, getAllRutinas);  // Nueva ruta para obtener todas las rutinas

// Otras rutas para crear, obtener por id, actualizar y eliminar rutinas
router.post('/', verifyToken, createRutina);
router.get('/rutina/:rut_id', verifyToken, getRutinaById);
router.put('/rutina/:rut_id', verifyToken, updateRutina);
router.delete('/rutina/:rut_id', verifyToken, deleteRutina);

export default router;
