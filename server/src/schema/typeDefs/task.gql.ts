export const task =/* GraphQL */ `
    """task"""
type Task {
  """The id of the ticket"""
  id: Int!

  """The title of the task"""
  title: String!

  """The description of the task"""
  description: String!

  """The date of the task's creation"""
  createdAt: DateTime!

  """The status of the task"""
  closed: Boolean!
}

type Query {
  tasks: [Task!]!
}

type Mutation {
  newTask(newTask: NewTask!): Task!
}


input NewTask {
  """The new Task title"""
  title: String!

  """The new Task description"""
  description: String!
}
`;