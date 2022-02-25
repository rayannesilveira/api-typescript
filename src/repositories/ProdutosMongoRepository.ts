import { Produto } from "../models/Produto";
import { ProdutoDB } from "../schemas/ProdutoSchema";
import { ICreateProdutoDTO, IProdutosRepository } from "./IProdutosRepository";
import mongoose from "mongoose";

class ProdutosMongoRepository implements IProdutosRepository{
  async findByNome(nome: string): Promise<Produto> {
    const produto = await ProdutoDB.find({ nome: nome }).exec();

    if (produto.length == 0) {
      return null;
    }

    const nomeProduto = produto[0]["nome"];
    const precoProduto = produto[0]["preco"];
    const quantidadeProduto = produto[0]["quantidade"];
    const categoriaIdProduto = produto[0]["categoria_id"];

    const produtoFind = new Produto();
    Object.assign(produtoFind, {
      nomeProduto,
      precoProduto,
      quantidadeProduto,
      categoriaIdProduto
    }
    );

    return produtoFind;
  }
  create({ nome, preco, quantidade, categoria_id }: ICreateProdutoDTO): void {
    ProdutoDB.create({
      nome,
      preco,
      quantidade,
      categoria_id
    });
  }

  async getAllProducts(): Promise<mongoose.Document[]> {
    const produtos = await ProdutoDB.find({}).exec();

    return produtos;
  }

}

export { ProdutosMongoRepository };