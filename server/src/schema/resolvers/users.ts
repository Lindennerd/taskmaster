import { GraphQLContext } from "../../context";
import {crypt} from "../../lib/crypt";

export interface NewUser {
  name: string;
  email: string;
  image: string;
  password: string;
}

export const users = {
  Query: {
    users: (parent: any, args: any, context: GraphQLContext) => {
      console.log(context.currentUser)
      return context.prisma.user.findMany();
    },
  },

  Mutation: {
    addUser: async (
      parent: any,
      args: { input: NewUser },
      context: GraphQLContext
    ) => {
        const hashedPassword = await crypt.hash(args.input.password);
        args.input.password = hashedPassword;
        return context.prisma.user.create({ data: args.input });
    },
  },
};
