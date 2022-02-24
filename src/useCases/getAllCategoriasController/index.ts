import { CategoriasRepository } from "../../repositories/CategoriasRepository";
import { GetAllCategoriasService } from "../../services/GetAllCategoriasService";
import { GetAllCategoriasController } from "./GetAllCategoriasController";


const categoriasRepository = CategoriasRepository.getInstance();
const getAllCategoriasService = new GetAllCategoriasService(categoriasRepository);

const getAllCategoriasController = new GetAllCategoriasController(getAllCategoriasService); 

export { getAllCategoriasController };