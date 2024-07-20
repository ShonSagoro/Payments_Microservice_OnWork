
import { Request, Response } from "express";
import { GetPaymentsByUuidUserUseCase } from "../../application/use_cases/GetPaymentsByUuidUserUseCase";
import { BaseResponse } from "../../../middleware/dtos/BaseResponse";


export class GetPaymentsByUuidUserController {
    constructor(readonly useCase: GetPaymentsByUuidUserUseCase) { }

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