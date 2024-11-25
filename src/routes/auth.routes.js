import express from 'express';
import { login, register } from '../controllers/auth.controller.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para el login
router.post('/login', login);

// Ruta para el registro
router.post('/register', register);

export default router;
