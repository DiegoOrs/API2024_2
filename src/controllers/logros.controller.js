import * as Logro from '../models/logros.model.js';


export const getLogros = async (req, res) => {
  try {
    const logros = await Logro.getLogros(); // Llama al modelo para obtener datos
    res.json(logros); // Responde con los datos en formato JSON
  } catch (error) {
    console.error(error); // Muestra el error en consola
    res.status(500).json({ message: 'Error al obtener los logros' });
  }
};


export const getLogroById = async (req, res) => {
  const { id } = req.params;
  try {
    const logro = await Logro.getLogroById(id);
    if (logro) {
      res.json(logro);
    } else {
      res.status(404).json({ message: 'Logro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLogro = async (req, res) => {
  const logro = req.body;
  try {
    const id = await Logro.createLogro(logro);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLogro = async (req, res) => {
  const { id } = req.params;
  const logro = req.body;
  try {
    const result = await Logro.updateLogro(id, logro);
    if (result > 0) {
      res.json({ message: 'Logro actualizado' });
    } else {
      res.status(404).json({ message: 'Logro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteLogro = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Logro.deleteLogro(id);
    if (result > 0) {
      res.json({ message: 'Logro eliminado' });
    } else {
      res.status(404).json({ message: 'Logro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
