import { BaseResponse } from "../dtos/response/BaseResponse";
import { PaymentMapperDTO } from "../mappers/PaymentMapperDTO";
import { PaymentInterface } from "../../domain/ports/payment_interface";
import { Payment } from "../../domain/entities/payment";


export class GetPaymentsByUuidUserUseCase {
    constructor(readonly repostory: PaymentInterface) {}

    async execute(uuid: string): Promise<BaseResponse> {
        let results = await this.repostory.findByUserUUID(uuid);
        if (results) {
            let responses = results.map((result: Payment) => PaymentMapperDTO.toResponse(result));
            return new BaseResponse(responses, 'Payments has been found successfully', true, 200);
        }
        return new BaseResponse(null, 'Payment not found', false, 404);
    }
}