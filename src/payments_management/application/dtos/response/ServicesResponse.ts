export class ServicesResposnse{
    uuid: string;
    name: string;
    cost_total: number;

    constructor(uuid:string, name: string, cost_total: number){
        this.uuid=uuid
        this.name=name
        this.cost_total=cost_total
    }
}