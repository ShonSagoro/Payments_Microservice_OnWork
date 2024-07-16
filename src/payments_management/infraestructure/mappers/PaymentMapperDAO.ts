import { Payment } from "../../domain/entities/payment";
import { Service } from "../../domain/entities/services";
import PaymentEntity from "../daos/paymentEntity";

export class PaymentMapperDAO {
    static toDomain(paymentEntity: PaymentEntity, service: Service): Payment {
        let payment = new Payment(paymentEntity.dataValues.user_uuid, paymentEntity.dataValues.provider_uuid, service);
        payment.uuid = paymentEntity.dataValues.uuid;
        return payment;
    }

    static toEntity(payment: Payment): PaymentEntity {
        return PaymentEntity.build({
            uuid: payment.uuid,
            user_uuid: payment.user_uuid,
            provider_uuid: payment.provider_uuid,
            service_uuid: payment.service.uuid,
            status: payment.status,
        });
    }
}
