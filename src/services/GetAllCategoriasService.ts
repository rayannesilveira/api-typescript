import { Categoria } from "../models/Categoria";
import { ICategoriasRepository } from "../repositories/ICategoriasRepository";


class GetAllCategoriasService{
  private categoriasRepository: ICategoriasRepository;

  constructor(categoriasRepository: ICategoriasRepository){
    this.categoriasRepository = categoriasRepository;
  }
  execute(): Categoria[] {
    const categorias = this.categoriasRepository.getAllCategorias();

    return categorias;
  }
}

export { GetAllCategoriasService};