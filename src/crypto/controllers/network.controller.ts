import { Body, Controller, Post } from '@nestjs/common';
import { CreateNetworkDto } from '../dto/create-network.dto';
import { NetworkService } from '../services/network.service';

@Controller('crypto/network')
export class NetworkController {
    constructor(private  networkService:NetworkService){}

    //create crypto network endpoint
    @Post('create')
    async createNetwork(@Body() createNetworkDto:CreateNetworkDto):Promise<any>{
        return await this.networkService.createNetwork(createNetworkDto)
    }
    
}
