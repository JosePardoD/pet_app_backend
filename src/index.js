import express from "express";

import usuariosRouter from "./routes/usuarios.routes.js";
import indexRouter from "./routes/index.routes.js";

const app = express();

app.use(express.json())

app.use('/api',usuariosRouter)
app.use('/api',indexRouter)

app.listen(3000);