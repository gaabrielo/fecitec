import React, { useState } from 'react'
import { TextField, MenuItem, Autocomplete, Switch, FormControl, FormGroup, FormControlLabel, Alert, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Add as AddIcon, Send as SendIcon } from '@mui/icons-material'

import api from '../../function/api'

import Titulo from '../../components/titulo'
import { Retorno, popupBase } from '../../components/retorno'

import './style.css'

import listaModos from './json/modos.json'
import listaInstituicoes from './json/instituicoes.json'
import listaNiveis from './json/niveis.json'
import listaCamisetas from './json/camisetas.json'

function Inscricao() {
    const [qtdAlunos, setQtdAlunos] = useState([1])
    const [tipoInscricao, setTipoInscricao] = useState('1')
    const [instituicaoNivel, setInstituicaoNivel] = useState('')
    const [enviando, setEnviando] = useState(false)
    const [popup, setPopup] = useState(popupBase)

    const incrementar = () => {
        const i = qtdAlunos.length + 1

        if ((instituicaoNivel === 'Ensino Infantil' && i <= 6) || (i <= 3)) {
            return setQtdAlunos([...qtdAlunos, i])
        }
    }

    const informacoesDoProjeto = () => (
        <div className='formularioInformacoesProjeto'>
            <h2>Informações do Projeto</h2>
            <FormControl fullWidth sx={{ marginTop: 1, marginBottom: 2, flexDirection: 'row' }}>
                <TextField
                    id='inscricaoTitulo'
                    label='Título'
                    helperText='Atenção: Depois de enviado o título não poderá ser alterado'
                    required
                    sx={{ flexGrow: 2, marginRight: 1 }}
                />
                <TextField
                    id='inscricaoModo'
                    select
                    required
                    value={tipoInscricao}
                    onChange={e => setTipoInscricao(e.target.value)}
                    label='Modo de participação do projeto'
                    sx={{ flexGrow: 1 }}
                >
                    {
                        listaModos.map(({ label, value }) => (
                            <MenuItem key={'modos'+value} value={value}>
                                {label}
                            </MenuItem>
                        ))
                    }
                </TextField>
            </FormControl>

            <TextField
                id='inscricaoResumo'
                label='Resumo'
                multiline
                required
                helperText='De 150 a no máximo 400 palavras. Confira as regras no Manual'
            />

            <Alert severity='warning' sx={{ mt: 2 }}>Recomendamos salvar o resumo em um arquivo separado.</Alert>
        </div>
    )

    const instituicaoDeEnsino = () => (
        <div className='formularioInstituicoesEnsino'>
            <h2>Instituições de Ensino</h2>

            <FormControl fullWidth sx={{ marginTop: 1 }}>
                <Autocomplete
                    id='inscricaoInstituicao'
                    options={listaInstituicoes}
                    renderInput={params => <TextField {...params} id='' required label='Instituição' />}
                />

                <FormControl fullWidth sx={{ marginTop: 2, flexDirection: 'row' }}>
                    <TextField
                        id='inscricaoInstituicaoNivel'
                        label='Nível'
                        value={instituicaoNivel}
                        onChange={e => setInstituicaoNivel(e.target.value)}
                        required
                        sx={{ flexGrow: 1, marginRight: 1 }}
                        select
                    >
                        {
                            listaNiveis.map(item => (
                                <MenuItem key={'niveis'+item} value={item}>
                                    {item}
                                </MenuItem>
                            ))
                        }
                    </TextField>

                    <TextField
                        id='inscricaoInstituicaoAno'
                        label='Ano'
                        required
                        sx={{ flexGrow: 1 }}
                    />
                </FormControl>
            </FormControl>
        </div>
    )

    const professor = () => (
        <div className='formularioProfessor'>
            <h2>Professor</h2>

            <FormControl fullWidth sx={{ marginTop: 1 }}>
                <FormControl fullWidth sx={{ flexDirection: 'row' }}>
                    <TextField
                        id='inscricaoProfessorNome'
                        label='Nome'
                        required
                        sx={{ flexGrow: 1, marginRight: 1 }}
                    />

                    <TextField
                        id='inscricaoProfessorEmail'
                        label='E-Mail'
                        required
                        sx={{ flexGrow: 1 }}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ marginTop: 2, marginBottom: 2, flexDirection: 'row' }}>
                    <TextField
                        id='inscricaoProfessorTelefone'
                        label='Telefone'
                        sx={{ flexGrow: 1, marginRight: 1 }}
                    />

                    <TextField
                        id='inscricaoProfessorCelular'
                        label='Celular'
                        required
                        sx={{ flexGrow: 1 }}
                    />
                </FormControl>
            </FormControl>

            <Alert severity='warning'>Esteja atento ao e-mail informado, uma cópia da inscrição será enviada para ele. Se não receber a cópia da inscrição no seu e-mail, favor entrar em contato com a comissão pelo e-mail <a href='mailto:fecitec.ufpr@gmail.com'>fecitec.ufpr@gmail.com</a> para confirmar a sua inscrição do projeto.</Alert>
        </div>
    )

    const monitores = () => (
        <div className='formularioMonitores'>
            <h2>Monitores da UFPR (Se houver)</h2>

            <FormControl fullWidth sx={{ marginTop: 1 }}>
                <TextField
                    id='inscricaoMonitorNome'
                    label='Nome dos monitores'
                    helperText='Caso tenha mais de um monitor, digite os nomes separados com vírgula'
                />
            </FormControl>
        </div>
    )

    const alunos = () => (
        <div className='formularioAlunos'>
            <h2>Alunos do Projeto e Suas Camisetas</h2>
            <p>As equipes serão compostas por no máximo 3 alunos, com exceção do ensino infantil que poderão ser compostas por até 6 alunos</p>

            {
                qtdAlunos.map((item, i) => (
                    <FormControl key={`aluno${i}`} fullWidth sx={{ marginTop: 2, flexDirection: 'row' }}>
                        <TextField
                            id={'inscricaoAlunoNome' + item}
                            label={'Nome do aluno ' + item}
                            sx={{ flexGrow: 1, marginRight: 1 }}
                        />

                        <TextField
                            id={'inscricaoAlunoTipo' + item}
                            label='Tipo'
                            sx={{ flexGrow: 1 }}
                            select
                        >
                            {
                                listaCamisetas.tipos.map(item => (
                                    <MenuItem key={'tipos'+i+item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))
                            }
                        </TextField>

                        <TextField
                            id={'inscricaoAlunoTamanho' + item}
                            label='Tamanho'
                            sx={{ flexGrow: 1, marginLeft: 1 }}
                            select
                        >
                            {
                                listaCamisetas.tamanhos.map(item => (
                                    <MenuItem key={'tamanhos'+i+item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </FormControl>
                ))
            }

            <Button
                startIcon={<AddIcon />}
                variant='text'
                sx={{ marginTop: 3, alignSelf: 'center' }}
                onClick={incrementar}
            >
                Adicionar Aluno
            </Button>
        </div>
    )

    const deficientes = () => (
        <div className='formularioDeficientes'>
            <h2>Deficientes</h2>

            <FormControl fullWidth sx={{ marginTop: 1 }}>
                <TextField
                    id='inscricaoDeficientes'
                    label='Descreva as necessidades caso haja deficiente(s) no grupo'
                />
            </FormControl>
        </div>
    )

    const observacoes = () => (
        <div className='formularioObservacoes'>
            <h2>Observações</h2>
            <p>Se o projeto não for de Palotina, escrever aqui o nome da sua cidade, estado e da escola/colégio. Escrever outras observações que achar necessário.</p>

            <FormControl fullWidth sx={{ mt: 2 }}>
                <TextField
                    id='inscricaoObservacoes'
                    label='Observações'
                    multiline
                />
            </FormControl>
        </div>
    )

    const termos = () => (
        <div className='formularioTermos'>
            <h2>Termos</h2>

            <FormControl sx={{ marginTop: 2, marginBottom: 2 }}>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch id='inscricaoInformacoesVeridicas' required color='warning' />}
                        label='Declaro serem verídicas as informações acima mencionadas, bem como assumo total responsabilidade civil e autoral sobre o tema abordado.'
                    />
                    <FormControlLabel
                        control={<Switch id='inscricaoConcordo' required color='warning' />}
                        label='Autores concordam com as informações do manual de orientações.'
                    />
                </FormGroup>
            </FormControl>
        </div>
    )

    const recursos = () => (
        <div className='formularioRecursos'>
            <h2>Recursos</h2>

            <FormControl fullWidth sx={{ marginTop: 1 }}>
                <TextField
                    id='inscricaoLocalEspecifico'
                    label='Local específico'
                />

                <TextField
                    id='inscricaoLocalJustifique'
                    label='Justifique'
                    sx={{ marginTop: 2 }}
                />
            </FormControl>
        </div>
    )

    const enviar = async () => {
        setEnviando(true)
        const valorId = (id) => (document.getElementById(id)?.value)
        const dropId = (id) => (document.getElementById(id)?.innerHTML)
        const checkId = (id) => (document.getElementById(id)?.checked)

        const projeto = {
            titulo: valorId('inscricaoTitulo'),
            resumo: valorId('inscricaoResumo'),
            modo: listaModos.find(i => i.value === tipoInscricao).label,
            instituicaoNome: valorId('inscricaoInstituicao'),
            instituicaoNivel: dropId('inscricaoInstituicaoNivel'),
            instituicaoAno: valorId('inscricaoInstituicaoAno'),
            professorNome: valorId('inscricaoProfessorNome'),
            professorEmail: valorId('inscricaoProfessorEmail'),
            professorTelefone: valorId('inscricaoProfessorTelefone'),
            professorCelular: valorId('inscricaoProfessorCelular'),
            monitores: valorId('inscricaoMonitorNome'),
            alunos: [],
            deficientes: valorId('inscricaoDeficientes'),
            observacoes: valorId('inscricaoObservacoes'),
            localEspecifico: valorId('inscricaoLocalEspecifico'),
            localJustifique: valorId('inscricaoLocalJustifique'),
            concordaComTermos: checkId('inscricaoConcordo'),
            declaraInformacoesVeridicas: checkId('inscricaoInformacoesVeridicas')
        }

        qtdAlunos.forEach(i => {
            const nome = valorId('inscricaoAlunoNome' + i)
            const camisaTipo = dropId('inscricaoAlunoTipo' + i)
            const camisaTamanho = dropId('inscricaoAlunoTamanho' + 1)

            if (nome) {
                projeto.alunos.push({ nome, camisaTipo, camisaTamanho })
            }
        })
        
        const retorno = await api('email/projeto', projeto)
        setEnviando(false)

        if (retorno?.sucesso) {
            setPopup({ 
                visivel: true, 
                sucesso: true, 
                mensagem: retorno.sucesso
            })
        } else {
            setPopup({ 
                visivel: true, 
                sucesso: false, 
                mensagem: retorno?.erro || 'Não foi possível enviar sua inscrição via e-mail, favor entrar em contato com a comissão pelo e-mail fecitec.ufpr@gmail.com!' 
            })
        }
    }

    return (
        <div id='inscricao'>
            <Retorno popup={popup} estado={setPopup} />

            <Titulo descricao='Preencha todos campos atentamente e envie seu projeto' texto='Inscrições até 28/08' />

            <div className='formulario'>
                {informacoesDoProjeto()}
                {instituicaoDeEnsino()}
                {professor()}
                {monitores()}
                {alunos()}
                {deficientes()}
                {tipoInscricao === '1' && recursos()}
                {observacoes()}
                {termos()}
            </div>
            <LoadingButton
                loading={enviando && !popup.sucesso}
                variant='contained'
                disabled={popup.sucesso}
                size='large'
                color='success'
                startIcon={<SendIcon />}
                sx={{ marginBottom: 5 }}
                onClick={enviar}
            >
                Enviar Projeto
            </LoadingButton>
        </div>
    )
}

export default Inscricao