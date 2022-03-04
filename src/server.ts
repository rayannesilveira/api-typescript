import express from "express";
import { categoriasRotas } from "./routes/categorias.routes";
import { produtosRotas } from "./routes/produtos.routes";
import swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";
import 'dotenv/config';

import swaggerFile from "./swagger.json";
import cors from "cors";
const app = express();

app.listen(3131);

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONN_STRING).then(()=>{
  console.log("DB connected!");
}).catch(()=>{
  console.log("Erro na conexão.");
  process.exit(1);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/categoria", categoriasRotas);
app.use('/produto', produtosRotas);

app.get("/", (request, response)=>{
  return response.send("Hello world A Typescript!");
});
