import jwt from 'jsonwebtoken';

const privateKey = "d598a01a32a72750581370261ef554a717d21a4dc4cf3f125edbe62cbb85f68388d6ad25f028035d6ff6b7e086ab0f81505e694045ce6ad94d88a96838658933"; // Debería estar en variables de entorno

export function genToken(element) {
  const token = jwt.sign(element, privateKey);
  return token;
}

export function validateToken(req, res, next) {
  try {
    const token = req.headers['authorization'].split(' ')[1]; // Asegúrate de que el token viene en el formato 'Bearer <token>'
    console.log(token);
    const value = jwt.verify(token, privateKey);
    req.value = value;
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
}


/*

import jwt from "jsonwebtoken";



const privateKey =
  "d598a01a32a72750581370261ef554a717d21a4dc4cf3f125edbe62cbb85f68388d6ad25f028035d6ff6b7e086ab0f81505e694045ce6ad94d88a96838658933";

export function genToken(element) {
  const token = jwt.sign(element, privateKey);
  return token;
}

export function validateToken(req, res, next) {
  try {
    const { token } = req.headers;
    console.log(token);
    const value = jwt.verify(token, privateKey);
    req.value = value;
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
}

--------------
const ACCESS_TOKEN = "d598a01a32a72750581370261ef554a717d21a4dc4cf3f125edbe62cbb85f68388d6ad25f028035d6ff6b7e086ab0f81505e694045ce6ad94d88a96838658933"

export default (req, res, next) => {
    const { token } = req.headers
    
    const username = jwt.verify(token, ACCESS_TOKEN)

    if (username == null) {
        res.sendStatus(401)
        return
    } 

    req.username = username

    next()
}*/
