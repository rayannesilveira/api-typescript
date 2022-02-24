import mongoose from "mongoose";
import { Categoria } from "../models/Categoria";
import { CategoriaDB } from "../schemas/CategoriaSchema";
import { ICategoriasRepository, ICreateCategoriaDTO } from "./ICategoriasRepository";


class CategoriasMongoRepository implements ICategoriasRepository{
  async findByName(nome: string): Promise<Categoria> {
    const categoria = await CategoriaDB.find({nome: nome}).exec();

    if(categoria.length == 0){
      return null;
    }

    const nomeCategoria = categoria[0]["nome"];
    const descricaoCategoria = categoria[0]["descricao"];

    const categoriaFind = new Categoria();
    Object.assign(categoriaFind, {
      nomeCategoria,
      descricaoCategoria
    }
    );

    return categoriaFind;

  }
  
  async getAllCategorias(): Promise<mongoose.Document[]> {
    const categorias = await CategoriaDB.find({}).exec();

    return categorias;
  }

  create({ nome, descricao }: ICreateCategoriaDTO): void {
    CategoriaDB.create({
      nome,
      descricao
    });
  }

  async delete(id: string): Promise<boolean> {
    const categoria = await CategoriaDB.findOneAndDelete({_id: id}).exec();

    const wasDeleted = await CategoriaDB.findById(id).exec();

    if(!wasDeleted){
      return true;
    }
    else{
      return false;
    }
  }

  
  async update(id: string, nome: string, descricao: string): Promise<mongoose.Document<any, any, any>> {
    const categoria = await CategoriaDB.findOneAndUpdate({}, {
      nome: nome, descricao: descricao}, {new: true}).exec();

      return categoria;
  }

}

export { CategoriasMongoRepository };