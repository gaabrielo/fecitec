import { Router } from 'express'

const router = Router()

import base from './base.routes'
import email from './email.routes'

router.use('/', base)
router.use('/email', email)

export default router