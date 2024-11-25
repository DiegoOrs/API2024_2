import db from '../config/db.js'; // Asegúrate de que esta ruta es correcta

// Login
export const login = (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM tb_clientes WHERE cli_nombre = ? AND cli_telefono = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).send({ message: 'Error en el servidor' });
    if (results.length > 0) {
      res.send({ message: 'Login exitoso', cliente: results[0] });
    } else {
      res.status(401).send({ message: 'Usuario o contraseña incorrectos' });
    }
  });
};

// Registro
export const register = (req, res) => {
  const { cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad } = req.body;
  const sql = 'INSERT INTO tb_clientes (cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad], (err, results) => {
    if (err) return res.status(500).send({ message: 'Error en el servidor' });
    res.send({ message: 'Registro exitoso', clienteId: results.insertId });
  });
};
