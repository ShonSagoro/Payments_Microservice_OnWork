import { ServiceInterface } from './../../domain/ports/services_interface';
import { BaseResponse } from "../dtos/response/BaseResponse";

export class DeleteServiceUseCase {
    constructor(readonly repostory: ServiceInterface) {}

    async execute(uuid: string): Promise<BaseResponse> {
        let result = await this.repostory.delete(uuid);
        if (result) {
            return new BaseResponse(null, 'Service deleted successfully', true, 200);
        }
        return new BaseResponse(null, 'Service not found', false, 404);
    }
}