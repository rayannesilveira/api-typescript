import { CategoriasMongoRepository } from "../../repositories/CategoriasMongoRepository";
import { DeleteCategoriaService } from "../../services/DeleteCategoriaService";
import { DeleteCategoriaController } from "./DeleteCategoriaController";

const categoriasRepository = new CategoriasMongoRepository;
const deleteCategoriaService = new DeleteCategoriaService(categoriasRepository);
const deleteCategoriaController = new DeleteCategoriaController(deleteCategoriaService);

export { deleteCategoriaController };