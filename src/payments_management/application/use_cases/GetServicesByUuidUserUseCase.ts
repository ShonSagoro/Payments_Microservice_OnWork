import { BaseResponse } from "../dtos/response/BaseResponse";
import { ServiceInterface } from "../../domain/ports/services_interface";
import { Service } from "../../domain/entities/services";
import { ServiceMapperDTO } from "../mappers/ServicesMapperDTO";


export class GetServicesByUuidUserUseCase {
    constructor(readonly repostory: ServiceInterface) {}

    async execute(uuid: string): Promise<BaseResponse> {
        let results = await this.repostory.findByUserUUID(uuid);
        if (results) {
            let responses = results.map((result: Service) => ServiceMapperDTO.toResponse(result));
            return new BaseResponse(responses, 'Services has been found successfully', true, 200);
        }
        return new BaseResponse(null, 'Services not found', false, 404);
    }
}