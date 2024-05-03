import { Router } from "express";
import { ping } from "../controllers/index.controller.js";


const indexRouter=Router();

indexRouter.get('/ping',ping)

export default indexRouter;
