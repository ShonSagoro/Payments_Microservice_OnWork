export class CreateServiceRequest {
    name: string;
    cost_per_service: number;
    currency: string;
    provider_uuid: string;
    constructor(name: string, cost_per_service: number, currency: string, provider_uuid: string) {
        this.name=name
        this.cost_per_service=cost_per_service
        this.currency=currency
        this.provider_uuid=provider_uuid
    }
}