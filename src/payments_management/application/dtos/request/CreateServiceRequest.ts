export class CreateServiceRequest {
    name: string;
    cost_per_service: number;
    currency: string;

    constructor(name: string, cost_per_service: number, currency: string) {
        this.name=name
        this.cost_per_service=cost_per_service
        this.currency=currency
    }
}