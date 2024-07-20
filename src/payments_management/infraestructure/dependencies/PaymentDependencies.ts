import { ListPaymentUseCase } from './../../application/use_cases/ListPaymentUseCase';
import { GetByUuidPaymentUseCase } from './../../application/use_cases/GetByUuidPaymentUseCase';
import { DeletePaymentUseCase } from './../../application/use_cases/DeletePaymentUseCase';
import { DeletePaymentByUserUUIDUseCase } from './../../application/use_cases/DeletePaymentByUserUUIDUseCase';
import { MysqlPaymentRepository } from '../repositories/MysqlPaymentRespository';
import { CreatePaymentUseCases } from './../../application/use_cases/CreatePaymentUseCases';
import { CreatePaymentController } from '../controllers/CreatePaymentController';
import { DeletePaymentByUserUUIDController } from '../controllers/DeletePaymentByUserUUIDController';
import { DeletePaymentController } from '../controllers/DeletePaymentController';
import { GetByUuidPaymentController } from '../controllers/GetByUuidPaymentController';
import { ListPaymentController } from '../controllers/ListPaymentController';
import { GetPaymentsByUuidUserUseCase } from '../../application/use_cases/GetPaymentsByUuidUserUseCase';
import { GetPaymentsByUuidUserController } from '../controllers/GetPaymentsByUuidUserController';

const repository = new MysqlPaymentRepository();

export const createPaymentUseCases = new CreatePaymentUseCases(repository);
export const deletePaymentByUserUUIDUseCase = new DeletePaymentByUserUUIDUseCase(repository);
export const deletePaymentUseCase = new DeletePaymentUseCase(repository);
export const getByUuidPaymentUseCase = new GetByUuidPaymentUseCase(repository);
export const listPaymentUseCase = new ListPaymentUseCase(repository);
export const getPaymentsByUuidUserUseCase = new GetPaymentsByUuidUserUseCase(repository);

export const createPaymentController = new CreatePaymentController(createPaymentUseCases);
export const deletePaymentByUserUUIDController = new DeletePaymentByUserUUIDController(deletePaymentByUserUUIDUseCase);
export const deletePaymentController = new DeletePaymentController(deletePaymentUseCase);
export const getByUuidPaymentController = new GetByUuidPaymentController(getByUuidPaymentUseCase);
export const listPaymentController = new ListPaymentController(listPaymentUseCase);
export const getPaymentsByUuidUserController = new GetPaymentsByUuidUserController(getPaymentsByUuidUserUseCase)