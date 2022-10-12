import { GraphQLContext } from '../../context'

interface NewTask {
  title: string
  description: string
}

export const tasks = {
  Query: {
    tasks: (_: any, _args: any, context: GraphQLContext) => {
      return context.prisma.task.findMany()
    },
  },

  Mutation: {
    newTask: (_: any, args: { input: NewTask }, context: GraphQLContext) => {
      return context.prisma.task.create({
        data: { ...args.input, userId: context.currentUser!.id },
      })
    },
  },
}
