import React, { useState } from 'react'

import { TextField, MenuItem, Autocomplete, Switch, FormControl, FormGroup, FormControlLabel, Alert, Button } from '@mui/material'
import { Add as AddIcon, Send as SendIcon } from '@mui/icons-material'

import Titulo from '../../components/titulo'

import './style.css'

import listaModos from './json/modos.json'
import listaInstituicoes from './json/instituicoes.json'
import listaNiveis from './json/niveis.json'
import listaCamisetas from './json/camisetas.json'

function Inscricao() {
    const [qtdAlunos, setQtdAlunos] = useState([1])
    const [tipoInscricao, setTipoInscricao] = useState('1')

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
                            <MenuItem key={value} value={value}>
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
        </div>
    )

    const instituicaoDeEnsino = () => (
        <div className='formularioInstituicoesEnsino'>
            <h2>Instituições de Ensino</h2>

            <FormControl fullWidth sx={{ marginTop: 1 }}>
                <Autocomplete
                    id='inscricaoInstituicao'
                    options={listaInstituicoes}
                    renderInput={params => <TextField {...params} required label='Instituição' />}
                />

                <FormControl fullWidth sx={{ marginTop: 2, flexDirection: 'row' }}>
                    <TextField
                        id='inscricaoInstituicaoNivel'
                        label='Nível'
                        required
                        sx={{ flexGrow: 1, marginRight: 1 }}
                        select
                    >
                        {
                            listaNiveis.map(item => (
                                <MenuItem key={item} value={item}>
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
                        required
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

            <Alert severity='warning'>Esteja atento ao e-mail informado. Uma cópia da inscrição será enviada para ele.</Alert>
        </div>
    )

    const monitores = () => (
        <div className='formularioMonitores'>
            <h2>Monitores da UFPR</h2>

            <FormControl fullWidth sx={{ marginTop: 1 }}>
                <TextField
                    id='inscricaoMonitorNome'
                    label='Nome dos monitores'
                    helperText='Caso tenha mais de um monitor, digite os nomes separados com vírgula'
                    required
                />
            </FormControl>
        </div>
    )

    const alunos = () => (
        <div className='formularioAlunos'>
            <h2>Alunos do Projeto e Suas Camisetas</h2>

            {
                qtdAlunos.map(item => (
                    <FormControl fullWidth sx={{ marginTop: 2, flexDirection: 'row' }}>
                        <TextField
                            id={'inscricaoAlunoNome'+item}
                            label={'Nome do aluno '+item}
                            sx={{ flexGrow: 1, marginRight: 1 }}
                        />

                        <TextField
                            id={'inscricaoAlunoTipo'+item}
                            label='Tipo'
                            sx={{ flexGrow: 1 }}
                            select
                        >
                            {
                                listaCamisetas.tipos.map(item => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))
                            }
                        </TextField>

                        <TextField
                            id={'inscricaoAlunoTamanho'+item}
                            label='Tamanho'
                            sx={{ flexGrow: 1, marginLeft: 1 }}
                            select
                        >
                            {
                                listaCamisetas.tamanhos.map(item => (
                                    <MenuItem key={item} value={item}>
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
                onClick={() => setQtdAlunos([...qtdAlunos, qtdAlunos.length + 1])}
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
            <h2>Oservações</h2>
            <p>Se o projeto não for de Palotina, escrever aqui o nome da sua cidade, estado e da escola/colégio. Escrever outras observações que achar necessário.</p>

            <FormControl fullWidth>
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
                        control={<Switch required color='warning' />}
                        label='Declaro serem verídicas as informações acima mencionadas, bem como assumo total responsabilidade civil e autoral sobre o tema abordado.'
                    />
                    <FormControlLabel
                        control={<Switch required color='warning' />}
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

    return (
        <div id='inscricao'>
            <Titulo descricao='Preencha todos campos atentamente e envie seu projeto' texto='Formulário de Inscrição' />

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
            <Button variant='contained' size='large' color='success' startIcon={<SendIcon />} sx={{ marginBottom: 5 }}>
                Enviar Projeto
            </Button>
        </div>
    )
}

export default Inscricao