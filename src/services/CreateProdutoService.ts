import { IProdutosRepository } from "../repositories/IProdutosRepository";

interface IRequest{
  nome: string;
  preco: number;
  quantidade:number;
}

class CreateProdutoService {

  private produtoRepositorio: IProdutosRepository;

  constructor(produtoRepositorio: IProdutosRepository){
    this.produtoRepositorio = produtoRepositorio;
  }

  execute({nome, preco, quantidade }: IRequest) {
    const produtoAlreadyExists = this.produtoRepositorio.findByNome(nome);

    if (produtoAlreadyExists) {
      throw new Error("Produto já existe.");
    }

    this.produtoRepositorio.create({ nome, preco, quantidade });
  }
}

export { CreateProdutoService};