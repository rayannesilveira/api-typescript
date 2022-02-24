import { Produto } from "../models/Produto";
import { ICreateProdutoDTO, IProdutosRepository } from "../repositories/IProdutosRepository";

class ProdutosRepository implements IProdutosRepository{
  private produtos : Produto[];

  private static INSTANCE: ProdutosRepository;

  private constructor(){
    this.produtos = [];
  }

  public static getInstance(){
    if(!ProdutosRepository.INSTANCE){
      ProdutosRepository.INSTANCE =  new ProdutosRepository();
    }

    return ProdutosRepository.INSTANCE;
  }

  create({ nome, preco, quantidade }: ICreateProdutoDTO){
    const produtoNovo = new Produto();

    Object.assign(produtoNovo, {
      nome,
      preco,
      quantidade
    });

    this.produtos.push(produtoNovo);
  }

  getAllProducts(): Produto[]{
    return this.produtos;
  }

  findByNome(nome: string): Produto{
    const produto = this.produtos.find((produto)=>produto.nome === nome);
    return produto;
  }
}

export {ProdutosRepository};