import { Injectable, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Network } from "../models/network.entity";
@EntityRepository(Network)
@Injectable()
export class NetworkRepository extends Repository<Network>{

    async deleteNetwork(id:string):Promise<void>{
        const network= await Network.findOne(id)
        if(!network)
            throw new NotFoundException('No network found')
        network.deleted=true
        await network.save()
    }



}