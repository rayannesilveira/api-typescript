import { ProdutosMongoRepository } from "../../repositories/ProdutosMongoRepository";
import { ProdutosRepository } from "../../repositories/ProdutosRepository";
import { GetAllProdutosService } from "../../services/GetAllProdutosService";
import { GetAllProdutosController } from "./GetAllProdutosController";

const produtoRepositorio =  new ProdutosMongoRepository();
const getAllProdutosService = new GetAllProdutosService(produtoRepositorio);
const getAllProdutosController = new GetAllProdutosController(getAllProdutosService);


export { getAllProdutosController};