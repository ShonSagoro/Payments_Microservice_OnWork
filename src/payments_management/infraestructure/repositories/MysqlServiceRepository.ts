import sequelize from "../../../database/mysqldb";
import { Service } from "../../domain/entities/services";
import { ServiceInterface } from "../../domain/ports/services_interface";
import ServiceEntity from "../daos/servicesEntity";
import { ServiceMapperDAO } from "../mappers/ServiceMapperDAO";

export class MysqlServiceRepository implements ServiceInterface {
    
    async findByUserUUID(uuid: string): Promise<Service[] | null> {
        try {
            const services = await ServiceEntity.findAll({ where: { user_uuid: uuid } });
            return services.map(service => ServiceMapperDAO.toDomain(service));
        } catch (error) {
            console.error('Error finding services by user UUID:', error);
            return null;
        }
    }

    async create(service: Service): Promise<Service | null> {
        try {
            return await this.withTransaction(async (transaction: any) => {
                const serviceEntity = ServiceMapperDAO.toEntity(service);
                await serviceEntity.save({ transaction });
                return service;
            });
        } catch (error) {
            console.error('Error creating service:', error);
            return null;
        }
    }

    async update(uuid: string, service: Service, transaction?: any): Promise<Service | null> {
        try {
            const existingService = await this.findByUUID(uuid);
            if (!existingService) return null;

            const updateData = ServiceMapperDAO.toUpdateEntity(service, uuid);
            return await this.withTransaction(async (transaction: any) => {
                
                await ServiceEntity.update({
                    name: updateData.name,
                    cost_per_service: updateData.cost_per_service,
                    currency: updateData.currency
                }, { where: { uuid }, transaction });
                service.uuid = uuid;
                return service;
            }); //TODO: Fix this
        } catch (error) {
            console.error('Error updating service:', error);
            return null;
        }
    }

    async delete(uuid: string, transaction?: any): Promise<boolean> {
        try {
            await ServiceEntity.destroy({ where: { uuid }, transaction });
            return true;
        } catch (error) {
            console.error('Error deleting service:', error);
            return false;
        }
    }

    async list(transaction?: any): Promise<Service[] | null> {
        try {
            const serviceEntities = await ServiceEntity.findAll({ transaction });
            return serviceEntities.map(serviceEntity => ServiceMapperDAO.toDomain(serviceEntity));
        } catch (error) {
            console.error('Error listing services:', error);
            return null;
        }
    }

    async findByUUID(uuid: string, transaction?: any): Promise<Service | null> {
        try {
            return await ServiceEntity.findByPk(uuid, { transaction })
                .then(serviceEntity => serviceEntity ? ServiceMapperDAO.toDomain(serviceEntity) : null);
        } catch (error) {
            console.error('Error finding service by UUID:', error);
            return null;
        }
    }

    private async withTransaction(callback: (transaction: any) => Promise<any>): Promise<any> {
        const transaction = await sequelize.transaction();
        try {
            const result = await callback(transaction);
            await transaction.commit();
            return result;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}
