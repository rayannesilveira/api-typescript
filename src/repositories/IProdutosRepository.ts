import { Produto } from "../models/Produto";
import mongoose from "mongoose";

//DTO  - Data transfer Object
interface ICreateProdutoDTO{
  nome: string;
  preco: number;
  quantidade: number;
  categoria_id: string;
}

interface IProdutosRepository{
  findByNome(nome: string): Promise<Produto>;
  create({nome, preco, quantidade, categoria_id}: ICreateProdutoDTO): void;
  getAllProducts(): Promise<mongoose.Document[]>;
}

export { IProdutosRepository, ICreateProdutoDTO};