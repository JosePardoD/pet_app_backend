CREATE TABLE Usuarios (
    UsuarioID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    Cumpleanos DATE,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Contrasena VARCHAR(255) NOT NULL,
    Latitud REAL,        -- Almacenar la latitud como un número real
    Longitud REAL        -- Almacenar la longitud como un número real
);

INSERT INTO Usuarios (Nombre, Apellido, Cumpleanos, Email, Contrasena, Latitud, Longitud)
VALUES 
('Ana', 'Martínez', '1992-03-15', 'ana.martinez@example.com', 'password123', 4.6351, -74.0705),  -- Cerca del Parque Simón Bolívar
('Carlos', 'Gómez', '1985-07-22', 'carlos.gomez@example.com', 'password124', 4.6097, -74.0817),  -- La Candelaria
('Lucia', 'Fernández', '1990-11-30', 'lucia.fernandez@example.com', 'password125', 4.6768, -74.0480),  -- Usaquén
('Miguel', 'Rojas', '1978-02-17', 'miguel.rojas@example.com', 'password126', 4.5981, -74.0758),  -- Centro Internacional
('Sofia', 'López', '2001-05-25', 'sofia.lopez@example.com', 'password127', 4.6473, -74.0962);  -- Chapinero


    CREATE TABLE IF NOT EXISTS Lugares (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      direccion VARCHAR(255) NOT NULL,
      telefono VARCHAR(50) NOT NULL,
      latitud DECIMAL(10, 8) NOT NULL,
      longitud DECIMAL(11, 8) NOT NULL,
      categoria VARCHAR(50) NOT NULL
    )