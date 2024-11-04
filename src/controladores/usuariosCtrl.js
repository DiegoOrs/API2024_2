import {conmysql} from '../db.js'
import bcrypt from 'bcryptjs'; 
export const getUsuarios = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM usuarios');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error al consultar" });
    }
};

export const getUsuariosxId = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM usuarios WHERE user_id = ?', [req.params.id]);
        if (result.length <= 0) return res.status(404).json({
            user_id: 0,
            message: "Usuario no encontrado"
        });
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

export const postUsuario = async (req, res) => {
    try {
        const { user_identificacion, user_nombre, user_correo, user_password } = req.body;
        
    
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user_password, saltRounds);
        
        const [rows] = await conmysql.query(
            'INSERT INTO usuarios (user_identificacion, user_nombre, user_correo, user_password) VALUES (?, ?, ?, ?)', 
            [user_identificacion, user_nombre, user_correo, hashedPassword]
        );

        res.send({
            id: rows.insertId
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

export const putUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_identificacion, user_nombre, user_correo, user_password } = req.body;
        let hashedPassword = user_password;
        if (user_password) {
            const saltRounds = 10;
            hashedPassword = await bcrypt.hash(user_password, saltRounds);
        }

        const [result] = await conmysql.query(
            'UPDATE usuarios SET user_identificacion = ?, user_nombre = ?, user_correo = ?, user_password = ? WHERE user_id = ?', 
            [user_identificacion, user_nombre, user_correo, hashedPassword, id]
        );

        if (result.affectedRows <= 0) return res.status(404).json({ message: 'Usuario no encontrado' });

        const [rows] = await conmysql.query('SELECT * FROM usuarios WHERE user_id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del servidor' });
    }
};


