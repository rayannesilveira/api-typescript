import express from "express";
import { categoriasRotas } from "./routes/categorias.routes";
import { produtosRotas } from "./routes/produtos.routes";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json";
const app = express();

app.listen(3131);

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/categoria", categoriasRotas);
app.use('/produto', produtosRotas);

app.get("/", (request, response)=>{
  return response.send("Hello world A Typescript!");
});
