import { ResolveUserFn } from "@envelop/generic-auth";
import { jwt } from "../lib/jwt";

export type User = {
    id: number,
    name: string,
    email: string,
    image: string,
    iat: number
}

export const resolveUser: ResolveUserFn<User> = async (context: any) => {
    const token = context.req.cookies.authorization as string;

    if(!token) {
        return null;
    }
    const user = jwt.verify<User>(token.replace('Bearer ', ''));
    if(! user) {
        return null;
    }

    return user;
}