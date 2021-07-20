import { Byte } from "@angular/compiler/src/util";

export interface User{

    id:number
    nick:string
    email:string
    passwordHash:Byte
    passwordSalt:Byte
    status:boolean

}