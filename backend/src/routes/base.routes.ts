import { Router, Response, Request } from 'express'

const router = Router()

// Retorna mensagem para verificar se a API existe
router.get('/', (request: Request, response: Response) => {
    response.json({
        status: 'Serviço disponível'
    }) 
})

router.get('/')

export default router