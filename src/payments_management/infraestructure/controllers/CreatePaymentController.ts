import { Request, Response } from "express";
import { CreatePaymentUseCases } from "../../application/use_cases/CreatePaymentUseCases";
import { BaseResponse } from "../../../middleware/dtos/BaseResponse";

export class CreatePaymentController {
    constructor(readonly useCase: CreatePaymentUseCases) { }

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