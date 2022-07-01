import React, { useState } from 'react'

import { TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'

import Titulo from '../../components/titulo'
import { Retorno, popupBase } from '../../components/retorno'

import api from '../../function/api'

import './style.css'

function Contato() {
    const [carregando, setCarregando] = useState(false)
    const [alerta, setAlerta] = useState(popupBase)

    const enviarEmail = async () => {
        setCarregando(true)
        const valorId = (id) => (document.getElementById(id).value)
        const limpa = (id) => (document.getElementById(id).value = '')

        const contato = {
            nome: valorId('nomeCompleto'),
            email: valorId('email'),
            telefone: valorId('telefone'),
            titulo: valorId('tituloMensagem'),
            mensagem: valorId('mensagem')
        }
        
        const retorno = await api('email/contato', contato)
        setCarregando(false)

        if (retorno?.sucesso) {
            setAlerta({ 
                visivel: true, 
                sucesso: true, 
                mensagem: retorno.sucesso
            })

            limpa('nomeCompleto')
            limpa('email')
            limpa('telefone')
            limpa('tituloMensagem')
            limpa('mensagem')
        } else {
            setAlerta({ 
                visivel: true, 
                sucesso: false, 
                mensagem: retorno?.erro || 'Não foi possível enviar seu contato, favor entrar em contato com a comissão pelo e-mail fecitec.ufpr@gmail.com!' 
            })
        }
    }

    return (
        <div id='contato'>
            <Retorno popup={alerta} estado={setAlerta} />

            <Titulo descricao='Entre em contato conosco!' texto='Contato' />

            <div className='formulario'>
                <div className='basico'>
                    <TextField
                        className='dado'
                        required
                        id='nomeCompleto'
                        label='Nome completo'
                    />
                    <TextField
                        className='dado'
                        required
                        id='email'
                        label='E-mail'
                    />
                    <TextField
                        className='dado'
                        required
                        id='telefone'
                        label='Telefone'
                    />
                </div>

                <div className='mensagem'>
                    <TextField
                        className='dado'
                        required
                        id='tituloMensagem'
                        label='Título da mensagem'
                    />
                    <TextField
                        className='dado'
                        required
                        id='mensagem'
                        label='Mensagem'
                        multiline
                        rows={3}
                    />
                </div>

                <div className='botao'>
                    <LoadingButton
                        onClick={enviarEmail}
                        loading={carregando}
                        loadingPosition='start'
                        variant='contained'
                        color='success'
                        startIcon={<SendIcon />}
                        size='large'
                        style={{ boxShadow: 'none' }}
                    >
                        Enviar mensagem
                    </LoadingButton>
                </div>
            </div>
        </div>
    )
}

export default Contato