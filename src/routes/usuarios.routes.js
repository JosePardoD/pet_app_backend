import { Router } from "express";
import { getUsuarios, createtUsuarios, updateUsuarios, deleteUsuarios } from "../controllers/usuarios.controller.js";


const usuariosRouter=Router();

usuariosRouter.get('/employees', getUsuarios)
usuariosRouter.post('/employees', createtUsuarios)
usuariosRouter.put('/employees', updateUsuarios)
usuariosRouter.delete('/employees', deleteUsuarios)

export default usuariosRouter;
