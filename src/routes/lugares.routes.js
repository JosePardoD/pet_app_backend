import { Router } from "express";
import { getLugares,getLugar,createLugar,updateLugar,deleteLugar } from "../controllers/lugares.controller.js";


const luguaresRouter=Router();


luguaresRouter.get('/lugares', getLugares)
luguaresRouter.get('/lugares/:id', getLugar)
luguaresRouter.post('/lugares', createLugar)
luguaresRouter.patch('/lugares/:id', updateLugar)
luguaresRouter.delete('/lugares/:id', deleteLugar)

export default luguaresRouter;
