import { ICategoriasRepository } from "../repositories/ICategoriasRepository";



class DeleteCategoriaService{
  private categoriasRepository: ICategoriasRepository;

  constructor(categoriasRepository: ICategoriasRepository){
    this.categoriasRepository = categoriasRepository;
  }

  async execute(id: string): Promise<boolean>{
    const wasDeleted = await this.categoriasRepository.delete(id);

    return wasDeleted;
  }
}

export { DeleteCategoriaService };