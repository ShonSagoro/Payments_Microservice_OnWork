import { Request } from 'express';
import { CreatePaymentRequest } from '../dtos/request/CreatePaymentRequest';
import { Payment } from '../../domain/entities/payment';
import { PaymentResposnse } from '../dtos/response/PaymentResponse';


export class PaymentMapperDTO {
    static toCreateRequest(req: Request): CreatePaymentRequest | null {
        const body = req.body;
        if (!body.user_uuid || !body.provider_uuid || !body.product_uuid) {
            return null;
        }
        return new CreatePaymentRequest(body.user_uuid, body.provider_uuid, body.product_uuid);
    }

    static toResponse(domain: Payment): PaymentResposnse{
        return new PaymentResposnse(domain.uuid, domain.user_uuid, domain.provider_uuid, domain.product_uuid);
    
    }

    static toDomain(request: CreatePaymentRequest): Payment {
        return new Payment(request.user_uuid, request.provider_uuid, request.product_uuid);
    }
}