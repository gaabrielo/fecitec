import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

import Titulo from '../../components/titulo'

import './style.css'

function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [tituloMensagem, setTituloMensagem] = useState('')
    const [mensagem, setMensagem] = useState('')

    return (
        <div id='contato'>
            <Titulo descricao='Entre em contato conosco!' texto='Contato' />

            <div className='formulario'>
                <div className='basico'>
                    <TextField
                        className='dado'
                        required
                        id='nomeCompleto'
                        label='Nome completo'
                        value={nome}
                        onChange={({ target }) => setNome(target.value)}
                    />
                    <TextField
                        className='dado'
                        required
                        id='email'
                        label='E-mail'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <TextField
                        className='dado'
                        required
                        id='telefone'
                        label='Telefone'
                        value={telefone}
                        onChange={({ target }) => setTelefone(target.value)}
                    />
                </div>

                <div className='mensagem'>
                    <TextField
                        className='dado'
                        required
                        id='tituloMensagem'
                        label='Título da mensagem'
                        value={tituloMensagem}
                        onChange={({ target }) => setTituloMensagem(target.value)}
                    />
                    <TextField
                        className='dado'
                        required
                        id='mensagem'
                        label='Mensagem'
                        multiline
                        rows={10}
                        value={mensagem}
                        onChange={({ target }) => setMensagem(target.value)}
                    />
                </div>

                <div className='botao'>
                    <Button variant='contained' color='primary' startIcon={<SendIcon />} size='large' style={{boxShadow: 'none'}}>
                        Enviar mensagem
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Contato