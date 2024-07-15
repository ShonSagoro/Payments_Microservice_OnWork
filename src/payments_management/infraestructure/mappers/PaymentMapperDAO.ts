import { Payment } from "../../domain/entities/payment";
import PaymentEntity from "../daos/paymentEntity";

export class PaymentMapperDAO {
    static toDomain(paymentEntity: PaymentEntity): Payment {
        let payment = new Payment(
            paymentEntity.dataValues.user_uuid,
            paymentEntity.dataValues.provider_uuid,
            paymentEntity.dataValues.product_uuid
        );
        payment.uuid = paymentEntity.dataValues.uuid;
        return payment;
    }

    static toUpdateEntity(payment: Payment, uuid: string): PaymentEntity {
        return PaymentEntity.build({
            uuid: uuid,
            user_uuid: payment.user_uuid,
            provider_uuid: payment.provider_uuid,
            product_uuid: payment.product_uuid
        });
    }

    static toEntity(payment: Payment): PaymentEntity {
        return PaymentEntity.build({
            uuid: payment.uuid,
            user_uuid: payment.user_uuid,
            provider_uuid: payment.provider_uuid,
            product_uuid: payment.product_uuid
        });
    }
}
