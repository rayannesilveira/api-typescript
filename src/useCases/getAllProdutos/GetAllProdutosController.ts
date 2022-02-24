import { Request, Response } from "express";
import { GetAllProdutosService } from "../../services/GetAllProdutosService";


class GetAllProdutosController{
  private getAllProdutosService: GetAllProdutosService;

  constructor(getAllProdutosService: GetAllProdutosService){
    this.getAllProdutosService = getAllProdutosService;
  }

  handle(request: Request, response: Response): Response{
    const allProdutos = this.getAllProdutosService.execute();

    return response.status(200).json(allProdutos);
  }
}

export { GetAllProdutosController};