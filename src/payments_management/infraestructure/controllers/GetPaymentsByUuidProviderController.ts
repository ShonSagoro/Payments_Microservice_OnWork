
import { Request, Response } from "express";
import { BaseResponse } from "../../../middleware/dtos/BaseResponse";
import { GetPaymentsByUuidProviderUseCase } from "../../application/use_cases/GetPaymentsByUuidProviderUseCase";


export class GetPaymentsByUuidProviderController {
    constructor(readonly useCase: GetPaymentsByUuidProviderUseCase) { }

    async execute(req: Request, res: Response) {
        const { uuid } = req.params;
        try {
            let baseReponse = await this.useCase.execute(uuid);
            baseReponse.apply(res);
        } catch (error) {
            console.error(error);
            const baseReponse = new BaseResponse("Error", "Ha ocurrido un error durante su petición.", false, 500);
            baseReponse.apply(res);
        }
    }
}