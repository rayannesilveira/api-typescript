import { Router } from "express";
import { getAllCategoriasController } from "../useCases/getAllCategoriasController";
import { createCategoriasController } from "../useCases/createCategoria";
/**
 * Categoria
 * - nome
 * - descricao
 * - created_at
 * - id
 */

 const categoriasRotas = Router();

 categoriasRotas.get("/", (request, response) => {
   return getAllCategoriasController.handle(request, response);
 });
 
 categoriasRotas.post("/", (request, response) => {
   return createCategoriasController.handle(request,response);
 });
 
 export { categoriasRotas };