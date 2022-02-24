import { ProdutosRepository } from "../../repositories/ProdutosRepository";
import { GetAllProdutosService } from "../../services/GetAllProdutosService";
import { GetAllProdutosController } from "./GetAllProdutosController";

const produtoRepositorio =  ProdutosRepository.getInstance();
const getAllProdutosService = new GetAllProdutosService(produtoRepositorio);
const getAllProdutosController = new GetAllProdutosController(getAllProdutosService);


export { getAllProdutosController};