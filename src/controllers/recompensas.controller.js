import { conmysql } from '../db.js';

// Obtener todas las recompensas de un usuario
export const getRecompensasByUsuario = async (req, res) => {
  const { usuario_id } = req.params;

  if (!usuario_id) {
    return res.status(400).json({ message: 'Se requiere el ID del usuario' });
  }

  try {
    const [result] = await conmysql.query(
      'SELECT * FROM recompensas WHERE usuario_id = ?',
      [usuario_id]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: 'No se encontraron recompensas para el usuario' });
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener las recompensas' });
  }
};

// Crear una nueva recompensa para un usuario
export const createRecompensa = async (req, res) => {
  const { nombre, descripcion, usuario_id, fecha_obtenida } = req.body;

  if (!nombre || !usuario_id || !fecha_obtenida) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'INSERT INTO recompensas (nombre, descripcion, usuario_id, fecha_obtenida) VALUES (?, ?, ?, ?)',
      [nombre, descripcion, usuario_id, fecha_obtenida]
    );

    res.status(201).json({ id: result.insertId, message: 'Recompensa creada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear la recompensa' });
  }
};

// Actualizar una recompensa existente
export const updateRecompensa = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, fecha_obtenida } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Se requiere el ID de la recompensa' });
  }

  try {
    const [result] = await conmysql.query(
      'UPDATE recompensas SET nombre = ?, descripcion = ?, fecha_obtenida = ? WHERE id = ?',
      [nombre, descripcion, fecha_obtenida, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'No se encontró la recompensa para actualizar' });
    }

    res.status(200).json({ message: 'Recompensa actualizada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar la recompensa' });
  }
};

// Eliminar una recompensa
export const deleteRecompensa = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Se requiere el ID de la recompensa' });
  }

  try {
    const [result] = await conmysql.query('DELETE FROM recompensas WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'No se encontró la recompensa para eliminar' });
    }

    res.status(200).json({ message: 'Recompensa eliminada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar la recompensa' });
  }
};
// Obtener todas las recompensas
export const getAllRecompensas = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM recompensas');
    res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener las recompensas' });
  }
};
