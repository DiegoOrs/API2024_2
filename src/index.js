import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Importar las rutas necesarias
import clienteRoutes from './routes/clientes.routes.js';
import rutinaRoutes from './routes/rutinas.routes.js';
import ejerciciosRoutes from './routes/ejercicios.routes.js';
import logrosRoutes from './routes/logros.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

// Registrar las rutas bajo el prefijo /api
app.use('/api/clientes', clienteRoutes);
app.use('/api/rutinas', rutinaRoutes);
app.use('/api/ejercicios', ejerciciosRoutes);
app.use('/api/logros', logrosRoutes);

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});