export class CreateNetworkDto{
    name:string
    symbol:string
    icon:string
    wallet_address?:string
    wallet_memo?:string
    enabled?:boolean
}