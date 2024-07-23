import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../database/mysqldb';

class PaymentEntity extends Model {
    public uuid!: string;
    public user_uuid!: string;
    public provider_uuid!: string;
    public service_uuid!: string;
    public status!: string;
}

PaymentEntity.init(
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        provider_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        service_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Payment',
    }
);



export default PaymentEntity;