import { Request, Response } from "express";

import {GetAllCategoriasService} from "../../services/GetAllCategoriasService";


class GetAllCategoriasController{
  private getAllCategoriasService: GetAllCategoriasService;

  constructor(createCategoriaService: GetAllCategoriasService){
    this.getAllCategoriasService = createCategoriaService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const allCategorias = await this.getAllCategoriasService.execute();

    return response.status(200).json(allCategorias);
  }
}


export { GetAllCategoriasController };