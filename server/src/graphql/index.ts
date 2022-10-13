import { createServer, useLogger } from 'graphql-yoga'
import { schema } from '../schema'
import { createContext } from '../context'
import { useGenericAuth } from '@envelop/generic-auth'
import { resolveUser } from '../auth/resolveUser'

export const server = createServer({
  schema,
  context: createContext,
  plugins: [
    useGenericAuth({
      resolveUserFn: resolveUser,
      mode: 'protect-all',
    }),
  ],
})
