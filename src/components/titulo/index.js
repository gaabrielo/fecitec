import React from 'react'
import Divider from '@mui/material/Divider'

import './style.css'

function Titulo({ texto, descricao }) {

    return (
        <div id='titulo'>
            <Divider></Divider>
            <h1>{texto}</h1>
            { !!descricao && <p>{descricao}</p> }
            <Divider></Divider>
        </div>
    )
}

export default Titulo