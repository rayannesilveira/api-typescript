import { CategoriasMongoRepository } from "../../repositories/CategoriasMongoRepository";
import { CreateCategoriaService } from "../../services/CreateCategoriaService";
import { CreateCategoriasController } from "./CreateCategoriaController";

const categoriasRepository = new CategoriasMongoRepository;
const categoriaService = new CreateCategoriaService(categoriasRepository);
const createCategoriasController = new CreateCategoriasController(categoriaService);

export { createCategoriasController };