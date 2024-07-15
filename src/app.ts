import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import {Signale} from "signale";

import cors from 'cors';
import { rateLimiter } from './middleware/RateLimiter';
import { setupServiceEndpoints } from './payments_management/infraestructure/endpoints/ServiceEndpoints';
import { setupPaymentEndpoints } from './payments_management/infraestructure/endpoints/PaymentEndpoints';
dotenv.config();

const app = express();
const signale = new Signale();
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

const HOST:string = process.env.HOST_SERVER || '0.0.0.0';
const PORT:number  = Number(process.env.PORT_SERVER) || 3002;

app.use(express.json()); 
app.use(morgan('dev'))
setupServiceEndpoints(app);
setupPaymentEndpoints(app);
let server = null;

async function startServer() {
    server = app.listen(PORT, HOST, () => {
        signale.success(`Server is running on http://${HOST}:${PORT}`);
    });
}
startServer();

export { app, server };