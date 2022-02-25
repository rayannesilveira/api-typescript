import { Request, Response } from "express";
import { CreateProdutoService } from "../../services/CreateProdutoService";


class CreateProdutoController{
  private createProdutoService: CreateProdutoService;

  constructor(createProdutoService: CreateProdutoService){
    this.createProdutoService = createProdutoService;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { nome, preco, quantidade, categoria_id } = request.body;
    
    const wasCreated = await this.createProdutoService.execute({nome, preco, quantidade, categoria_id });
    if(wasCreated){
      return response.status(201).send("Criado com sucesso.");

    }
    else{
      return response.status(422).send("Não foi possivel cadastrar.");
    }
  }
}

export { CreateProdutoController };