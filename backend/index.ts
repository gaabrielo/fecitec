import bodyParser from 'body-parser'
import express from 'express'
import { config as dotenv } from 'dotenv'

import rotas from './src/routes'

dotenv()

const app = express()

app.use(bodyParser.json())

app.use(rotas)

const server = app.listen(3303, () => {
    console.log('Servidor iniciado...')
})