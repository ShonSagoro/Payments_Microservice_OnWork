export class ServicesResposnse{
    uuid: string;
    name: string;
    cost_total: number;
    currency: string;
    provider_uuid: string;

    constructor(uuid:string, name: string, cost_total: number, currency: string, provider_uuid:string){
        this.uuid=uuid
        this.name=name
        this.cost_total=cost_total
        this.currency=currency
        this.provider_uuid=provider_uuid
    }
}