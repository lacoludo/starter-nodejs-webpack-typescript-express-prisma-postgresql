import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const feed = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    where: {
      published: true
    },
    include: {
      author: true
    }
  })
  res.json(posts)
}

export const filterPosts = async (req: Request, res: Response) => {
  const { searchString }: { searchString?: string } = req.query
  const draftPosts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchString
          }
        },
        {
          content: {
            contains: searchString
          }
        }
      ]
    }
  })
  res.json(draftPosts)
}

export const createPost = async (req: Request, res: Response) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      author: {
        connect: {
          email: authorEmail
        }
      }
    }
  })
  res.json(result)
}

export const readPost = async (req: Request, res: Response) => {
  const { id } = req.params
  const post = await prisma.post.findOne({
    where: {
      id: Number(id)
    }
  })
  res.json(post)
}

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params
  const post = await prisma.post.update({
    where: {
      id: Number(id)
    },
    data: {
      published: true
    }
  })
  res.json(post)
}

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id)
    }
  })
  res.json(post)
}
