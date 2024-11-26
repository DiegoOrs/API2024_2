import { conmysql } from '../db.js';

// Crear una nueva racha
export const createRacha = async (req, res) => {
    const { usuario_id, dias_consecutivos, fecha_inicio, fecha_ultima } = req.body;
  
    if (!usuario_id || !dias_consecutivos || !fecha_inicio || !fecha_ultima) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }
  
    try {
      const [result] = await conmysql.query(
        'INSERT INTO rachas (usuario_id, dias_consecutivos, fecha_inicio, fecha_ultima) VALUES (?, ?, ?, ?)',
        [usuario_id, dias_consecutivos, fecha_inicio, fecha_ultima]
      );
  
      res.status(201).json({ message: 'Racha creada exitosamente', id: result.insertId });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear la racha' });
    }
  };
  
// Obtener una racha por usuario
export const getRacha = async (req, res) => {
  const { usuario_id } = req.params;

  if (!usuario_id) {
    return res.status(400).json({ message: 'Se requiere el ID de usuario' });
  }

  try {
    const [result] = await conmysql.query(
      'SELECT * FROM rachas WHERE usuario_id = ?',
      [usuario_id]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: 'No se encontró la racha del usuario' });
    }

    res.json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener la racha' });
  }
};

// Actualizar una racha existente
export const updateRacha = async (req, res) => {
  const { usuario_id, dias_consecutivos, fecha_ultima } = req.body;

  if (!usuario_id || !dias_consecutivos || !fecha_ultima) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'UPDATE rachas SET dias_consecutivos = ?, fecha_ultima = ? WHERE usuario_id = ?',
      [dias_consecutivos, fecha_ultima, usuario_id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'No se encontró la racha para actualizar' });
    }

    res.status(200).json({ message: 'Racha actualizada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar la racha' });
  }
};

// Eliminar una racha
export const deleteRacha = async (req, res) => {
  const { usuario_id } = req.params;

  if (!usuario_id) {
    return res.status(400).json({ message: 'Se requiere el ID de usuario' });
  }

  try {
    const [result] = await conmysql.query(
      'DELETE FROM rachas WHERE usuario_id = ?',
      [usuario_id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'No se encontró la racha para eliminar' });
    }

    res.status(200).json({ message: 'Racha eliminada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar la racha' });
  }
};
