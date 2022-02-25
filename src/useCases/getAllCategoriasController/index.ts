import { CategoriasMongoRepository } from "../../repositories/CategoriasMongoRepository";
import { GetAllCategoriasService } from "../../services/GetAllCategoriasService";
import { GetAllCategoriasController } from "./GetAllCategoriasController";


const categoriasRepository = new CategoriasMongoRepository();
const getAllCategoriasService = new GetAllCategoriasService(categoriasRepository);

const getAllCategoriasController = new GetAllCategoriasController(getAllCategoriasService); 

export { getAllCategoriasController };