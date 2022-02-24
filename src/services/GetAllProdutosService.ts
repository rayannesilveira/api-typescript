import { Produto } from "../models/Produto";
import { IProdutosRepository } from "../repositories/IProdutosRepository";


class GetAllProdutosService{
  private produtoRepositorio: IProdutosRepository;

  constructor(produtoRepositorio: IProdutosRepository){
    this.produtoRepositorio = produtoRepositorio;
  }

  execute(): Produto[]{
    const produtos = this.produtoRepositorio.getAllProducts();

    return produtos;
  }

}

export { GetAllProdutosService };