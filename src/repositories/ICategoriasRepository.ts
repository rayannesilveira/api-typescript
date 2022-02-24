import { Categoria } from "../models/Categoria"

//DTO - Data transfer Object
interface ICreateCategoriaDTO{
  nome: string;
  descricao: string;
}

interface ICategoriasRepository{
  findByName(nome: string): Categoria;
  getAllCategorias(): Categoria[];
  create({nome, descricao }: ICreateCategoriaDTO): void;
}

export { ICategoriasRepository, ICreateCategoriaDTO };