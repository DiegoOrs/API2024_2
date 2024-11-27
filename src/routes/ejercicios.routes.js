import { Router } from 'express';
import {
  createEjercicio,
  getEjercicios,
  getEjercicioById,
  updateEjercicio,
  deleteEjercicio,
  getAllEjercicios, // Importa la nueva función
} from '../controllers/ejercicios.Ctrl.js';

const router = Router();

// Crear un ejercicio
router.post('/ejercicios', createEjercicio);

// Obtener todos los ejercicios de un usuario
router.get('/ejercicios/:usr_id', getEjercicios);

// Obtener todos los ejercicios de todos los usuarios
router.get('/ejercicios', getAllEjercicios); // Nueva ruta

// Obtener un ejercicio por ID
router.get('/ejercicio/:id', getEjercicioById);

// Actualizar un ejercicio
router.put('/ejercicio/:id', updateEjercicio);

// Eliminar un ejercicio
router.delete('/ejercicio/:id', deleteEjercicio);

export default router;
