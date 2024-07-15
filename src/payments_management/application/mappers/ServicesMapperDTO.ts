import { Request } from 'express';
import { CreateServiceRequest } from '../dtos/request/CreateServiceRequest';
import { ServicesResposnse } from '../dtos/response/ServicesResponse';
import { Service } from '../../domain/entities/services';
import { UpdateServiceRequest } from '../dtos/request/UpdateServicesRequest';



export class ServiceMapperDTO {
    static toCreateRequest(req: Request): CreateServiceRequest | null {
        const body = req.body;
        if (!body.name || !body.cost_per_service) {
            return null;
        }
        return new CreateServiceRequest(body.name, parseFloat(body.cost_per_service));
    }

    static toUpdateRequest(req: Request): UpdateServiceRequest | null {
        const body = req.body;
        if (!body.name || !body.cost_per_service) {
            return null;
        }
        return new UpdateServiceRequest(body.name, parseFloat(body.cost_per_service));
    }

    static toResponse(domain: Service): ServicesResposnse{
        return new ServicesResposnse(domain.uuid, domain.name, domain.cost_per_service);
    }

    static toDomain(request: CreateServiceRequest): Service {
        return new Service(request.name, request.cost_per_service);
    }
}