import {hash, compareSync, genSalt} from "bcrypt";

export const crypt = {
    hash: async (data: string) => {
        const salts = await genSalt(10);
        return await hash(data, salts);
    },

    compare: (value: string, hash: string) => {
        return  compareSync(value, hash);
    }
}