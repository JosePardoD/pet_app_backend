import { createPool } from "mysql2/promise";
import { promises as fs } from 'fs';
import path from 'path';

// Configuración de la base de datos

async function main() {

    const pool = createPool({
        host:'localhost',
        user:'root',
        password:'',
        port:3306,
        database:'petapp'
    })

  // Leer datos del archivo JSON
  const dataPath = path.join(path.resolve(), 'result.json');
  const clinicsData = await fs.readFile(dataPath, 'utf8');
  const clinics = JSON.parse(clinicsData);

  // Insertar datos en la tabla
  const insertQuery = `
    INSERT INTO Lugares (nombre, direccion, telefono, latitud, longitud, categoria)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  
  for (const clinic of clinics) {
    const values = [clinic.Name, clinic.Address, clinic["Phone Number"], clinic.Latitude, clinic.Longitude, clinic.Category];
    await pool.query(insertQuery, values);
  }

  console.log("Datos insertados exitosamente");
}

main().catch(err => console.error(err));
