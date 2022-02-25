import { Categoria } from "../models/Categoria";
import { ICategoriasRepository } from "../repositories/ICategoriasRepository";
import mongoose from "mongoose";


class GetAllCategoriasService{
  private categoriasRepository: ICategoriasRepository;

  constructor(categoriasRepository: ICategoriasRepository){
    this.categoriasRepository = categoriasRepository;
  }
  async execute(): Promise<mongoose.Document[]> {
    const categorias = await this.categoriasRepository.getAllCategorias();

    return categorias;
  }
}

export { GetAllCategoriasService};