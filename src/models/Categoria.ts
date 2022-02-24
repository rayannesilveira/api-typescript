import { v4 as uuidV4} from "uuid";

class Categoria{
  nome: string;
  descricao: string;
  created_at: Date;
  id?: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4();

    }
  }
}

export { Categoria};