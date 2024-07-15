import { UpdateServicesUseCases } from './../../application/use_cases/UpdateServicesUseCases';
import exp from "constants";
import { MysqlServiceRepository } from "../repositories/MysqlServiceRepository";
import { DeleteServiceUseCase } from '../../application/use_cases/DeleteServicesUseCase';
import { GetByUuidServiceUseCase } from '../../application/use_cases/GetByUuidServicesUseCase';
import { ListServiceUseCase } from '../../application/use_cases/ListServicesUseCase';
import { CreateServiceController } from '../controllers/CreateServicesController';
import { CreateServiceUseCases } from '../../application/use_cases/CreateServicesUseCases';
import { DeleteServiceController } from '../controllers/DeleteServicesController';
import { GetByUuidServiceController } from '../controllers/GetByUuidServicesController';
import { ListServiceController } from '../controllers/ListServicesController';
import { UpdateServicesController } from '../controllers/UpdateServicesController';


const repository = new MysqlServiceRepository();

export const createServiceUseCases = new CreateServiceUseCases(repository);
export const deleteServiceUseCase = new DeleteServiceUseCase(repository);
export const getByUuidServiceUseCase = new GetByUuidServiceUseCase(repository);
export const listServiceUseCase = new ListServiceUseCase(repository);
export const updateServicesUseCases = new UpdateServicesUseCases(repository);

export const createServiceController = new CreateServiceController(createServiceUseCases);
export const deleteServiceController = new DeleteServiceController(deleteServiceUseCase);
export const getByUuidServiceController = new GetByUuidServiceController(getByUuidServiceUseCase);
export const listServiceController = new ListServiceController(listServiceUseCase);
export const updateServicesController = new UpdateServicesController(updateServicesUseCases);