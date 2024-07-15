import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from './validations/ValidatableEntity';

export class Payment implements ValidatableEntity {

    public uuid: string;
    
    public user_uuid:string;

    public provider_uuid:string;

    public product_uuid:string;

    constructor(user_uuid: string, provider_uuid: string, product_uuid:string){
        this.uuid = uuidv4();
        this.user_uuid=user_uuid
        this.provider_uuid=provider_uuid
        this.product_uuid=product_uuid
    }

    async validate() {
        return Promise.resolve();
    }
}