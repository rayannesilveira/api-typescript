import { Router } from "express";

import { createProdutoController } from "../useCases/createProduto";
import { getAllProdutosController } from "../useCases/getAllProdutos";

const produtosRotas = Router();

produtosRotas.get("/", (request, response)=>{
  return getAllProdutosController.handle(request,response);
});

produtosRotas.post("/", (request, response)=>{

    return createProdutoController.handle(request, response);
 
});

export { produtosRotas };
