import { Router } from 'express'

import { createUser } from './user.controller'

const UserRoute = Router().post(`/`, createUser)

export default UserRoute
