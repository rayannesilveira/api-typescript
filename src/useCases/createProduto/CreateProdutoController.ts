import { Request, Response } from "express";
import { CreateProdutoService } from "../../services/CreateProdutoService";


class CreateProdutoController{
  private createProdutoService: CreateProdutoService;

  constructor(createProdutoService: CreateProdutoService){
    this.createProdutoService = createProdutoService;
  }

  handle(request: Request, response: Response): Response{
    const { nome, preco, quantidade } = request.body;
    
    this.createProdutoService.execute({nome, preco, quantidade });
    
    return response.status(201).send("Criado com sucesso.");
  }
}

export { CreateProdutoController };