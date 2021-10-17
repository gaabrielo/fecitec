import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import Alert from '@mui/material/Alert'
import Grow from '@mui/material/Grow'

import Titulo from '../../components/titulo'

import './style.css'

function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [tituloMensagem, setTituloMensagem] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [carregando, setCarregando] = useState(false)
    const [alerta, setAlerta] = useState()

    const enviarEmail = async () => {
        const post = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome,
                email,
                telefone,
                titulo: tituloMensagem,
                mensagem
            })
        }

        setCarregando(true)

        setAlerta()
        await fetch('https://fecitec.herokuapp.com/api/contato', post)
            .then(async resposta => {
                try {
                    const retorno = await resposta.json()

                    if (retorno?.erro) {
                        setAlerta({ tipo: 'error', mensagem: retorno.erro })
                    }
                } catch {
                    setAlerta({ tipo: 'success', mensagem: 'Mensagem encaminhada com sucesso!' })
                }
            })
            .catch(erro => {
                setAlerta({ tipo: 'error', mensagem: 'Ocorreu um erro, tente novamente mais tarde.' })
            })

        setCarregando(false)
    }

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

                <Grow in={!!alerta}>
                    <Alert variant='filled' severity={alerta?.tipo} className='alerta'>
                        {alerta?.mensagem}
                    </Alert>
                </Grow>
                
                <div className='botao'>
                    <LoadingButton
                        onClick={enviarEmail}
                        loading={carregando}
                        loadingPosition='start'
                        variant='contained'
                        color='primary'
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