import { BaseResponse } from "../dtos/response/BaseResponse";
import { ServiceMapperDTO } from "../mappers/ServicesMapperDTO";
import { Service } from "../../domain/entities/services";
import { ServiceInterface } from "../../domain/ports/services_interface";

export class ListServiceUseCase {
    constructor(readonly repostory: ServiceInterface) {}

    async execute(): Promise<BaseResponse> {
        let result = await this.repostory.list();
        if (result) {
            let responses = result.map((Service: Service) => ServiceMapperDTO.toResponse( Service));
            return new BaseResponse(responses, 'Services has been find successfully', true, 200);
        }
        return new BaseResponse(null, 'Service not found', false, 404);
    }
}