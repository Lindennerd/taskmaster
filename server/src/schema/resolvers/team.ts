import { GraphQLContext } from '../../context'

export const team = {
  Query: {
    userTeams: (_: any, _args: any, context: GraphQLContext) => {
      return context.prisma.team.findMany({
        where: {
          TeamUser: {
            some: {
              userId: context.currentUser?.id,
            },
          },
        },
      })
    },
  },
}
