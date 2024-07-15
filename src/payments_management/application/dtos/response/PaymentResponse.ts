export class PaymentResposnse{
    uuid: string;
    user_uuid: string;
    provider_uuid: string;
    product_uuid: string;

    constructor(uuid:string, user_uuid: string, provider_uuid: string, product_uuid: string){
        this.uuid=uuid
        this.user_uuid=user_uuid
        this.provider_uuid=provider_uuid
        this.product_uuid=product_uuid
    }
}