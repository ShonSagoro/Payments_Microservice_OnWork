import { Request, Response } from "express";
import { ListPaymentUseCase } from "../../application/use_cases/ListPaymentUseCase";
import { BaseResponse } from "../../../middleware/dtos/BaseResponse";

export class ListPaymentController {
    constructor(readonly useCase: ListPaymentUseCase) { }

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