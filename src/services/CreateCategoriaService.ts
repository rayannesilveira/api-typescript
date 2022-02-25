import { ICategoriasRepository } from "../repositories/ICategoriasRepository";


interface IRequest{
  nome: string;
  descricao: string;
}

class CreateCategoriaService {

  private categoriasRepository: ICategoriasRepository;

  constructor(categoriasRepository: ICategoriasRepository){
    this.categoriasRepository = categoriasRepository;
  }
  async execute({ nome, descricao } : IRequest): Promise<boolean> {
    const categoriaAlreadyExists = await this.categoriasRepository.findByName(nome);

    if (categoriaAlreadyExists == null) {
      this.categoriasRepository.create({ nome, descricao });
      return true;
    }
    else {
      return false;
    }
  }
}

export { CreateCategoriaService };