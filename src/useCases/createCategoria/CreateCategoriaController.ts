import { Request, Response } from "express";
import { CreateCategoriaService } from "../../services/CreateCategoriaService";

class CreateCategoriasController {
  private createCategoriaService: CreateCategoriaService;

  constructor(createCategoriaService: CreateCategoriaService){
    this.createCategoriaService = createCategoriaService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao } = request.body;

    const wasCreated = await this.createCategoriaService.execute({ nome, descricao });

    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Categoria já existe.");
    }

    
  }
}

export { CreateCategoriasController };