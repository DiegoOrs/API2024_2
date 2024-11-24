import mysql from 'mysql2/promise'; // Cambiar a mysql2/promise

// Crear la conexión a la base de datos
const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'db_curso2024',
  port: process.env.DB_PORT || 3306,
});

// Exportar la conexión
export default connection;
