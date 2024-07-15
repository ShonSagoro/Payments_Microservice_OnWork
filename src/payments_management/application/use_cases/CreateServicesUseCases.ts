import { Request } from "express";
import { BaseResponse } from "../dtos/response/BaseResponse";
import { ServiceInterface } from "../../domain/ports/services_interface";
import { ServiceMapperDTO } from "../mappers/ServicesMapperDTO";
import { Service } from "../../domain/entities/services";


export class CreateServiceUseCases {
    constructor(readonly repostory: ServiceInterface) {}

    async execute(req: Request): Promise<BaseResponse> {
        let createServicesRequest = ServiceMapperDTO.toCreateRequest(req);
        if (!createServicesRequest) {
            return new BaseResponse(null, 'Bad request', false, 400);
        }
        let domain = ServiceMapperDTO.toDomain(createServicesRequest);
        let result: Service | null = await this.repostory.create(domain);
        if (result) {
            let response = ServiceMapperDTO.toResponse(result);
            return new BaseResponse(response, 'Services has been created in successfully', true, 200);
        }
        return new BaseResponse(null, 'Services not created', false, 404);
    }
} 