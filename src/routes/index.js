import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from '../pages/inicio'

function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicio} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes