import { Router } from 'express'

import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController'

const authenticateUserController = new AuthenticateUserController()

export const authenticateRoutes = Router()

authenticateRoutes.post('/sessions', authenticateUserController.handle)
