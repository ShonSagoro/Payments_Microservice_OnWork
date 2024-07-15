import sequelize from "../../../database/mysqldb";
import { Payment } from "../../domain/entities/payment";
import { PaymentInterface } from "../../domain/ports/payment_interface";
import PaymentEntity from "../daos/paymentEntity";
import { PaymentMapperDAO } from "../mappers/PaymentMapperDAO";

export class MysqlPaymentRepository implements PaymentInterface {

    async create(payment: Payment): Promise<Payment | null> {
        try {
            return await this.withTransaction(async (transaction: any) => {
                const paymentEntity = PaymentMapperDAO.toEntity(payment);
                await paymentEntity.save({ transaction });
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

    async list(): Promise<Payment[] | null> {
        try {
            const paymentEntities = await PaymentEntity.findAll();
            return paymentEntities.map(paymentEntity => PaymentMapperDAO.toDomain(paymentEntity));
        } catch (error) {
            console.error('Error listing payments:', error);
            return null;
        }
    }

    async findByUUID(uuid: string): Promise<Payment | null> {
        try {
            return await PaymentEntity.findByPk(uuid)
                .then(paymentEntity => paymentEntity ? PaymentMapperDAO.toDomain(paymentEntity) : null);
        } catch (error) {
            console.error('Error finding payment by UUID:', error);
            return null;
        }
    }

    async findByUserUUID(user_uuid: string): Promise<Payment[]> {
        try {
            const paymentEntities = await PaymentEntity.findAll({ where: { user_uuid } });
            return paymentEntities.map(paymentEntity => PaymentMapperDAO.toDomain(paymentEntity));
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
