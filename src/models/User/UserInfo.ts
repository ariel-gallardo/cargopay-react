import { User } from "next-auth";

export default interface UserInfo extends User{
    expirationTime: string
    token: string
}