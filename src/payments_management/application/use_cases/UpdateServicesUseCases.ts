import { Request } from "express";
import { BaseResponse } from "../dtos/response/BaseResponse";
import { ServiceInterface } from "../../domain/ports/services_interface";
import { ServiceMapperDTO } from "../mappers/ServicesMapperDTO";
import { Service } from "../../domain/entities/services";


export class UpdateServicesUseCases {
    constructor(readonly repostory: ServiceInterface) {}

    async execute(uuid:string, req: Request): Promise<BaseResponse> {
        let request = ServiceMapperDTO.toUpdateRequest(req);
        if (!request) {
            return new BaseResponse(null, 'Bad request', false, 400);
        }
        let domain = ServiceMapperDTO.toDomainUpdate(request);
        let result: Service | null = await this.repostory.update(uuid, domain);
        if (result) {
            let response = ServiceMapperDTO.toResponse(result);
            return new BaseResponse(response, 'Services has been updated in successfully', true, 200);
        }
        return new BaseResponse(null, 'Services not updated', false, 404);
    }
} 