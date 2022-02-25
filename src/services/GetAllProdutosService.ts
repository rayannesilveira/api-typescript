import { IProdutosRepository } from "../repositories/IProdutosRepository";
import mongoose from "mongoose";

class GetAllProdutosService{
  private produtoRepositorio: IProdutosRepository;

  constructor(produtoRepositorio: IProdutosRepository){
    this.produtoRepositorio = produtoRepositorio;
  }

  async execute(): Promise<mongoose.Document[]>{
    const produtos = await this.produtoRepositorio.getAllProducts();

    return produtos;
  }

}

export { GetAllProdutosService };