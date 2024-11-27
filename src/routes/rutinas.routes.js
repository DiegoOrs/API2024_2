import { Router } from 'express';
import {
  createRutina,
  getRutinas,
  getRutinaById,
  updateRutina,
  deleteRutina,
} from '../controllers/rutinas.Ctrl.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();

// Ruta para obtener las rutinas de un usuario
router.get('/:usuario_id', verifyToken, getRutinas);  // Cambié '/:usuario_id' a '/:usr_id' según tu controlador


// Otras rutas para crear, obtener por id, actualizar y eliminar rutinas
router.post('/', verifyToken, createRutina);
router.get('/rutina/:rut_id', verifyToken, getRutinaById);
router.put('/rutina/:rut_id', verifyToken, updateRutina);
router.delete('/rutina/:rut_id', verifyToken, deleteRutina);

export default router;
