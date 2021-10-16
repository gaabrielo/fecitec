import React from 'react'
import Button from '@mui/material/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

import Titulo from '../../components/titulo'
import anais from '../../json/anais.json'

import './style.css'

function Anais({ match }) {

    const ano = match?.params?.ano
    const anual = anais.find(anual => anual.ano === String(ano))
    
    if (!anual) return (
        <div id='anais'>
            <Titulo descricao={'Ano não encontrado'} texto='Fecitec' />
        </div>
    )

    return (
        <div id='anais'>
            <Titulo descricao={anual.ano} texto='Fecitec' />

            <div className='documento'>
                <object data={anual.link} type='application/pdf'>
                    <p>
                        Seu navegador não possui suporte para exibir o arquivo nesta página, mas basta clicar no botão "Baixar" aqui em baixo, e então é só abrir o arquivo em seu dispositivo.
                    </p>
                </object>
            </div>

            <a href={anual.link} download={`FECITE-${anual.ano}`}>
                <Button variant='contained' color='success' startIcon={<CloudDownloadIcon />} size='large'>
                    Baixar documento
                </Button>
            </a>
        </div>
    )
}

export default Anais