import { conmysql } from '../db.js';

// Crear una nueva publicación en la comunidad
export const createComunidad = async (req, res) => {
  const { tipo, contenido, usr_id } = req.body;

  if (!tipo || !contenido || !usr_id) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
        "INSERT INTO comunidad (usr_id, contenido, tipo) VALUES (?, ?, ?)",
        [usr_id, contenido, tipo]
      );
    res.status(201).json({ id: result.insertId, message: 'Publicación creada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear la publicación' });
  }
};

// Obtener todas las publicaciones de la comunidad
export const getComunidad = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM comunidad ORDER BY fecha_publicacion DESC');
    res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener las publicaciones' });
  }
};
// Obtener una publicación específica por ID
export const getComunidadById = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await conmysql.query('SELECT * FROM comunidad WHERE id = ?', [id]);
    
    if (result.length === 0) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    }

    res.json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener la publicación' });
  }
};
