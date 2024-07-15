export class CreatePaymentRequest {
    user_uuid: string;
    provider_uuid: string;
    product_uuid: string;

    constructor(user_uuid: string, provider_uuid: string, product_uuid: string){
        this.user_uuid=user_uuid
        this.provider_uuid=provider_uuid
        this.product_uuid=product_uuid
    }
}