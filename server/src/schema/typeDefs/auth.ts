export const auth = /* GraphQL */ `
  directive @skipAuth on FIELD_DEFINITION

  input LoginType {
    email: String
    password: String
  }

  type AuthOutput {
    token: String @skipAuth
  }

  type Mutation {
    login(input: LoginType!): UserOutput @skipAuth
    logout: Boolean
  }
`
