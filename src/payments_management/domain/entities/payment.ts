import { Service } from './services';
import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from './validations/ValidatableEntity';
import { StatusEnum } from './enums/StatusEnum';

export class Payment implements ValidatableEntity {

    public uuid: string;
    
    public user_uuid:string;

    public provider_uuid:string;

    public service: Service;

    public status: StatusEnum;

    constructor(user_uuid: string, provider_uuid: string, service:Service){
        this.uuid = uuidv4();
        this.user_uuid=user_uuid
        this.provider_uuid=provider_uuid
        this.service=service
        this.status=StatusEnum.PENDING
    }

    async validate() {
        return Promise.resolve();
    }
}