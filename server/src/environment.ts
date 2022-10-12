import {z} from "zod";
import dotenv from 'dotenv';

dotenv.config();


const envEnum = z.enum(["production", "development", "homologation"])

const envSchema = z.object({
    DATABASE_URL: z.string().default("file:./dev.db"),
    JWT_SECRET: z.string().default("dev-secret"),
    PORT: z.number().default(3000),
    ENV: envEnum
});

export type EnvSchema = z.infer<typeof envSchema>

export const env: EnvSchema = {
    DATABASE_URL: process.env.DATABASE_URL!,
    JWT_SECRET: process.env.JWT_SECRET!,
    ENV: process.env.ENV as z.infer<typeof envEnum> || "development",
    PORT: parseInt(process.env.PORT!)
}