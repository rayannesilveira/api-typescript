import { CategoriasRepository } from "../../repositories/CategoriasRepository";
import { CreateCategoriaService } from "../../services/CreateCategoriaService";
import { CreateCategoriasController } from "./CreateCategoriaController";

const categoriasRepository = CategoriasRepository.getInstance();
const categoriaService = new CreateCategoriaService(categoriasRepository);
const createCategoriasController = new CreateCategoriasController(categoriaService);

export { createCategoriasController };