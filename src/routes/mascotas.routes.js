import { Router } from "express";
import { getMascotas,getMascota,createMascota,updateMascota,deleteMascota } from "../controllers/mascotas.controller.js";


const mascotasRouter=Router();


mascotasRouter.get('/mascotas', getMascotas)
mascotasRouter.get('/mascotas/:id', getMascota)
mascotasRouter.post('/mascotas', createMascota)
mascotasRouter.patch('/mascotas/:id', updateMascota)
mascotasRouter.delete('/mascotas/:id', deleteMascota)

export default mascotasRouter;
