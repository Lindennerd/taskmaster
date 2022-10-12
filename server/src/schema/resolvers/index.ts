import { helloResolvers } from "./hello";
import { resolvers as scalarResolvers } from 'graphql-scalars';
import { comments } from "./comment";
import { tasks } from "./task";
import { users } from "./users";
import { ticket } from "./ticket";
import { auth } from "./auth";

export const resolvers = [
    scalarResolvers, helloResolvers, comments, tasks, ticket, users, auth
]