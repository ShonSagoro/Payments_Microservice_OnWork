import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from './validations/ValidatableEntity';

export class Service implements ValidatableEntity {

    private extra_cost:number = 0.15;

    public uuid: string;
    
    public name:string;

    public currency:string;
    
    public cost_per_service:number;

    public commission:number;

    public provider_uuid:string;

    public cost_total:number;

    constructor(name: string, cost_per_service:number, currency: string, provider_uuid:string ) {
        this.uuid = uuidv4();
        this.name=name;
        this.cost_per_service=cost_per_service;
        this.currency=currency;
        this.commission=cost_per_service * this.extra_cost;
        this.cost_total=cost_per_service + this.commission;
        this.provider_uuid=provider_uuid;        
    }

    async validate() {
        return Promise.resolve();
    }
}