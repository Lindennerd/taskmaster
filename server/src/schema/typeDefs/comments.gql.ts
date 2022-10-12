export const comments = /* GraphQL */ `
"""comment"""
type Comment {
  """The id of the ticket"""
  id: Int!

  """The comment's content"""
  content: String!

  """The date of the comment's creation"""
  createdAt: DateTime!
}

type Query {
    comments: [Comment!]!
}

type Mutation {
    newComment(newComment: NewComment!): Comment!
}

input NewComment {
  """The tickets id"""
  ticketId: Float!

  """The comments content"""
  content: String!
}
`;