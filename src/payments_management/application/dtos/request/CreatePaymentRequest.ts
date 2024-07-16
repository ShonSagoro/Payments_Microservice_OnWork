export class CreatePaymentRequest {
    user_uuid: string;
    provider_uuid: string;
    service_uuid: string;

    constructor(user_uuid: string, provider_uuid: string, service_uuid: string){
        this.user_uuid=user_uuid
        this.provider_uuid=provider_uuid
        this.service_uuid=service_uuid
    }
}