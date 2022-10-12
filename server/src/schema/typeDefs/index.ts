import { comments } from "./comments.gql";
import { hello } from "./hello.gql";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";
import { task } from "./task.gql";
import { ticket } from "./ticket.gql";
import { users } from "./users.gql";
import { auth } from "./auth";

export const typeDefs = [
  ...scalarTypeDefs,
  hello,
  comments,
  task,
  ticket,
  users,
  auth,
];
