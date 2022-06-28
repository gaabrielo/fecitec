import React from 'react'
import Button from '@mui/material/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

import config from '../../json/config.json'
import Titulo from '../../components/titulo'

import './style.css'

function Manual() {

    return (
        <div id='manual'>
            <Titulo texto='Manual' descricao='Documento de orientações da Fecitec' />

            <div className='documento'>
                <object data={config.manual} type='application/pdf'>
                    <p>
                        Seu navegador não possui suporte para exibir o arquivo nesta página, mas basta clicar no botão "Baixar" aqui em baixo, e então é só abrir o arquivo em seu dispositivo.
                    </p>
                </object>
            </div>
            
            <a href={config.manual} download='FECITEC-ORIENTACOES'>
                <Button variant='contained' color='success' startIcon={<CloudDownloadIcon />} size='large'>
                    Baixar documento
                </Button>
            </a>
        </div>
    )
}

export default Manual