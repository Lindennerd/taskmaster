import { GraphQLContext } from '../../context'

export interface NewComment {
  ticketId: number
  content: string
}

export const comments = {
  Query: {
    comments: (_: any, _args: any, context: GraphQLContext) => {
      return context.prisma.comment.findMany()
    },
  },

  Mutation: {
    newComment: (_: any, args: NewComment, context: GraphQLContext) => {
      return context.prisma.comment.create({
        data: { ...args, userId: context.currentUser!.id },
      })
    },
  },
}
