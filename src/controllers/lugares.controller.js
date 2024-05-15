import { pool } from "../db.js";

export const getLugares = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Lugares');
        res.json(rows);
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};

export const getLugar = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Lugares WHERE id=?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({ message: 'No se encontró el lugar' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};

export const createLugar = async (req, res) => {
    try {
        const { nombre, direccion, telefono, latitud, longitud, categoria } = req.body;
        const [rows] = await pool.query('INSERT INTO Lugares (nombre, direccion, telefono, latitud, longitud, categoria) VALUES (?, ?, ?, ?, ?, ?)', [nombre, direccion, telefono, latitud, longitud, categoria]);
        res.status(201).json({ id: rows.insertId, nombre, direccion, telefono, latitud, longitud, categoria });
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};

export const updateLugar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, telefono, latitud, longitud, categoria } = req.body;
        const [result] = await pool.query('UPDATE Lugares SET nombre=IFNULL(?, nombre), direccion=IFNULL(?, direccion), telefono=IFNULL(?, telefono), latitud=IFNULL(?, latitud), longitud=IFNULL(?, longitud), categoria=IFNULL(?, categoria) WHERE id=?', [nombre, direccion, telefono, latitud, longitud, categoria, id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'No se encontró el lugar' });

        const [updatedRows] = await pool.query('SELECT * FROM Lugares WHERE id=?', [id]);
        res.json(updatedRows[0]);
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};

export const deleteLugar = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Lugares WHERE id=?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'No se encontró el lugar' });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};
