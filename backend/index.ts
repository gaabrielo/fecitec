import bodyParser from 'body-parser'
import express from 'express'

import rotas from './src/routes'

const app = express()

app.use(bodyParser.json())

app.use(rotas)

const server = app.listen(3303, () => {
    console.log('Servidor iniciado...')
})