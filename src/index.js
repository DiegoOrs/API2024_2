import express from 'express';
import cors from 'cors'; // Importa los paquetes CORS para manejar accesos cruzados

// Importa las rutas
import usuariosRoutes from './routes/usuarios.routes.js';
import ejerciciosRoutes from './routes/ejercicios.routes.js';
import comunidadRoutes from './routes/comunidad.routes.js';
import motivacionesRoutes from './routes/motivaciones.routes.js';
import notificacionesRoutes from './routes/notificaciones.routes.js';
import rachaRoutes from './routes/racha.routes.js';
import recompensasRoutes from './routes/recompensas.routes.js';
import rutinasRoutes from './routes/rutinas.routes.js';
import procesoRoutes from './routes/proceso.routes.js';

// Inicializa la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:8100', 'https://api2024-2-2-5tn4.onrender.com'], // Solo dominios
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Métodos permitidos
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Rutas: Define un prefijo claro para cada grupo de rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/ejercicios', ejerciciosRoutes);
app.use('/api/comunidad', comunidadRoutes);
app.use('/api/motivaciones', motivacionesRoutes);
app.use('/api/notificaciones', notificacionesRoutes);
app.use('/api/rachas', rachaRoutes);
app.use('/api/recompensas', recompensasRoutes);
app.use('/api/rutinas', rutinasRoutes);
app.use('/api/procesos', procesoRoutes);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
