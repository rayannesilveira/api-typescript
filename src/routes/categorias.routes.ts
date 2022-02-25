import { Router } from "express";
import { getAllCategoriasController } from "../useCases/getAllCategoriasController";
import { createCategoriasController } from "../useCases/createCategoria";
import { updateCategoriasController } from "../useCases/updateCategoria";
import { deleteCategoriaController } from "../useCases/deleteCategoria";

 const categoriasRotas = Router();

 categoriasRotas.get("/", (request, response) => {
   return getAllCategoriasController.handle(request, response);
 });
 
 categoriasRotas.post("/", (request, response) => {
   return createCategoriasController.handle(request,response);
 });

 categoriasRotas.put("/:id", (request, response)=>{
    return updateCategoriasController.handle(request, response);
  });

  categoriasRotas.delete("/:id", (request, response) => {
    return deleteCategoriaController.handle(request, response);
  });
 
 export { categoriasRotas };