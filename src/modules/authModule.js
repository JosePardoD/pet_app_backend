import { pool } from '../db.js'; // Importa el pool de conexiones a MySQL
import jwt from 'jsonwebtoken'; // Para generar tokens JWT

const secretKey = 'tu_clave_secreta_aqui'; // Debería estar en variables de entorno

export async function login(req, res) {
  const { Email, Contrasena } = req.body; // Obtiene nombre y apellido del cuerpo de la solicitud
  console.log(Email, Contrasena);

  try {
    // Busca el usuario en la base de datos por nombre y apellido
    const query = 'SELECT * FROM Usuarios WHERE Email = ? AND Contrasena = ?';
    const [rows] = await pool.query(query, [Email, Contrasena]);

    if (rows.length > 0) {
      const user = rows[0];
      console.log(user);

      // Crear el token JWT usando una clave secreta y estableciendo un tiempo de expiración
      const token = jwt.sign({ UsuarioID: user.UsuarioID, Email: user.Email,Contrasena: user.Contrasena }, secretKey, { expiresIn: '1h' });
      
      // Enviar el token y el ID del usuario al cliente
      res.json({ token, UsuarioID: user.UsuarioID });
    } else {
      // Acceso no autorizado si no se encuentra el usuario
      res.sendStatus(401);
    }
  } catch (error) {
    // Error de servidor
    console.error("Error de autenticación:", error.message);
    res.status(500).send("Error interno del servidor");
  }
}


/*

import { pool } from '../db.js'; // Importa el pool de conexiones a MySQL
import jwt from 'jsonwebtoken'; // Para generar tokens JWT

export async function login(req, res) {
  const {Email,Contrasena} = req.body; // Obtiene nombre y apellido del cuerpo de la solicitud
  console.log(Email,Contrasena)

  try {
    // Busca el usuario en la base de datos por nombre y apellido
    const query = 'SELECT * FROM Usuarios WHERE Email = ? AND Contrasena = ?';
    const [rows] = await pool.query(query, [Email, Contrasena]);

  
    
    if (rows.length > 0) {
      const user = rows[0];
      console.log(user)
      // Crear el token JWT usando una clave secreta y estableciendo un tiempo de expiración
      const secretKey = 'tu_clave_secreta_aqui'; // Debería estar en variables de entorno
      const token = jwt.sign({ id: user.id, Email: user.Email, Contrasena: user.Contrasena }, secretKey, { expiresIn: '1h' });
      
      // Enviar el token al cliente
      res.json({ token });
    } else {
      // Acceso no autorizado si no se encuentra el usuario
      res.sendStatus(401);
    }
  } catch (error) {
    // Error de servidor
    console.error("Error de autenticación:", error.message);
    res.status(500).send("Error interno del servidor");
  }
}
*/
