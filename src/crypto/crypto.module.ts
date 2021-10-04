import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { CoinRepository } from './repositories/coin.repository';
import { NetworkRepository } from './repositories/network.repository';
import { NetworkController } from './controllers/network.controller';
import { CoinController } from './controllers/coin.controller';
import { CoinService } from './services/coin.service';
import { NetworkService } from './services/network.service';

@Module({
    imports:[DatabaseModule,TypeOrmModule.forFeature([CoinRepository,NetworkRepository])],
    controllers: [NetworkController,CoinController],
    providers: [CoinService,NetworkService]
})
export class CryptoModule {}
