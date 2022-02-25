import { CategoriasMongoRepository } from "../../repositories/CategoriasMongoRepository";
import { UpdateCategoriaService } from "../../services/UpdateCategoriaService";
import { UpdateCategoriasController } from "./UpdateCategoriaController";

const categoriasRepository = new CategoriasMongoRepository;
const updateCategoriaService = new UpdateCategoriaService(categoriasRepository);
const updateCategoriasController = new UpdateCategoriasController(updateCategoriaService);

export { updateCategoriasController };