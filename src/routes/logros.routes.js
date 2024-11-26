import { Router } from 'express';
import { getLogros, getLogroxid, postLogro } from '../controllers/logros.Ctrl.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();

router.get('/logros', verifyToken, getLogros); // Obtener todos los logros
router.get('/logros/:id', verifyToken, getLogroxid); // Obtener un logro por id
router.post('/logros', verifyToken, postLogro); // Crear un logro

export default router;
