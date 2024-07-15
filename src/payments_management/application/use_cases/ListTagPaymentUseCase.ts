import { BaseResponse } from "../dtos/response/BaseResponse";
import { PaymentMapperDTO } from "../mappers/PaymentMapperDTO";
import { Payment } from "../../domain/entities/payment";
import { PaymentInterface } from "../../domain/ports/payment_interface";


export class ListPaymentUseCase {
    constructor(readonly repostory: PaymentInterface) {}

    async execute(): Promise<BaseResponse> {
        let result = await this.repostory.list();
        if (result) {
            let responses = result.map((Payment: Payment) => PaymentMapperDTO.toResponse( Payment));
            return new BaseResponse(responses, 'Payments has been find successfully', true, 200);
        }
        return new BaseResponse(null, 'Payment not found', false, 404);
    }
}