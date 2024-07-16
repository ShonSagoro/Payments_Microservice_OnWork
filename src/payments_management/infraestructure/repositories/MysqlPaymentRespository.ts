import sequelize from "../../../database/mysqldb";
import { Payment } from "../../domain/entities/payment";
import { PaymentInterface } from "../../domain/ports/payment_interface";
import PaymentEntity from "../daos/paymentEntity";
import { PaymentMapperDAO } from "../mappers/PaymentMapperDAO";
import { MysqlServiceRepository } from "./MysqlServiceRepository";

export class MysqlPaymentRepository implements PaymentInterface {

    private _serviceRepository: MysqlServiceRepository | null = null;

    get serviceRepository(): MysqlServiceRepository {
        if (!this._serviceRepository) {
            this._serviceRepository = new MysqlServiceRepository();
        }
        return this._serviceRepository;
    }


    async create(payment: Payment): Promise<Payment | null> {
        try {
            return await this.withTransaction(async (transaction: any) => {
                const paymentEntity = PaymentMapperDAO.toEntity(payment);
                await paymentEntity.save({ transaction });
                let service = await this.serviceRepository.findByUUID(payment.service.uuid);
                if (!service) {
                    return null;
                }
                payment = PaymentMapperDAO.toDomain(paymentEntity, service);
                return payment;
            });
        } catch (error) {
            console.error('Error creating payment:', error);
            return null;
        }
    }

    async delete(uuid: string): Promise<boolean> {
        try {
            await PaymentEntity.destroy({ where: { uuid } });
            return true;
        } catch (error) {
            console.error('Error deleting payment:', error);
            return false;
        }
    }

    async deleteByUserUUID(user_uuid: string): Promise<boolean> {
        try {
            await PaymentEntity.destroy({ where: { user_uuid } });
            return true;
        } catch (error) {
            console.error('Error deleting payments by user UUID:', error);
            return false;
        }
    }

    
    async findByUUID(uuid: string): Promise<Payment | null> {
        try {
            return await PaymentEntity.findByPk(uuid)
                .then((paymentEntity) => {
                    if (paymentEntity) {
                        return this.serviceRepository.findByUUID(paymentEntity.dataValues.service_uuid)
                            .then((service) => {
                                if (service) {
                                    return PaymentMapperDAO.toDomain(paymentEntity, service);
                                }
                                return null;
                            });
                    }
                    return null;
                });
        } catch (error) {
            console.error('Error finding payment by UUID:', error);
            return null;
        }
    }

    async list(): Promise<Payment[] | null> {
        try {
            const paymentEntities = await PaymentEntity.findAll();
            const payments: (Payment | null)[] = [];
            for (const paymentEntity of paymentEntities) {
                const service = await this.serviceRepository.findByUUID(paymentEntity.dataValues.service_uuid);
                if (service) {
                    const payment = PaymentMapperDAO.toDomain(paymentEntity, service);
                    payments.push(payment);
                }
            }
            return payments.filter(payment => payment !== null);
        } catch (error) {
            console.error('Error listing payments:', error);
            return null;
        }
    }

    async findByUserUUID(user_uuid: string): Promise<Payment[]> {
        try {
            const paymentEntities = await PaymentEntity.findAll({ where: { user_uuid } });
            const payments: (Payment | null)[] = [];
            for (const paymentEntity of paymentEntities) {
                const service = await this.serviceRepository.findByUUID(paymentEntity.dataValues.service_uuid);
                if (service) {
                    const payment = PaymentMapperDAO.toDomain(paymentEntity, service);
                    payments.push(payment);
                }
            }
            return payments.filter(payment => payment !== null);
        } catch (error) {
            console.error('Error finding payments by user UUID:', error);
            return [];
        }
    }

    private async withTransaction(callback: (transaction: any) => Promise<any>): Promise<any> {
        const transaction = await sequelize.transaction();
        try {
            const result = await callback(transaction);
            await transaction.commit();
            return result;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}
