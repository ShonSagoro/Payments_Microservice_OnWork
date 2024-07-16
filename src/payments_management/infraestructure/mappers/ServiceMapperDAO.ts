import { Service } from "../../domain/entities/services";
import ServiceEntity from "../daos/servicesEntity";


export class ServiceMapperDAO {
    static toDomain(serviceEntity: ServiceEntity): Service {
        let service = new Service(
            serviceEntity.dataValues.name,
            serviceEntity.dataValues.cost_per_service,
            serviceEntity.dataValues.currency
        );
        service.uuid = serviceEntity.dataValues.uuid;
        service.commission = serviceEntity.dataValues.commission;
        service.cost_total = serviceEntity.dataValues.cost_total;
        return service;
    }

    static toUpdateEntity(update: Service, uuid: string): ServiceEntity {
        return ServiceEntity.build({
            uuid: uuid,
            name: update.name,
            cost_per_service: update.cost_per_service,
            currency: update.currency
        });
    }

    static toEntity(service: Service): ServiceEntity {
        return ServiceEntity.build({
            uuid: service.uuid,
            name: service.name,
            cost_per_service: service.cost_per_service,
            currency: service.currency,
            commission: service.commission,
            cost_total: service.cost_total
        });
    }
}
