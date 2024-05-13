import { pool } from "../db.js";

export const createImage = async (req,res)=>{
    try {

        const {image} = req.body
        console.log(image)
        const [rows] = await pool.query(`INSERT INTO images (image_data) VALUES (?)`,[image])
        console.log(rows)
        res.send({rows})        
    } catch (error) {
        return res.status(500).json('Algo esta mal')            
    }

};

export const getImage = async (req, res) => {
    try {

        const { id } = req.params;  // Obtener el ID de la imagen de los parámetros de la ruta
        console.log(id)
        const [rows] = await pool.query(`SELECT image_data FROM images WHERE id = ?`, [id]);

        if (rows.length === 0) {
            return res.status(404).json('Imagen no encontrada');  // Devuelve un error si no se encuentra ninguna imagen
        }

        console.log(rows);
        const imageData = rows[0].image_data;
        res.send({ rows});  // Envía la imagen como respuesta
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
        return res.status(500).json('Algo está mal');            
    }
};


export const getImage2 = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const [rows] = await pool.query(`SELECT image_data FROM images WHERE id = ?`, [id]);

        if (rows.length === 0) {
            return res.status(404).json('Imagen no encontrada');
        }

        const imageBuffer = rows[0].image_data;
        console.log('Buffer de la imagen:', imageBuffer); // Agregar esto para depurar

        if (!imageBuffer) {
            return res.status(404).json('Datos de imagen no válidos');
        }

        const imageBase64 = Buffer.from(imageBuffer).toString('base64');
        console.log('Imagen en Base64:', imageBase64); // Agregar esto para depurar

        const imageData = `data:image/jpeg;base64,${imageBase64}`;
        res.send({ url: imageData });
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
        return res.status(500).json('Algo está mal');
    }
};


