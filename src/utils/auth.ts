import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import UserLogin from "@models/User/UserLogin";
import UserInfo from "@models/User/UserInfo";
import CustomResponse from "@models/CustomResponse";
import { cookies } from 'next/headers';

class AuthenticationError extends CredentialsSignin{
    constructor(message: string) {
        super();
        this.message = message;
        this.code = 'AuthInvalidCredentials';
    }
    override stack?: '';
}

const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: 'Email and Password',
            id: 'credentials',
            credentials: {
                email: {name: 'email', type: 'email'},
                password: { name: 'password', type: 'password' },
            },
            type: 'credentials',
            authorize: async(credentials, request) => {
                const cookieStore = await cookies();
                const token = cookieStore.get('token');
                let req: Response = {status: 0} as Response;

                if (token){
                    try{
                        req = await fetch(`${process.env.API_URL}/user/info`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                    }catch(e){
                        cookieStore.delete('token');
                    }
                }

                if(req.status != 200){
                    req = await fetch(`${process.env.API_URL}/user/login`, {
                        body: JSON.stringify({
                            userEmail: credentials?.email,
                            userPassword: credentials?.password
                        } as UserLogin),
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    });
                }
                
                
                const user = await req?.json() as CustomResponse<UserInfo>; 
                console.log(user)
                if (!user?.data){
                    throw new AuthenticationError(user?.message ?? 'INVALID_CREDENTIALS');
                }
                else{
                    const authToken = req.headers.get('Authorization');
                    cookieStore.set('token',authToken as string);
                    user.data.token = `${authToken}`;
                }
                return user.data;
            },
        }),
    ],
    logger: {
        error(code, ...message) {
            //log.error(code, message)
        },
        warn(code, ...message) {
            //log.warn(code, message)
        },
        debug(code, ...message) {
            //log.debug(code, message)
        }
    }
});

export { handlers, signIn, signOut, auth };