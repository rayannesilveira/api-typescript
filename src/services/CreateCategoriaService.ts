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
  execute({ nome, descricao } : IRequest) {
    const categoriaAlreadyExists = this.categoriasRepository.findByName(nome);

    if (categoriaAlreadyExists) {
     throw new Error("Categoria já existe.");
    }
    else {

      this.categoriasRepository.create({ nome, descricao });

    }
  }
}

export { CreateCategoriaService };