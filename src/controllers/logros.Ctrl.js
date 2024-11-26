import { conmysql } from '../db.js';

export const getLogros = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM logros');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const getLogroxid = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM logros WHERE log_id = ?', [req.params.id]);
    if (result.length <= 0) {
      return res.status(404).json({ message: 'Logro no encontrado' });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const postLogro = async (req, res) => {
  const { log_nombre, log_descripcion, usr_id } = req.body;

  if (!log_nombre || !log_descripcion || !usr_id) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [rows] = await conmysql.query(
      'INSERT INTO logros (log_nombre, log_descripcion, usr_id) VALUES (?, ?, ?)',
      [log_nombre, log_descripcion, usr_id]
    );
    res.json({ id: rows.insertId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};
