import { Produto } from "../models/Produto";

//DTO  - Data transfer Object
interface ICreateProdutoDTO{
  nome: string;
  preco: number;
  quantidade: number;
}

interface IProdutosRepository{
  findByNome(nome: string): Produto;
  create({nome, preco, quantidade}: ICreateProdutoDTO): void;
  getAllProducts(): Produto[];
}

export { IProdutosRepository, ICreateProdutoDTO};