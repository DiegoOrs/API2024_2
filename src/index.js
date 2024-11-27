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
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const corsOptions = {
  origin: ['http://localhost:8100', 'https://api2024-2-2-5tn4.onrender.com/api/'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // Para que interprete los objetos JSON
app.use(express.urlencoded({ extended: true })); // Se añade para poder receptar formularios

// Rutas
app.use('/api', usuariosRoutes); // Rutas de usuarios bajo el prefijo /api
app.use('/api', ejerciciosRoutes);
app.use('/api', comunidadRoutes);
app.use('/api', motivacionesRoutes);
app.use('/api', notificacionesRoutes);
app.use('/api/rachas', rachaRoutes);
app.use('/api/recompensas', recompensasRoutes);
app.use('/api/rutinas', rutinasRoutes);
app.use('/api/procesos', procesoRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
