import { Request } from 'express';
import { CreatePaymentRequest } from '../dtos/request/CreatePaymentRequest';
import { Payment } from '../../domain/entities/payment';
import { PaymentResposnse } from '../dtos/response/PaymentResponse';
import { Service } from '../../domain/entities/services';
import { ServiceMapperDTO } from './ServicesMapperDTO';


export class PaymentMapperDTO {
    static toCreateRequest(req: Request): CreatePaymentRequest | null {
        const body = req.body;
        if (!body.user_uuid || !body.provider_uuid || !body.service_uuid) {
            return null;
        }
        return new CreatePaymentRequest(body.user_uuid, body.provider_uuid, body.service_uuid);
    }

    static toResponse(domain: Payment): PaymentResposnse{
       let service_response = ServiceMapperDTO.toResponse(domain.service)
        return new PaymentResposnse(domain.uuid, domain.user_uuid, domain.provider_uuid, service_response, domain.status.toString());
    }

    static toDomain(request: CreatePaymentRequest): Payment {
        let service_default = new Service('default', 0.0, 'MXN', "")
        service_default.uuid = request.service_uuid
        return new Payment(request.user_uuid, request.provider_uuid, service_default);
    }
}