import express from 'express';
import {
  createProceso,
  getProcesos,
  getProcesoById,
  updateProceso,
  deleteProceso,
  getAllProcesos,  // Asegúrate de importar la nueva función
} from '../controllers/proceso.controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Crear un nuevo proceso
router.post('/',  createProceso);

// Obtener todos los procesos de un usuario
router.get('/usuario/:usr_id',  getProcesos);

// Obtener todos los procesos (sin filtro por usuario)
router.get('/',  getAllProcesos);  // Nueva ruta para obtener todos los procesos

// Obtener un proceso por su ID
router.get('/:pro_id',  getProcesoById);

// Actualizar un proceso
router.put('/:pro_id',  updateProceso);

// Eliminar un proceso
router.delete('/:pro_id',  deleteProceso);

export default router;
