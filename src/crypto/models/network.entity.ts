import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Coin } from "./coin.entity";
@Entity()
//@Unique(['name','symbol'])
export class Network extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({unique:true})
    name:string

    @Column()
    symbol:string

    @Column()
    icon:string

    @Column({default:true})
    enabled:boolean

    @Column({default:false})
    variable_fee:boolean

    @Column()
    default_wallet_address:string

    @Column()
    default_wallet_memo:string

    @OneToMany(()=>Coin,c=>c.network)
    coins:Coin[]

    @Column({default:false})
    deleted:boolean

}