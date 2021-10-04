import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Network } from "./network.entity";
@Entity()
export class Coin extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({length:15,unique:true})
    name:string

    @Column()
    symbol:string

    @Column()
    icon:string

    @Column({default:true})
    enabled:boolean

    @Column()
    wallet_address:string

    @Column()
    wallet_memo:string

    @Column({default:1})
    buy_multiplexer:Number

    @Column({default:1})
    sell_multiplexer:Number

    @ManyToOne(()=>Network,c=>c.coins)
    network:Network


}