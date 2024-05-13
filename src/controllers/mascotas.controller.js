import { pool } from "../db.js";

export const getMascotas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Mascotas');
        res.json(rows);
        console.log(rows)
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};

export const getMascota = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Mascotas WHERE MascotaID=?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({ message: 'No funciona' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};

export const createMascota = async (req, res) => {
    try {
        const { UsuarioID, Nombre, Especie, Raza, Genero, ImagenURL } = req.body;
        console.log(ImagenURL)
        const [rows] = await pool.query('INSERT INTO Mascotas (UsuarioID, Nombre, Especie, Raza, Genero, ImagenURL) VALUES (?, ?, ?, ?, ?, ?)', [UsuarioID, Nombre, Especie, Raza, Genero, ImagenURL]);
        res.status(201).send({ rows });
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};

export const updateMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Especie, Raza, Genero, ImagenURL } = req.body;
        const [result] = await pool.query('UPDATE Mascotas SET Nombre=IFNULL(?,Nombre), Especie=IFNULL(?,Especie), Raza=IFNULL(?,Raza), Genero=IFNULL(?,Genero), ImagenURL=IFNULL(?,ImagenURL) WHERE MascotaID=?', [Nombre, Especie, Raza, Genero, ImagenURL, id]);
        if (result.affectedRows == 0) return res.status(404).json({ message: 'No encontró nada' });

        const [updatedRows] = await pool.query('SELECT * FROM Mascotas WHERE MascotaID=?', [id]);
        res.json(updatedRows[0]);
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};


export const deleteMascota = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Mascotas WHERE MascotaID=?', [req.params.id]);
        if (result.affectedRows <= 0) return res.status(404).json({ message: 'No encontró nada' });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json('Algo está mal');
    }
};
