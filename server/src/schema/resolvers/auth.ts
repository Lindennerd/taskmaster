import { GraphQLContext } from '../../context'
import { crypt } from '../../lib/crypt'
import { jwt } from '../../lib/jwt'
import { LoginArgs, LoginOutput } from '../types'

export const auth = {
  Mutation: {
    login: async (
      _parent: any,
      args: LoginArgs,
      context: GraphQLContext
    ): Promise<LoginOutput | null> => {
      const user = await context.prisma.user.findFirst({
        where: {
          email: args.input.email,
        },
      })

      if (user && crypt.compare(args.input.password, user.password)) {
        const { password, ...userOutput } = user
        const token = jwt.sign(userOutput)

        context.res?.cookie('authorization', token)

        return userOutput
      } else {
        return null
      }
    },

    logout: async (_parent: any, _args: any, context: GraphQLContext) => {
      context.res?.clearCookie('authorization')
      return true
    },
  },
}
