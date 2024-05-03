import { pool } from "../db.js";

export const getUsuarios = async (req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM Usuarios')
        res.json(rows)       
    } catch (error) {
        return res.status(500).json('Algo esta mal')
    }
};

export const getUsuario = async (req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM Usuarios WHERE UsuarioID=?',[req.params.id] )
        if(rows.length<= 0) return res.status(404).json({message: 'No funciona'})
        console.log(rows)
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json('Algo esta mal')       
    }


};

export const createtUsuarios = async (req,res)=>{
    try {
        const {Nombre, Apellido, Email} = req.body
        const [rows] = await pool.query('INSERT INTO Usuarios (Nombre,Apellido,Email) VALUES (?,?,?)',[Nombre,Apellido,Email])
        console.log(rows)
        res.send({rows})        
    } catch (error) {
        return res.status(500).json('Algo esta mal')            
    }

};

export const updateUsuarios = async (req,res)=> {
    try {
        const {id} = req.params
        const {Nombre, Apellido, Email} = req.body

        const [result] = await pool.query('UPDATE Usuarios SET Nombre=IFNULL(?,Nombre),Apellido=IFNULL(?,Apellido),Email=IFNULL(?,Email) WHERE UsuarioID=?', [Nombre,Apellido,Email,id])
        if(result.affectedRows==0) return res.status(404).json({message: 'No encontro nada'})

        const [rows] = await pool.query('SELECT * FROM Usuarios WHERE UsuarioID=?',[req.params.id] )
        res.json(rows[0])        
    } catch (error) {
        return res.status(500).json('Algo esta mal')          
    }

};

export const deleteUsuarios = async (req,res)=>{
    try {
        const [result] = await pool.query('DELETE FROM Usuarios WHERE UsuarioID=?',[req.params.id] )
        if(result.affectedRows<=0) return res.status(404).json({message: 'No encontro nada'})
        console.log(result)

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json('Algo esta mal')            
    }

};