import { conmysql } from '../db.js';

// Crear una nueva rutina
export const createRutina = async (req, res) => {
  const { rut_nombre, rut_descripcion, tipo, usr_id } = req.body;

  if (!rut_nombre || !tipo || !usr_id) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'INSERT INTO rutinas (rut_nombre, rut_descripcion, tipo, usr_id) VALUES (?, ?, ?, ?)',
      [rut_nombre, rut_descripcion, tipo, usr_id]
    );
    res.status(201).json({ id: result.insertId, message: 'Rutina registrada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al registrar la rutina' });
  }
};

// Obtener todas las rutinas de un usuario
export const getRutinas = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const [rutinas] = await conmysql.query('SELECT * FROM rutinas WHERE usr_id = ?', [usuario_id]);
    if (rutinas.length === 0) {
      return res.status(404).json({ message: 'No se encontraron rutinas para este usuario' });
    }
    res.json(rutinas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener las rutinas' });
  }
};

// Obtener una rutina por su ID
export const getRutinaById = async (req, res) => {
  const { rut_id } = req.params;

  try {
    const [rutina] = await conmysql.query('SELECT * FROM rutinas WHERE rut_id = ?', [rut_id]);
    if (rutina.length === 0) {
      return res.status(404).json({ message: 'Rutina no encontrada' });
    }
    res.json(rutina[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener la rutina' });
  }
};

// Actualizar una rutina
export const updateRutina = async (req, res) => {
  const { rut_id } = req.params;
  const { rut_nombre, rut_descripcion, rut_frecuencia } = req.body;

  if (!rut_nombre || !rut_frecuencia) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'UPDATE rutinas SET rut_nombre = ?, rut_descripcion = ?, rut_frecuencia = ? WHERE rut_id = ?',
      [rut_nombre, rut_descripcion, rut_frecuencia, rut_id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Rutina no encontrada' });
    }
    res.json({ message: 'Rutina actualizada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar la rutina' });
  }
};

// Eliminar una rutina
export const deleteRutina = async (req, res) => {
  const { rut_id } = req.params;

  try {
    const [result] = await conmysql.query('DELETE FROM rutinas WHERE rut_id = ?', [rut_id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Rutina no encontrada' });
    }
    res.json({ message: 'Rutina eliminada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar la rutina' });
  }
};
