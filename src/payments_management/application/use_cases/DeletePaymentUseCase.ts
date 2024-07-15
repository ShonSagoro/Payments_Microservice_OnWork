import { BaseResponse } from "../dtos/response/BaseResponse";
import { PaymentInterface } from "../../domain/ports/payment_interface";

export class DeletePaymentUseCase {
    constructor(readonly repostory: PaymentInterface) {}

    async execute(uuid: string): Promise<BaseResponse> {
        let result = await this.repostory.delete(uuid);
        if (result) {
            return new BaseResponse(null, 'Payment deleted successfully', true, 200);
        }
        return new BaseResponse(null, 'Payment not found', false, 404);
    }
}