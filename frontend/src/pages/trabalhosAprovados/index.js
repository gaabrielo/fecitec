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

    const getCodigoYoutube = (link = '') => {
        // https://youtu.be/{id}
        // https://www.youtube.com/watch?v={id}&feature=youtu.be&ab_channel=
        // https://www.youtube.com/watch?v={id}
        if (link.match('https://youtu.be/')) return link.replace('https://youtu.be/', '')

        const id = link.replace('https://www.youtube.com/watch?v=', '').split('&')
        return id[0]
    }

    const Projeto = ({ nome, colegio, video }) => (
        <div key={nome} className='projeto'>
            <a href={video} target='_BLANK' className='projetoVideo'>
                <img src={`https://img.youtube.com/vi/${getCodigoYoutube(video)}/hqdefault.jpg`} width='100%' height='360' alt={nome} />
                
            </a>
            <p>{nome}</p>
            <span>{colegio}</span>
        </div>
    )

    const Ensalamento = ({ descricao, projetos }) => (
        <div key={descricao} className='ensalamento'>
            <p>{descricao}</p>
            <ul>
                {projetos.map(projeto => <li key={projeto}>• {projeto}</li>)}
            </ul>
        </div>
    )

    const Modulo = ({ modulo, orientacoes, projetos, ensalamentos }) => (
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
                    expandido === modulo && ensalamentos.length > 0 ? ensalamentos.map(Ensalamento) : projetos.map(Projeto)
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

            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <a href={config.aprovados} download='FECITEC-APROVADOS'>
                    <Button variant='contained' color='success' startIcon={<CloudDownloadIcon />} size='large'>
                        projetos aprovados
                    </Button>
                </a>
                <a href={config.ensalamento} download='FECITEC-ENSALAMENTO'>
                    <Button variant='contained' color='success' startIcon={<CloudDownloadIcon />} size='large' style={{ marginLeft: '10px' }}>
                        ensalamento
                    </Button>
                </a>
            </div>


        </div>
    )
}

export default TrabalhosAprovados