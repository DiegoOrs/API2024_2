import * as Ejercicio from '../models/ejercicios.model.js';



export const getEjercicios = async (req, res) => {
  try {
    const ejercicios = await Ejercicio.getEjercicios();
    res.json(ejercicios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getEjercicioById = async (req, res) => {
  const { id } = req.params;
  try {
    const ejercicio = await Ejercicio.getEjercicioById(id);
    if (ejercicio) {
      res.json(ejercicio);
    } else {
      res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEjercicio = async (req, res) => {
  const ejercicio = req.body;
  try {
    const id = await Ejercicio.createEjercicio(ejercicio);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEjercicio = async (req, res) => {
  const { id } = req.params;
  const ejercicio = req.body;
  try {
    const result = await Ejercicio.updateEjercicio(id, ejercicio);
    if (result > 0) {
      res.json({ message: 'Ejercicio actualizado' });
    } else {
      res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEjercicio = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Ejercicio.deleteEjercicio(id);
    if (result > 0) {
      res.json({ message: 'Ejercicio eliminado' });
    } else {
      res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
