import { BaseResponse } from "../dtos/response/BaseResponse";
import { PaymentInterface } from "../../domain/ports/payment_interface";

export class DeletePaymentByUserUUIDUseCase {
    constructor(readonly repostory: PaymentInterface) {}

    async execute(uuid: string): Promise<BaseResponse> {
        let result = await this.repostory.deleteByUserUUID(uuid);
        if (result) {
            return new BaseResponse(null, 'Payment deleted by user uuid successfully', true, 200);
        }
        return new BaseResponse(null, 'Payment not found by user uuid', false, 404);
    }
}