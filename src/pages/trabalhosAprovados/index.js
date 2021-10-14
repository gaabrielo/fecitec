import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Titulo from '../../components/titulo'
import projetos from '../../json/trabalhos.json'

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
            <iframe 
                width='100%' 
                height='300'
                src={'https://www.youtube.com/embed/'+getCodigoYoutube(video)}
                frameborder='0'
                title={`${nome} - ${colegio}`}
            ></iframe>
            <p>{nome}</p>
            <span>{colegio}</span>
        </div>
    )

    const Modulo = ({ modulo, projetos }) => (
        <Accordion key={modulo} expanded={expandido === modulo} onChange={expandir(modulo)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={modulo + '-content'}
                id={modulo + '-header'}
            >
                <p>{modulo}</p>
            </AccordionSummary>
            <AccordionDetails className='projetos'>
                {
                    projetos.map(Projeto)
                }
            </AccordionDetails>
        </Accordion>
    )

    return (
        <div id='trabalhosAprovados'>
            <Titulo texto='Trabalhos Aprovados' descricao='Projetos aprovados para a Fecitec' />

            <div className='conteudo'>
                {
                    projetos.map(Modulo)
                }
            </div>
        </div>
    )
}

export default TrabalhosAprovados