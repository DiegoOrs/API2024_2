import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js'; // Importa las rutas de usuarios
import ejerciciosRoutes from './routes/ejercicios.routes.js'; // Importa las rutas de usuarios
import comunidadRoutes from './routes/comunidad.routes.js';
import motivacionesRoutes from './routes/motivaciones.routes.js';
import notificacionesRoutes from './routes/notificaciones.routes.js';
import rachaRoutes from './routes/racha.routes.js'; // Importa las rutas de rachas
import recompensasRoutes from './routes/recompensas.routes.js';
import rutinasRoutes from './routes/rutinas.routes.js';
import procesoRoutes from './routes/proceso.routes.js';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', usuariosRoutes); // Rutas de usuarios bajo el prefijo /api
app.use('/api', ejerciciosRoutes);
app.use('/api', comunidadRoutes);
app.use('/api', motivacionesRoutes);
app.use('/api', notificacionesRoutes);
app.use('/api/rachas', rachaRoutes);
app.use('/api/recompensas', recompensasRoutes);
app.use('/api', rutinasRoutes);
app.use('/api/procesos', procesoRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
