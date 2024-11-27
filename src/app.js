import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';
import rutinasRoutes from './routes/rutinas.routes.js';
import ejerciciosRoutes from './routes/ejercicios.routes.js'; // Agregado
import logrosRoutes from './routes/logros.routes.js'; // Agregado
import bodyParser from 'body-parser';
import comunidadRoutes from './routes/comunidad.routes.js';
import motivacionesRoutes from './routes/motivaciones.routes.js';
import notificacionesRoutes from './routes/notificaciones.routes.js';
import rachaRoutes from './routes/racha.routes.js';
import recompensasRoutes from './routes/recompensas.routes.js';
import rutinasRoutes from './routes/rutinas.routes.js';
import procesoRoutes from './routes/proceso.routes.js';

const express = require('express');
const cors = require('cors');
const app = express();

// Permitir solicitudes de un dominio específico
app.use(cors({
    origin: 'http://localhost:8100', // Cambia esto al dominio de tu frontend en producción
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeceras permitidas
}));

app.use(bodyParser.json());
app.use('/api', usuariosRoutes);
app.use('/api', rutinasRoutes);
app.use('/api', ejerciciosRoutes); // Agregado
app.use('/api', logrosRoutes); // Agregado
app.use('/api', comunidadRoutes);
app.use('/api', motivacionesRoutes);
app.use('/api', notificacionesRoutes);
app.use('/api', rachaRoutes);
app.use('/api', recompensasRoutes);
app.use('/api', rutinasRoutes);
app.use('/api/procesos', procesoRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
