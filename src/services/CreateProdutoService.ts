import { IProdutosRepository } from "../repositories/IProdutosRepository";

interface IRequest{
  nome: string;
  preco: number;
  quantidade:number;
  categoria_id: string;
}

class CreateProdutoService {

  private produtoRepositorio: IProdutosRepository;

  constructor(produtoRepositorio: IProdutosRepository){
    this.produtoRepositorio = produtoRepositorio;
  }

  async execute({nome, preco, quantidade, categoria_id }: IRequest): Promise<boolean> {
    const produtoAlreadyExists = await this.produtoRepositorio.findByNome(nome);

    if (produtoAlreadyExists == null) {
      this.produtoRepositorio.create({ nome, preco, quantidade, categoria_id });
      return true;
    }
    else {
      return false;
    }

  }
}

export { CreateProdutoService};