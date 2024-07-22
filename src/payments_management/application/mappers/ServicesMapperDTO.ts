import { Request } from 'express';
import { CreateServiceRequest } from '../dtos/request/CreateServiceRequest';
import { ServicesResposnse } from '../dtos/response/ServicesResponse';
import { Service } from '../../domain/entities/services';
import { UpdateServiceRequest } from '../dtos/request/UpdateServicesRequest';



export class ServiceMapperDTO {
    static toCreateRequest(req: Request): CreateServiceRequest | null {
        const body = req.body;
        if (!body.name || !body.cost_per_service || !body.currency || !body.provider_uuid) {
            return null;
        }
        return new CreateServiceRequest(body.name, parseFloat(body.cost_per_service), body.currency, body.provider_uuid);
    }

    static toUpdateRequest(req: Request): UpdateServiceRequest | null {
        const body = req.body;
        if (!body.name || !body.cost_per_service || !body.currency) {
            return null;
        }
        return new UpdateServiceRequest(body.name, parseFloat(body.cost_per_service), body.currency);
    }

    static toResponse(domain: Service): ServicesResposnse{
        return new ServicesResposnse(domain.uuid, domain.name, domain.cost_per_service, domain.currency, domain.provider_uuid);
    }

    static toDomainCreate(request: CreateServiceRequest): Service {
        return new Service(request.name, request.cost_per_service, request.currency, request.provider_uuid);
    }
    static toDomainUpdate(request: UpdateServiceRequest): Service {
        return new Service(request.name, request.cost_per_service, request.currency, "");
    }
}