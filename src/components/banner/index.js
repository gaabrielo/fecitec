import React from 'react'

import logo from '../../assets/imagens/fecitec/logo_branco.svg'

import  './style.css'

function Banner() {

    return (
        <div id='banner'>
            <img src={logo} alt='logo' />
        </div>
    )
}

export default Banner