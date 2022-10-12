import { sign, decode, verify } from "jsonwebtoken";
import { env } from "../environment";

export const jwt = {
  sign: (payload: any) => {
    const token = sign(payload, env.JWT_SECRET);
    return token;
  },

  decode: (token: string) => {
    return decode(token);
  },
  verify: <T>(token: string): T => {
    return verify(token, env.JWT_SECRET) as T;
  },
};
