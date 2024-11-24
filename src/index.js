
import * as RutinaController from './controllers/rutinas.controller.js';  // Importa el controlador
import clienteRoutes from './routes/clientes.routes.js';
import rutinaRoutes from './routes/rutinas.routes.js';
import ejericiosRoutes from './routes/ejercicios.routes.js';
import express from 'express';
import clientesRoutes from './routes/clientes.routes.js';
import ejerciciosRoutes from './routes/ejercicios.routes.js';
import logrosRoutes from './routes/logros.routes.js'; // Importa las rutas de logros
import rutinasRoutes from './routes/rutinas.routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express();

app.use(express.json());

// Aquí registras tus rutas
app.use('/api/ejericios', ejericiosRoutes);
app.use('/api/rutinas', rutinaRoutes);
app.use('/api/clientes', clienteRoutes);

app.use('/api/ejercicios', ejerciciosRoutes);
app.use('/api/logros', logrosRoutes); // Prefijo necesario
app.use('/api/rutinas', rutinasRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
