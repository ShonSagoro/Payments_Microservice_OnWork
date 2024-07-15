import { Payment } from "../entities/payment";

export interface PaymentInterface {
    create(payment: Payment): Promise<Payment|null>;
    delete(uuid: string): Promise<boolean>;
    deleteByUserUUID(uuid: string): Promise<boolean>;
    list(): Promise<Payment[]|null>;
    findByUUID(uuid: string): Promise<Payment|null>;
    findByUserUUID(uuid: string): Promise<Payment[]>;
}