import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../database/mysqldb';
import PaymentEntity from './paymentEntity';

class ServiceEntity extends Model {
    public uuid!: string;
    public name!: string;
    public currency!:string;
    public cost_per_service!: number;
    public commission!: number; // Nota: Corregido de "commision" a "commission" para mantener la consistencia en la nomenclatura
    public cost_total!: number;
}

ServiceEntity.init(
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cost_per_service: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        commission: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        cost_total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Service',
    }
);

// 


export default ServiceEntity;