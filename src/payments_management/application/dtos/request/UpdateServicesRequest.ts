export class UpdateServiceRequest {
    name: string;
    cost_per_service: number;

    constructor(name: string, cost_per_service: number){
        this.name=name
        this.cost_per_service=cost_per_service
    }
}