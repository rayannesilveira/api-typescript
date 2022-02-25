import { UpdateCategoriaService } from "../../services/UpdateCategoriaService";
import { Request, Response } from "express";

class UpdateCategoriasController{
  private updateCategoriaService: UpdateCategoriaService;

  constructor(updateCategoriaService: UpdateCategoriaService){
    this.updateCategoriaService = updateCategoriaService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const { nome, descricao } = request.body;

    const categoriaUpdated = await this.updateCategoriaService.execute({id, nome, descricao});

    return response.status(200).json(categoriaUpdated);
  }
}

export { UpdateCategoriasController};