import db from '../db.js';



export const getClientes = async () => {
  const [rows] = await db.query('SELECT * FROM clientes');
  return rows;
};

export const getClienteById = async (id) => {
  const [rows] = await db.query('SELECT * FROM clientes WHERE cli_id = ?', [id]);
  return rows[0];
};

export const createCliente = async (cliente) => {
  const [result] = await db.query('INSERT INTO clientes SET ?', [cliente]);
  return result.insertId;
};

export const updateCliente = async (id, cliente) => {
  const [result] = await db.query('UPDATE clientes SET ? WHERE cli_id = ?', [cliente, id]);
  return result.affectedRows;
};

export const deleteCliente = async (id) => {
  const [result] = await db.query('DELETE FROM clientes WHERE cli_id = ?', [id]);
  return result.affectedRows;
};
