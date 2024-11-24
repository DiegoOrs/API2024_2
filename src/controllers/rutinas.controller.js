import * as Rutina from '../models/rutinas.model.js';

export const getRutinas = async (req, res) => {
  try {
    const rutinas = await Rutina.getRutinas();
    res.json(rutinas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRutinaById = async (req, res) => {
  const { id } = req.params;
  try {
    const rutina = await Rutina.getRutinaById(id);
    if (rutina) {
      res.json(rutina);
    } else {
      res.status(404).json({ message: 'Rutina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRutina = async (req, res) => {
  const rutina = req.body;
  try {
    const id = await Rutina.createRutina(rutina);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRutina = async (req, res) => {
  const { id } = req.params;
  const rutina = req.body;
  try {
    const result = await Rutina.updateRutina(id, rutina);
    if (result > 0) {
      res.json({ message: 'Rutina actualizada' });
    } else {
      res.status(404).json({ message: 'Rutina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRutina = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Rutina.deleteRutina(id);
    if (result > 0) {
      res.json({ message: 'Rutina eliminada' });
    } else {
      res.status(404).json({ message: 'Rutina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
