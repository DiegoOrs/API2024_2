import { Router } from 'express';
import * as ClienteController from '../controllers/clientes.controller.js';

const router = Router();

// Rutas para clientes
router.get('/', ClienteController.getClientes); // GET /api/clientes
router.get('/:id', ClienteController.getClienteById); // GET /api/clientes/:id
router.post('/', ClienteController.createCliente); // POST /api/clientes
router.put('/:id', ClienteController.updateCliente); // PUT /api/clientes/:id
router.delete('/:id', ClienteController.deleteCliente); // DELETE /api/clientes/:id

export default router;
