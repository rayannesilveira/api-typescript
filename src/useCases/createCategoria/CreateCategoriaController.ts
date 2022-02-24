import { Request, Response } from "express";
import { CreateCategoriaService } from "../../services/CreateCategoriaService";

class CreateCategoriasController {
  private createCategoriaService: CreateCategoriaService;

  constructor(createCategoriaService: CreateCategoriaService){
    this.createCategoriaService = createCategoriaService;
  }

  handle(request: Request, response: Response): Response {
    const { nome, descricao } = request.body;

    this.createCategoriaService.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CreateCategoriasController };