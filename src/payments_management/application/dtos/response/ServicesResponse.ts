export class ServicesResposnse{
    uuid: string;
    name: string;
    cost_total: number;
    currency: string;

    constructor(uuid:string, name: string, cost_total: number, currency: string){
        this.uuid=uuid
        this.name=name
        this.cost_total=cost_total
        this.currency=currency
    }
}