import { Request } from "express";
import { BaseResponse } from "../dtos/response/BaseResponse";
import { PaymentInterface } from "../../domain/ports/payment_interface";
import { Payment } from "../../domain/entities/payment";
import { PaymentMapperDTO } from "../mappers/PaymentMapperDTO";

export class CreatePaymentUseCases {
    constructor(readonly repostory: PaymentInterface) {}

    async execute(req: Request): Promise<BaseResponse> {
        let createPaymentRequest = PaymentMapperDTO.toCreateRequest(req);
        if (!createPaymentRequest) {
            return new BaseResponse(null, 'Bad request', false, 400);
        }
        let domain = PaymentMapperDTO.toDomain(createPaymentRequest);
        let result: Payment | null = await this.repostory.create(domain);
        if (result) {
            let response = PaymentMapperDTO.toResponse(result);
            return new BaseResponse(response, 'Payment has been created in successfully', true, 200);
        }
        return new BaseResponse(null, 'Payment not created', false, 404);
    }
} 