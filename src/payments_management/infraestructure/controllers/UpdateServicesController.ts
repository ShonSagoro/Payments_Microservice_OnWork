import { Request, Response } from "express";
import { UpdateServicesUseCases } from "../../application/use_cases/UpdateServicesUseCases";
import { BaseResponse } from "../../../middleware/dtos/BaseResponse";



export class UpdateServicesController {
    constructor(readonly useCase: UpdateServicesUseCases) { }

    async execute(req: Request, res: Response) {
        try {
            const { uuid } = req.params;
            let baseReponse = await this.useCase.execute(uuid, req);
            baseReponse.apply(res);
        } catch (error) {
            console.error(error);
            const baseReponse = new BaseResponse("Error", "Ha ocurrido un error durante su petición.", false, 500);
            baseReponse.apply(res);
        }
    }
}