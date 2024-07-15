import { Request, Response } from "express";
import { BaseResponse } from "../../../middleware/dtos/BaseResponse";
import { CreateServiceUseCases } from "../../application/use_cases/CreateServicesUseCases";

export class CreateServiceController {
    constructor(readonly useCase: CreateServiceUseCases) { }

    async execute(req: Request, res: Response) {
        try {
            let baseReponse = await this.useCase.execute(req);
            baseReponse.apply(res);
        } catch (error) {
            console.error(error);
            const baseReponse = new BaseResponse("Error", "Ha ocurrido un error durante su petición.", false, 500);
            baseReponse.apply(res);
        }
    }
}