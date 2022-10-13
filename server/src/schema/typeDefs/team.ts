export const team = /* GraphQL */ `
  type Team {
    id: Int!
    name: String
    createdAt: DateTime
    teamMembers: [TeamMember]
    tickets: [Ticket]
  }

  type TeamMember {
    user: User
    team: Team
    role: TeamMemberRole
  }

  enum TeamMemberRole {
    Owner
    Admin
    Member
  }

  type Query {
    userTeams: [Team!]
  }
`
