import { Router } from 'express';
import { createNotificacion, getNotificaciones, markNotificacionEnviada } from '../controllers/notificaciones.controller.js';

const router = Router();

// Ruta para crear una nueva notificación
router.post('/notificaciones', createNotificacion);

// Ruta para obtener todas las notificaciones de un usuario
router.get('/notificaciones/:usr_id', getNotificaciones);

// Ruta para marcar una notificación como enviada
router.put('/notificaciones/enviar/:not_id', markNotificacionEnviada);

export default router;
