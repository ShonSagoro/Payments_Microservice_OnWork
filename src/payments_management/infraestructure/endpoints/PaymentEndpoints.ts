import { Express } from "express";
import JWTMiddleware from "../../../middleware/JWTMiddleware";
import { createPaymentController, deletePaymentByUserUUIDController, deletePaymentController, getByUuidPaymentController, getPaymentsByUuidProviderController, getPaymentsByUuidUserController, listPaymentController } from "../dependencies/PaymentDependencies";

let model = 'payments';
const Verifytoken = JWTMiddleware.VerifyToken


export function setupPaymentEndpoints(app: Express) {
    app.get(`/${model}/health`, (req, res) => {
        res.status(200).json({ status: 'OK' });
    });
    app.get(`/${model}/:uuid`, Verifytoken, getByUuidPaymentController.execute.bind(getByUuidPaymentController));
    app.get(`/${model}/user/:uuid`, Verifytoken, getPaymentsByUuidUserController.execute.bind(getPaymentsByUuidUserController));
    app.get(`/${model}/provider/:uuid`, Verifytoken, getPaymentsByUuidProviderController.execute.bind(getPaymentsByUuidProviderController));
    app.get(`/${model}/`, Verifytoken, listPaymentController.execute.bind(listPaymentController));
    app.post(`/${model}/`, Verifytoken, createPaymentController.execute.bind(createPaymentController));
    app.put(`/${model}/:uuid`, Verifytoken, deletePaymentByUserUUIDController.execute.bind(deletePaymentByUserUUIDController));
    app.delete(`/${model}/user/:uuid`, Verifytoken, deletePaymentByUserUUIDController.execute.bind(deletePaymentByUserUUIDController));
    app.delete(`/${model}/:uuid`, Verifytoken, deletePaymentController.execute.bind(deletePaymentController));
}