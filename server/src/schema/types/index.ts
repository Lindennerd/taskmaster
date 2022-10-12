export interface LoginType {
  email: string
  password: string
}

export interface LoginArgs {
  input: LoginType
}

export interface LoginOutput {
  name: string
  email: string
  image?: string | null
  id: number
}
