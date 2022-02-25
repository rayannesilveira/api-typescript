import { Request, Response } from "express";
import { DeleteCategoriaService } from "../../services/DeleteCategoriaService";


class DeleteCategoriaController{
  private deleteCategoriaService: DeleteCategoriaService;

  constructor(deleteCategoriaService: DeleteCategoriaService){
    this.deleteCategoriaService = deleteCategoriaService;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;

    const wasDeleted = await this.deleteCategoriaService.execute(id);

    if(wasDeleted){
      return response.status(200).send("Removido com sucesso!");
    }
    else{
      return response.status(400).send("Não foi possível remover.");
    }

  }
}

export { DeleteCategoriaController };