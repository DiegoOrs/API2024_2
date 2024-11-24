import db from '../db.js';

export const getLogros = async () => {
  const [rows] = await db.query('SELECT * FROM logros'); // Consulta para obtener los logros
  return rows; // Devuelve los resultados de la consulta
};

export const getLogroById = async (id) => {
  const [rows] = await db.query('SELECT * FROM logros WHERE log_id = ?', [id]);
  return rows[0];
};

export const createLogro = async (logro) => {
  const [result] = await db.query('INSERT INTO logros SET ?', [logro]);
  return result.insertId;
};

export const updateLogro = async (id, logro) => {
  const [result] = await db.query('UPDATE logros SET ? WHERE log_id = ?', [logro, id]);
  return result.affectedRows;
};

export const deleteLogro = async (id) => {
  const [result] = await db.query('DELETE FROM logros WHERE log_id = ?', [id]);
  return result.affectedRows;
};
