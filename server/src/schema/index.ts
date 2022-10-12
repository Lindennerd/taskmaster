import { makeExecutableSchema } from '@graphql-tools/schema'
import { skipAuthDirective } from './directives/skipAuth'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

let schema = makeExecutableSchema({
    typeDefs, resolvers
})

export { schema };