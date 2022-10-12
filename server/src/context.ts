import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { User } from './auth/resolveUser'

const prisma = new PrismaClient({
  log: ['error', 'info', 'query'],
})

export type GraphQLContext = {
  prisma: PrismaClient
  request?: Request
  res?: Response
  currentUser?: User
}

export function createContext(): GraphQLContext {
  return {
    prisma,
  }
}
