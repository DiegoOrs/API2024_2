import db from '../db.js';

export const getEjercicios = async () => {
  const [rows] = await db.query('SELECT * FROM ejercicios');
  return rows;
};


export const getEjercicioById = async (id) => {
  const [rows] = await db.query('SELECT * FROM ejercicios WHERE eje_id = ?', [id]);
  return rows[0];
};

export const createEjercicio = async (ejercicio) => {
  const [result] = await db.query('INSERT INTO ejercicios SET ?', [ejercicio]);
  return result.insertId;
};

export const updateEjercicio = async (id, ejercicio) => {
  const [result] = await db.query('UPDATE ejercicios SET ? WHERE eje_id = ?', [ejercicio, id]);
  return result.affectedRows;
};

export const deleteEjercicio = async (id) => {
  const [result] = await db.query('DELETE FROM ejercicios WHERE eje_id = ?', [id]);
  return result.affectedRows;
};
