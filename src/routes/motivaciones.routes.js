import { Router } from 'express';
import { createMotivacion, getMotivaciones } from '../controllers/motivaciones.controller.js';

const router = Router();

// Ruta para crear una nueva motivación
router.post('/motivaciones', createMotivacion);

// Ruta para obtener todas las motivaciones
router.get('/motivaciones', getMotivaciones);

export default router;
