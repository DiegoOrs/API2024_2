import express from 'express';
import cors from 'cors'; // Importa CORS correctamente

// Importar rutas
import usuariosRoutes from './routes/usuarios.routes.js';
import rutinasRoutes from './routes/rutinas.routes.js';
import ejerciciosRoutes from './routes/ejercicios.routes.js';
import logrosRoutes from './routes/logros.routes.js';
import comunidadRoutes from './routes/comunidad.routes.js';
import motivacionesRoutes from './routes/motivaciones.routes.js';
import notificacionesRoutes from './routes/notificaciones.routes.js';
import rachaRoutes from './routes/racha.routes.js';
import recompensasRoutes from './routes/recompensas.routes.js';
import procesoRoutes from './routes/proceso.routes.js';

// Configurar el servidor
const app = express();

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:8100', 'https://api2024-2-2-5tn4.onrender.com'], // Dominios permitidos
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware para interpretar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/rutinas', rutinasRoutes);
app.use('/api/ejercicios', ejerciciosRoutes);
app.use('/api/logros', logrosRoutes);
app.use('/api/comunidad', comunidadRoutes);
app.use('/api/motivaciones', motivacionesRoutes);
app.use('/api/notificaciones', notificacionesRoutes);
app.use('/api/racha', rachaRoutes);
app.use('/api/recompensas', recompensasRoutes);
app.use('/api/procesos', procesoRoutes);

// Middleware para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found',
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000; // Usa variable de entorno si está disponible
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

