import { conmysql } from '../db.js';

// Crear una nueva motivación
export const createMotivacion = async (req, res) => {
  const { mot_frase, usr_id } = req.body;

  if (!mot_frase || !usr_id) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'INSERT INTO motivaciones (mot_frase, usr_id) VALUES (?, ?)',
      [mot_frase, usr_id]
    );
    res.status(201).json({ id: result.insertId, message: 'Motivación creada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear la motivación' });
  }
};

// Obtener todas las motivaciones
export const getMotivaciones = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM motivaciones ORDER BY mot_fecha DESC');
    res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener las motivaciones' });
  }
};
