import { Router } from 'express';
import { getUsuarios, getUsarioxid, postUsuarios, login } from '../controllers/usuarios.Ctrl.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();

router.get('/usuarios', verifyToken, getUsuarios); // select
router.get('/usuarios/:id', verifyToken, getUsarioxid); // Obtener un usuario por id
router.post('/usuarios', postUsuarios); // Crear un usuario
router.post('/login', login); // login

export default router;
