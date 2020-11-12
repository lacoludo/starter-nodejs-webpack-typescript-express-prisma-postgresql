import { Router } from 'express'

import {
  feed,
  filterPosts,
  createPost,
  updatePost,
  readPost,
  deletePost
} from './post.controller'

const PostRoute = Router()
  .get('/feed', feed)
  .get('/filterPosts', filterPosts)
  .post('/', createPost)
  .get('/:id', readPost)
  .put('/:id', updatePost)
  .delete('/:id', deletePost)

export default PostRoute
