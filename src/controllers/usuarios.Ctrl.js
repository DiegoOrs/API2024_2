import { conmysql } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM usuarios');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Obtener un usuario por su ID
export const getUsarioxid = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM usuarios WHERE usr_id = ?', [req.params.id]);
    if (result.length <= 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Registrar un nuevo usuario (ajustado)
export const postUsuarios = async (req, res) => {
  const { usr_nombre, usr_correo, usr_usuario, usr_clave } = req.body;

  if (!usr_nombre || !usr_correo || !usr_usuario || !usr_clave) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(usr_clave, saltRounds);

    const [rows] = await conmysql.query(
      'INSERT INTO usuarios (usr_nombre, usr_correo, usr_usuario, usr_clave) VALUES (?, ?, ?, ?)',
      [usr_nombre, usr_correo, usr_usuario, hashedPassword]
    );

    res.json({ id: rows.insertId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};



// Login (inicio de sesión)
export const login = async (req, res) => {
  const { usr_usuario, usr_clave } = req.body;

  if (!usr_usuario || !usr_clave) {
    return res.status(400).json({ message: 'Por favor ingrese usuario y contraseña' });
  }

  try {
    const [user] = await conmysql.query('SELECT * FROM usuarios WHERE usr_usuario = ?', [usr_usuario]);
    if (!user.length) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(usr_clave, user[0].usr_clave);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña inválida' });
    }

    const token = jwt.sign({ id: user[0].usr_id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ auth: true, token, usr_id: user[0].usr_id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};