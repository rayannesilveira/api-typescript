import { Request, Response } from "express";

import {GetAllCategoriasService} from "../../services/GetAllCategoriasService";


class GetAllCategoriasController{
  private getAllCategoriasService: GetAllCategoriasService;

  constructor(createCategoriaService: GetAllCategoriasService){
    this.getAllCategoriasService = createCategoriaService;
  }
  handle(request: Request, response: Response): Response{
    const allCategorias = this.getAllCategoriasService.execute();

    return response.status(200).json(allCategorias);
  }
}


export { GetAllCategoriasController };