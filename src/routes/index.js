import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from '../pages/inicio'
import Manual from '../pages/manual'
import Galeria from '../pages/galeria'
import Contato from '../pages/contato'
import Anais from '../pages/anais'
import Aprovados from '../pages/trabalhosAprovados'

import config from '../json/config.json'

document.title = config.titulo

function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/manual'  component={Manual} />
                <Route path='/contato'  component={Contato} />
                <Route path='/galeria'  component={Galeria} />
                <Route path='/aprovados'  component={Aprovados} />
                <Route path='/anais/:ano'  component={Anais} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes