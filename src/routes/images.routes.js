import { Router } from "express";
import { createImage,getImage2 } from "../controllers/imagen.controller.js";

const imagesRouter=Router();


imagesRouter.post('/image', createImage)
imagesRouter.get('/image/:id', getImage2)

export default imagesRouter;