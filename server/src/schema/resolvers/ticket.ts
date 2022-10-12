import { GraphQLContext } from '../../context'

export interface NewTicket {
  title: string
  description: string
}

export const ticket = {
  Query: {
    tickets: (_parent: any, _args: any, context: GraphQLContext) => {
      return context.prisma.ticket.findMany()
    },
  },

  Mutation: {
    newTicket: (
      _parent: any,
      args: { input: NewTicket },
      context: GraphQLContext
    ) => {
      return context.prisma.ticket.create({
        data: { ...args.input, userId: context.currentUser!.id },
      })
    },
  },
}
