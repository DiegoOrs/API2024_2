import { Router } from 'express';
import { createComunidad, getComunidad } from '../controllers/comunidad.controller.js';

const router = Router();

// Ruta para crear una nueva publicación en la comunidad
router.post('/comunidad', createComunidad);

// Ruta para obtener todas las publicaciones de la comunidad
router.get('/comunidad', getComunidad);

export default router;
