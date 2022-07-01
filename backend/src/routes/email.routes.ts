import { Router } from 'express'

import projeto from '../functions/email/projeto'
import contato from '../functions/email/contato'

const router = Router()

// Envia email do projeto
router.post('/projeto', projeto)
router.post('/contato', contato)

export default router