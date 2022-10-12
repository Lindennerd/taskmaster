import express from "express";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { env } from "../environment";

const app = express();
app.use(cookieSession({
    secret: env.JWT_SECRET,
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [env.JWT_SECRET]
}));
app.use(cookieParser())
app.use(morgan(env.ENV === 'development' ? 'dev' : 'combined'));
export default app;