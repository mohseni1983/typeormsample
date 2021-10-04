import { TypeOrmModuleOptions,TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Coin } from "src/crypto/models/coin.entity";
import { Network } from "src/crypto/models/network.entity";

export class PostgresConfiguration implements TypeOrmOptionsFactory{
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        const options:TypeOrmModuleOptions={
            type:'postgres',
            host:'localhost',
            port:5432,
            username:'postgres',
            password:'123456',
            entities:[__dirname+'/../**/*.entity{.ts,.js}'],
            synchronize:true,
            database:'orm'
        }
        return options
    }
    
}