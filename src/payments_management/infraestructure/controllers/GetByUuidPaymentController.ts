import { Request, Response } from "express";
import { GetByUuidPaymentUseCase } from "../../application/use_cases/GetByUuidPaymentUseCase";
import { BaseResponse } from "../../../middleware/dtos/BaseResponse";

export class GetByUuidPaymentController {
    constructor(readonly useCase: GetByUuidPaymentUseCase) { }

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