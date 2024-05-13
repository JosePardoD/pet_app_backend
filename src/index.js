import express from "express";
import cors from "cors";
import usuariosRouter from "./routes/usuarios.routes.js";
import indexRouter from "./routes/index.routes.js";

import imagesRouter from "./routes/images.routes.js";
import mascotasRouter from "./routes/mascotas.routes.js";

const app = express();
app.use(
  cors()
);


app.use(express.json())

app.use('/api',usuariosRouter)
app.use('/api',indexRouter)
app.use('/api',imagesRouter)
app.use('/api',mascotasRouter)

app.listen(3000);