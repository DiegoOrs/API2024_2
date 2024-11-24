import express from 'express';
import clientesRoutes from './routes/clientes.routes.js';
import ejerciciosRoutes from './routes/ejercicios.routes.js';
import logrosRoutes from './routes/logros.routes.js'; // Importa las rutas de logros
import rutinasRoutes from './routes/rutinas.routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import logrosRoutes from './routes/logros.routes.js'; 

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Agrega los prefijos correspondientes

app.use('/api/ejercicios', ejerciciosRoutes);
app.use('/api/logros', logrosRoutes); // Prefijo necesario
app.use('/api/rutinas', rutinasRoutes);

app.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
