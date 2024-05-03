import express from "express";

import usuariosRouter from "./routes/usuarios.routes.js";
import indexRouter from "./routes/index.routes.js";

const app = express();

app.use(usuariosRouter)
app.use(indexRouter)

app.listen(3000);