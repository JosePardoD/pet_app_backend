import { Router } from "express";
import { getUsuarios, getUsuario, createtUsuarios, updateUsuarios, deleteUsuarios } from "../controllers/usuarios.controller.js";


const usuariosRouter=Router();

usuariosRouter.get('/usuarios', getUsuarios)
usuariosRouter.get('/usuarios/:id', getUsuario)
usuariosRouter.post('/usuarios', createtUsuarios)
usuariosRouter.patch('/usuarios/:id', updateUsuarios)
usuariosRouter.delete('/usuarios/:id', deleteUsuarios)

export default usuariosRouter;
