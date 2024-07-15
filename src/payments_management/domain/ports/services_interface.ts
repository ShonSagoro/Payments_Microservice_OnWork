import { Service } from "../entities/services";


export interface ServiceInterface {
    create(Service: Service): Promise<Service|null>;
    update(uuid:string, Service: Service): Promise<Service|null>;
    delete(uuid: string): Promise<boolean>;
    list(): Promise<Service[]|null>;
    findByUUID(uuid: string): Promise<Service|null>;
}