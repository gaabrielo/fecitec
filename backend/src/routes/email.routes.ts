import { Router, Response, Request } from 'express'

import projeto from '../functions/email/projeto'

const router = Router()

// Envia email do projeto
router.post('/projeto', projeto)

export default router