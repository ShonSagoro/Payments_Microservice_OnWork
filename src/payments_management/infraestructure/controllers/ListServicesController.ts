import { Request, Response } from "express";
import { ListServiceUseCase } from "../../application/use_cases/ListServicesUseCase";
import { BaseResponse } from "../../../middleware/dtos/BaseResponse";

export class ListServiceController {
    constructor(readonly useCase: ListServiceUseCase) { }

    async execute(req: Request, res: Response) {
        try {
            let baseReponse = await this.useCase.execute();
            baseReponse.apply(res);
        } catch (error) {
            console.error(error);
            const baseReponse = new BaseResponse("Error", "Ha ocurrido un error durante su petición.", false, 500);
            baseReponse.apply(res);
        }
    }
}