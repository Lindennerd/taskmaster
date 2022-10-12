
export const users = /* GraphQL */ `  
"""Users"""
type User {
    id: Int!
    name: String!
    email: String!
    image: String
    password: String
}

type UserOutput {
    id: Int! @skipAuth
    name: String! @skipAuth
    email: String! @skipAuth
    image: String @skipAuth
}

type Query {
    users: [UserOutput!]
}

type Mutation {
    addUser(input: NewUser!): UserOutput @skipAuth
}

input NewUser {
    name: String!
    email: String!
    image: String
    password: String!
}`;