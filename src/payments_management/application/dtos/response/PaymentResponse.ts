import { ServicesResposnse } from "./ServicesResponse";

export class PaymentResposnse{
    uuid: string;
    user_uuid: string;
    provider_uuid: string;
    status: string;
    service: ServicesResposnse;

    constructor(uuid:string, user_uuid: string, provider_uuid: string, service: ServicesResposnse, status: string){
        this.uuid=uuid
        this.user_uuid=user_uuid
        this.provider_uuid=provider_uuid
        this.service=service
        this.status=status
    }
}