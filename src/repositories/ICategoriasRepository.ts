import { Categoria } from "../models/Categoria"
import mongoose from "mongoose";

//DTO - Data transfer Object
interface ICreateCategoriaDTO{
  nome: string;
  descricao: string;
}

interface ICategoriasRepository{
  findByName(nome: string): Promise<Categoria>;
  getAllCategorias(): Promise<mongoose.Document[]>;
  create({nome, descricao }: ICreateCategoriaDTO): void;
  update(id: string, nome: string, descricao: string): Promise<mongoose.Document>;
  delete(id: string): Promise<boolean>;
}

export { ICategoriasRepository, ICreateCategoriaDTO };