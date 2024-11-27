import { conmysql } from '../db.js';  // Conexión con la base de datos

// Crear un nuevo ejercicio
export const createEjercicio = async (req, res) => {
  const { eje_nombre, eje_descripcion, eje_duracion, eje_fecha, usr_id } = req.body;

  if (!eje_nombre || !eje_duracion || !eje_fecha || !usr_id) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'INSERT INTO ejercicios (eje_nombre, eje_descripcion, eje_duracion, eje_fecha, usr_id) VALUES (?, ?, ?, ?, ?)',
      [eje_nombre, eje_descripcion, eje_duracion, eje_fecha, usr_id]
    );
    res.status(201).json({ id: result.insertId, message: 'Ejercicio registrado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al registrar el ejercicio' });
  }
};

// Obtener todos los ejercicios de un usuario
export const getEjercicios = async (req, res) => {
  const { usr_id } = req.params;

  try {
    const [result] = await conmysql.query('SELECT * FROM ejercicios WHERE usr_id = ?', [usr_id]);
    if (result.length <= 0) {
      return res.status(404).json({ message: 'No se encontraron ejercicios' });
    }
    res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener los ejercicios' });
  }
};

// Obtener un ejercicio por ID
export const getEjercicioById = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await conmysql.query('SELECT * FROM ejercicios WHERE eje_id = ?', [id]);
    if (result.length <= 0) {
      return res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener el ejercicio' });
  }
};

// Actualizar un ejercicio
export const updateEjercicio = async (req, res) => {
  const { id } = req.params;
  const { eje_nombre, eje_descripcion, eje_duracion, eje_fecha } = req.body;

  if (!eje_nombre || !eje_duracion || !eje_fecha) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'UPDATE ejercicios SET eje_nombre = ?, eje_descripcion = ?, eje_duracion = ?, eje_fecha = ? WHERE eje_id = ?',
      [eje_nombre, eje_descripcion, eje_duracion, eje_fecha, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
    
    res.json({ message: 'Ejercicio actualizado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar el ejercicio' });
  }
};

// Eliminar un ejercicio
export const deleteEjercicio = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await conmysql.query('DELETE FROM ejercicios WHERE eje_id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
    
    res.json({ message: 'Ejercicio eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar el ejercicio' });
  }
};

// Obtener todos los ejercicios de todos los usuarios
export const getAllEjercicios = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM ejercicios');
    res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener los ejercicios' });
  }
};
