import { Inject, Injectable } from "@nestjs/common";
import { CreateNetworkDto } from "../dto/create-network.dto";
import { Network } from "../models/network.entity";
import { NetworkRepository } from "../repositories/network.repository";

@Injectable()
export class NetworkService{
    constructor( private networkRepository:NetworkRepository){

    }
    //method for create crypto networks
    async createNetwork(createNetworkDto:CreateNetworkDto):Promise<Network>{
        const {name,symbol,icon} =createNetworkDto
        const network=await this.networkRepository.create({
            name,
            symbol,
            icon,
        })
        delete network.id
        return network
    }

    async deleteNetwork(id:string):Promise<void>{
        return await this.networkRepository.deleteNetwork(id)
    }
}