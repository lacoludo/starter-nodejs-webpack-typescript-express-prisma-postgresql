import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (req: Request, res: Response) => {
  const result = await prisma.user.create({
    data: {
      ...req.body
    }
  })
  res.json(result)
}
