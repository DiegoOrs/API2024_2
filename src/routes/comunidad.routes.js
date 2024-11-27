import { Router } from 'express';
import { createComunidad, getComunidad, getComunidadById } from '../controllers/comunidad.controller.js';

const router = Router();

// Ruta para crear una nueva publicación en la comunidad
router.post('/comunidad', createComunidad);

// Ruta para obtener todas las publicaciones de la comunidad
router.get('/comunidad', getComunidad);

// Ruta para obtener una publicación específica por ID
router.get('/comunidad/:id', getComunidadById);

export default router;
