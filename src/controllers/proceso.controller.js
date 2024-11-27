import { conmysql } from '../db.js';

// Crear un nuevo proceso
export const createProceso = async (req, res) => {
  const { pro_nombre, pro_descripcion, pro_estado, usr_id, fecha_inicio, fecha_fin } = req.body;

  if (!pro_nombre || !fecha_inicio || !usr_id) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      `INSERT INTO procesos (pro_nombre, pro_descripcion, pro_estado, usr_id, fecha_inicio, fecha_fin) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [pro_nombre, pro_descripcion, pro_estado, usr_id, fecha_inicio, fecha_fin]
    );
    res.status(201).json({ message: 'Proceso creado exitosamente', id: result.insertId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear el proceso' });
  }
};

// Obtener todos los procesos de un usuario
export const getProcesos = async (req, res) => {
  const { usr_id } = req.params;


  console.log("ID del usuario recibido:", usr_id);  // Agrega esta línea para depurar

  try {
    const [procesos] = await conmysql.query('SELECT * FROM procesos WHERE usr_id = ?', [usr_id]);
    console.log("Procesos encontrados:", procesos);  // Agrega esta línea para verificar la respuesta de la base de datos

    if (procesos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron procesos para este usuario' });
    }
    res.json(procesos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener los procesos' });
  }
};

// Obtener un proceso por su ID
export const getProcesoById = async (req, res) => {
  const { pro_id } = req.params;

  try {
    const [proceso] = await conmysql.query('SELECT * FROM procesos WHERE pro_id = ?', [pro_id]);
    if (proceso.length === 0) {
      return res.status(404).json({ message: 'Proceso no encontrado' });
    }
    res.json(proceso[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener el proceso' });
  }
};

// Actualizar un proceso
export const updateProceso = async (req, res) => {
  const { pro_id } = req.params;
  const { pro_nombre, pro_descripcion, pro_estado, fecha_inicio, fecha_fin } = req.body;

  if (!pro_nombre || !fecha_inicio || !pro_estado) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [result] = await conmysql.query(
      'UPDATE procesos SET pro_nombre = ?, pro_descripcion = ?, pro_estado = ?, fecha_inicio = ?, fecha_fin = ? WHERE pro_id = ?',
      [pro_nombre, pro_descripcion, pro_estado, fecha_inicio, fecha_fin, pro_id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Proceso no encontrado' });
    }
    res.json({ message: 'Proceso actualizado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar el proceso' });
  }
};

// Eliminar un proceso
export const deleteProceso = async (req, res) => {
  const { pro_id } = req.params;

  try {
    const [result] = await conmysql.query('DELETE FROM procesos WHERE pro_id = ?', [pro_id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Proceso no encontrado' });
    }
    res.json({ message: 'Proceso eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar el proceso' });
  }

};
// Obtener todos los procesos
export const getAllProcesos = async (req, res) => {
  try {
    const [procesos] = await conmysql.query('SELECT * FROM procesos');
    res.json(procesos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener los procesos' });
  }
};
