import { ProdutosMongoRepository } from "../../repositories/ProdutosMongoRepository";
import { ProdutosRepository } from "../../repositories/ProdutosRepository";
import { CreateProdutoService } from "../../services/CreateProdutoService";
import { CreateProdutoController } from "./CreateProdutoController";


const produtoRepositorio = new ProdutosMongoRepository();
const createProdutoService = new CreateProdutoService(produtoRepositorio);
const createProdutoController = new CreateProdutoController(createProdutoService);

export { createProdutoController };