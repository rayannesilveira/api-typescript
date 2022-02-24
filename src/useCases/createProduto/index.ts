import { ProdutosRepository } from "../../repositories/ProdutosRepository";
import { CreateProdutoService } from "../../services/CreateProdutoService";
import { CreateProdutoController } from "./CreateProdutoController";


const produtoRepositorio = ProdutosRepository.getInstance();
const createProdutoService = new CreateProdutoService(produtoRepositorio);
const createProdutoController = new CreateProdutoController(createProdutoService);

export { createProdutoController };