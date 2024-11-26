import { conmysql } from '../db.js';

// Crear una nueva notificación
export const createNotificacion = async (req, res) => {
  const { not_titulo, not_mensaje, usr_id } = req.body;

  if (!not_titulo || !not_mensaje || !usr_id) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'INSERT INTO notificaciones (not_titulo, not_mensaje, usr_id) VALUES (?, ?, ?)',
      [not_titulo, not_mensaje, usr_id]
    );
    res.status(201).json({ id: result.insertId, message: 'Notificación creada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear la notificación' });
  }
};

// Obtener todas las notificaciones de un usuario
export const getNotificaciones = async (req, res) => {
  const { usr_id } = req.params;  // Obtener el ID del usuario desde los parámetros de la URL

  if (!usr_id) {
    return res.status(400).json({ message: 'Se requiere el ID de usuario' });
  }

  try {
    const [result] = await conmysql.query(
      'SELECT * FROM notificaciones WHERE usr_id = ? ORDER BY not_fecha DESC',
      [usr_id]
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener las notificaciones' });
  }
};

// Marcar notificación como enviada
export const markNotificacionEnviada = async (req, res) => {
  const { not_id } = req.params;  // Obtener el ID de la notificación desde los parámetros

  try {
    const [result] = await conmysql.query(
      'UPDATE notificaciones SET not_estado = "enviado" WHERE not_id = ?',
      [not_id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Notificación no encontrada' });
    }

    res.json({ message: 'Notificación marcada como enviada' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al marcar la notificación' });
  }
};
