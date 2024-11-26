import express from 'express';
import {
  createProceso,
  getProcesos,
  getProcesoById,
  updateProceso,
  deleteProceso,
} from '../controllers/proceso.controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Crear un nuevo proceso
router.post('/', verifyToken, createProceso);

// Obtener todos los procesos de un usuario
router.get('/usuario/:usr_id', verifyToken, getProcesos);

// Obtener un proceso por su ID
router.get('/:pro_id', verifyToken, getProcesoById);

// Actualizar un proceso
router.put('/:pro_id', verifyToken, updateProceso);

// Eliminar un proceso
router.delete('/:pro_id', verifyToken, deleteProceso);

export default router;
