import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'

import PostRoute from './post/post.route'
import UserRoute from './user/user.route'
import { PORT } from './env'

express()
  .use(logger('dev'))
  .use(bodyParser.json())
  .use('/images', express.static(path.join(__dirname, 'images')))
  .use('/posts', PostRoute)
  .use('/users', UserRoute)
  .listen(PORT, () =>
    console.log(`🚀 Server ready at: http://localhost:${PORT}`)
  )
  .on('error', err => {
    console.error(`❌ Connection failed: Express`)
    console.error(err)
  })
