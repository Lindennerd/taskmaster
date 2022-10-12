export const ticket = /* GraphQL */ `
"""ticket"""
type Ticket {
  """The id of the ticket"""
  id: Int!

  """The title of the ticket"""
  title: String!

  """The description of the ticket"""
  description: String!

  """The date of the ticket's creation"""
  createdAt: Date!

  """The status of the ticket"""
  closed: Boolean!

  tasks: [Task]
  comments: [Comment]
}


type Query {
  tickets: [Ticket!]!
}

type Mutation {
   newTicket(newTicket: NewTicket!): Ticket!
}

input NewTicket {
  """The new ticket title"""
  title: String!

  """The new ticket description"""
  description: String!
}
`;