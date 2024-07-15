import { Express } from "express";
import JWTMiddleware from "../../../middleware/JWTMiddleware";
import { createServiceController, deleteServiceController, getByUuidServiceController, listServiceController, updateServicesController } from "../dependencies/ServiceDependencies";

let model = 'services';
const Verifytoken = JWTMiddleware.VerifyToken


export function setupServiceEndpoints(app: Express) {
    app.get(`/${model}/health`, (req, res) => {
        res.status(200).json({ status: 'OK' });
    });
    app.get(`/${model}/:uuid`, Verifytoken, getByUuidServiceController.execute.bind(getByUuidServiceController));
    app.get(`/${model}/`, Verifytoken, listServiceController.execute.bind(listServiceController));
    app.post(`/${model}/`, Verifytoken, createServiceController.execute.bind(createServiceController));
    app.put(`/${model}/:uuid`, Verifytoken, updateServicesController.execute.bind(updateServicesController));
    app.delete(`/${model}/:uuid`, Verifytoken, deleteServiceController.execute.bind(deleteServiceController));
}