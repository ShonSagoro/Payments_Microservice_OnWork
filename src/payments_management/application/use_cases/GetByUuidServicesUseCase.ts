import { ServiceMapperDTO } from './../mappers/ServicesMapperDTO';
import { BaseResponse } from "../dtos/response/BaseResponse";
import { ServiceInterface } from '../../domain/ports/services_interface';

export class GetByUuidServiceUseCase {
    constructor(readonly repostory: ServiceInterface) {}

    async execute(uuid: string): Promise<BaseResponse> {
        let result = await this.repostory.findByUUID(uuid);
        if (result) {
            let response = ServiceMapperDTO.toResponse(result);
            return new BaseResponse(response, 'Service has been find successfully', true, 200);
        }
        return new BaseResponse(null, 'Service not found', false, 404);
    }
}