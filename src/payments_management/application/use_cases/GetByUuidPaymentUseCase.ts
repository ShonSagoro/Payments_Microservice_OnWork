import { BaseResponse } from "../dtos/response/BaseResponse";
import { PaymentMapperDTO } from "../mappers/PaymentMapperDTO";
import { PaymentInterface } from "../../domain/ports/payment_interface";


export class GetByUuidPaymentUseCase {
    constructor(readonly repostory: PaymentInterface) {}

    async execute(uuid: string): Promise<BaseResponse> {
        let result = await this.repostory.findByUUID(uuid);
        if (result) {
            let response = PaymentMapperDTO.toResponse(result);
            return new BaseResponse(response, 'Payment has been find successfully', true, 200);
        }
        return new BaseResponse(null, 'Payment not found', false, 404);
    }
}