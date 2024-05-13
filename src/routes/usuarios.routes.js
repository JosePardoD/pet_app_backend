import { Router } from "express";
import { getUsuarios, getUsuario, createtUsuarios, updateUsuarios, deleteUsuarios } from "../controllers/usuarios.controller.js";
import { login } from "../modules/authModule.js";

const usuariosRouter=Router();

usuariosRouter.post("/login", login);
usuariosRouter.get('/usuarios', getUsuarios)
usuariosRouter.get('/usuarios/:id', getUsuario)
usuariosRouter.post('/usuarios', createtUsuarios)
usuariosRouter.patch('/usuarios/:id', updateUsuarios)
usuariosRouter.delete('/usuarios/:id', deleteUsuarios)

export default usuariosRouter;
