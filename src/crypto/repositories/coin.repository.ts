import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Coin } from "../models/coin.entity";
import { Network } from "../models/network.entity";

@EntityRepository(Coin)
@Injectable()
export class CoinRepository extends Repository<Coin>{

}