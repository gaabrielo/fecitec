import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

import Titulo from '../../components/titulo'
import projetos from '../../json/trabalhos.json'
import config from '../../json/config.json'

import './style.css'

function TrabalhosAprovados() {
    const [expandido, setExpandido] = useState('Ensino Infantil')

    const expandir = (modulo) => (event, expandido) => {
        setExpandido(expandido ? modulo : false);
    }

    const getCodigoYoutube = (link) => {
        // https://youtu.be/{id}
        // https://www.youtube.com/watch?v={id}&feature=youtu.be&ab_channel=
        // https://www.youtube.com/watch?v={id}
        if (link.match('https://youtu.be/')) return link.replace('https://youtu.be/', '')

        const id = link.replace('https://www.youtube.com/watch?v=', '').split('&')
        return id[0]
    }

    const Projeto = ({ nome, colegio, video }) => (
        <div key={nome} className='projeto'>
            {
                video &&
                <iframe
                    allowFullScreen
                    width='100%'
                    height='300'
                    src={'https://www.youtube.com/embed/' + getCodigoYoutube(video)}
                    frameBorder='0'
                    title={`${nome} - ${colegio}`}
                ></iframe>
            }
            <p>{nome}</p>
            <span>{colegio}</span>
        </div>
    )

    const Modulo = ({ modulo, orientacoes, projetos }) => (
        <Accordion key={modulo} expanded={expandido === modulo} onChange={expandir(modulo)} style={{ boxShadow: 'none', border: 'none' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={modulo + '-content'}
                id={modulo + '-header'}
            >
                <p>{modulo}</p>
            </AccordionSummary>
            <AccordionDetails className='projetos'>
                {
                    !!orientacoes &&
                    <div className='orientacoes'>
                        <p>{orientacoes}</p>
                    </div>
                }
                {
                    expandido === modulo && projetos.map(Projeto)
                }
            </AccordionDetails>
        </Accordion>
    )

    return (
        <div id='trabalhosAprovados'>
            {/* <Titulo texto='🎵 Atrações Culturais' descricao='Projetos aprovados para a Fecitec' /> */}

            <Titulo texto='👩🏼‍🔬👨🏾‍🔬 Trabalhos Aprovados' descricao='Projetos aprovados para a Fecitec' />

            <div className='conteudo'>
                {
                    projetos.map(Modulo)
                }
            </div>

            <a href={config.aprovados} download='FECITEC-APROVADOS' style={{ marginBottom: '20px' }}>
                <Button variant='contained' color='success' startIcon={<CloudDownloadIcon />} size='large'>
                    Baixar documento
                </Button>
            </a>
        </div>
    )
}

export default TrabalhosAprovados