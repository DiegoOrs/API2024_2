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
router.get('/:usuario_id',  getRutinas);

// Ruta para obtener todas las rutinas (sin filtro por usuario)
router.get('/',  getAllRutinas);  // Nueva ruta para obtener todas las rutinas

// Otras rutas para crear, obtener por id, actualizar y eliminar rutinas
router.post('/',  createRutina);
router.get('/rutina/:rut_id',  getRutinaById);
router.put('/rutina/:rut_id',  updateRutina);
router.delete('/rutina/:rut_id',  deleteRutina);

export default router;
