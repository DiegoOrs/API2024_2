import db from '../db.js';

export const getRutinas = async () => {
  const [rows] = await db.query('SELECT * FROM rutinas');
  return rows;
};

export const getRutinaById = async (id) => {
  const [rows] = await db.query('SELECT * FROM rutinas WHERE rut_id = ?', [id]);
  return rows[0];
};

export const createRutina = async (rutina) => {
  const [result] = await db.query('INSERT INTO rutinas SET ?', [rutina]);
  return result.insertId;
};

export const updateRutina = async (id, rutina) => {
  const [result] = await db.query('UPDATE rutinas SET ? WHERE rut_id = ?', [rutina, id]);
  return result.affectedRows;
};

export const deleteRutina = async (id) => {
  const [result] = await db.query('DELETE FROM rutinas WHERE rut_id = ?', [id]);
  return result.affectedRows;
};
