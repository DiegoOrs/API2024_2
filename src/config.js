import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

export const PORT = process.env.PORT || 3000;  // Usará el puerto del .env o 3000 por defecto
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_DATABASE = process.env.DB_DATABASE || 'bd_curso20246';  // Ajusta el nombre de la base de datos si es necesario
export const JWT_SECRET = process.env.JWT_SECRET || 'microhub';