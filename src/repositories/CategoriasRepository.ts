import { Categoria } from "../models/Categoria";
import { ICategoriasRepository, ICreateCategoriaDTO } from "./ICategoriasRepository";

class CategoriasRepository implements ICategoriasRepository{
  private categorias: Categoria[];

  private static INSTANCE: CategoriasRepository;

  private constructor(){
    this.categorias = [];
  }

  public static getInstance(): CategoriasRepository{
    if(!CategoriasRepository.INSTANCE){
      CategoriasRepository.INSTANCE = new CategoriasRepository();
    }
    return CategoriasRepository.INSTANCE;
  }

  create({descricao, nome}: ICreateCategoriaDTO): void{
    const categoria = new Categoria();

    Object.assign(categoria,{
      nome,
      descricao,
      created_at: new Date()
    });

    this.categorias.push(categoria);
  }

  getAllCategorias(): Categoria[] {
    return this.categorias;
  }

  findByName(nome: string): Categoria{
    const categoria = this.categorias.find((categoria)=> categoria.nome === nome);
    
    return categoria;
  }
}

export { CategoriasRepository};