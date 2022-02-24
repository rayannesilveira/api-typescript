import { v4 as uuidV4} from "uuid";

class Produto{
  nome: string;
  preco: number;
  quantidade: number;
  id?: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

export { Produto }; 