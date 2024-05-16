import { Router } from "express";
import { getMascotas,getMascota,createMascota,updateMascota,deleteMascota,getMascotasForUser } from "../controllers/mascotas.controller.js";


const mascotasRouter=Router();


mascotasRouter.get('/mascotas', getMascotas)
mascotasRouter.get('/mascotas/:id', getMascota)
mascotasRouter.post('/mascotas', createMascota)
mascotasRouter.patch('/mascotas/:id', updateMascota)
mascotasRouter.delete('/mascotas/:id', deleteMascota)


mascotasRouter.get('/mascotasdeusuarios/:id', getMascotasForUser)

export default mascotasRouter;
