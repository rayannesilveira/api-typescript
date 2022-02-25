import mongoose from "mongoose";
import { ICategoriasRepository } from "../repositories/ICategoriasRepository";

class UpdateCategoriaService {

  private categoriasRepository: ICategoriasRepository;

  constructor(categoriasRepository: ICategoriasRepository){
    this.categoriasRepository = categoriasRepository;
  }
  async execute({ nome, descricao, id }): Promise<mongoose.Document> {
    const categoriaUpdated = await this.categoriasRepository.update(id,nome, descricao);

    return categoriaUpdated;
  }
}

export { UpdateCategoriaService };