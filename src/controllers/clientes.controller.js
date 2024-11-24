import * as Cliente from '../models/clientes.model.js';

export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.getClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.getClienteById(id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  const cliente = req.body;
  try {
    const id = await Cliente.createCliente(cliente);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  const { id } = req.params;
  const cliente = req.body;
  try {
    const result = await Cliente.updateCliente(id, cliente);
    if (result > 0) {
      res.json({ message: 'Cliente actualizado' });
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Cliente.deleteCliente(id);
    if (result > 0) {
      res.json({ message: 'Cliente eliminado' });
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

