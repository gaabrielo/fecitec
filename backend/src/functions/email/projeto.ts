import { Request, Response } from 'express'

import { enviaEmail } from './core/envia'
import { Template, IArtigo } from './core/Template'

interface IAluno {
    nome: string
    camisaTipo: string
    camisaTamanho: string
}

interface IProjeto {
    titulo: string
    resumo: string
    modo: string
    instituicaoNome: string
    instituicaoNivel: string
    instituicaoAno: string
    professorNome: string
    professorEmail: string
    professorTelefone: string
    professorCelular: string
    monitores: string
    alunos: IAluno[]
    deficientes: string
    observacoes: string
    localEspecifico: string
    localJustifique: string
    concordaComTermos: boolean
    declaraInformacoesVeridicas: boolean
}

function validacaoCampos(projeto: IProjeto) {
    if (
        !projeto.titulo ||
        !projeto.resumo ||
        !projeto.modo ||
        !projeto.instituicaoNome ||
        !projeto.instituicaoNivel ||
        !projeto.instituicaoAno ||
        !projeto.professorNome ||
        !projeto.professorEmail ||
        !projeto.professorCelular
    ) {
        return 'Verifique se todos campos obrigatórios foram preenchidos!'
    }

    if (!projeto.concordaComTermos || !projeto.declaraInformacoesVeridicas) {
        return 'É necessário concordar com os termos para poder submeter o projeto'
    }

    if (projeto.alunos.length <= 0) {
        return 'Informe os alunos participantes do projeto'
    }

    if (projeto.instituicaoNivel === 'Ensino Infantil' && projeto.alunos.length > 6) {
        return 'No Ensino Infantil é possível informar apenas 6 alunos'
    }

    if (projeto.instituicaoNivel !== 'Ensino Infantil' && projeto.alunos.length > 3) {
        return 'As equipes serão compostas por no máximo 3 alunos, com exceção do ensino infantil que poderão ser compostas por até 6 alunos'
    }

    return ''
}

function construirEmail(projeto: IProjeto) {
    const Email = new Template()

    Email.cabecalho()

    Email.artigo({
        titulo: 'Projeto',
        item: [
            { chave: 'Título', valor: projeto.titulo },
            { chave: 'Resumo', valor: projeto.resumo },
            { chave: 'Modo', valor: projeto.modo },
        ]
    })

    Email.artigo({
        titulo: 'Instituição de Ensino',
        item: [
            { chave: 'Insituição', valor: projeto.instituicaoNome },
            { chave: 'Nível', valor: projeto.instituicaoNivel },
            { chave: 'Ano', valor: projeto.instituicaoAno },
        ]
    })

    Email.artigo({
        titulo: 'Orientação do Projeto',
        item: [
            { chave: 'Nome', valor: projeto.professorNome },
            { chave: 'E-Mail', valor: projeto.professorEmail },
            { chave: 'Telefone', valor: projeto.professorTelefone || 'Telefone não informado' },
            { chave: 'Celular', valor: projeto.professorCelular },
        ]
    })

    if (projeto.monitores) {
        Email.artigo({
            titulo: 'Monitores da UFPR',
            descricao: projeto.monitores
        })
    }

    if (projeto.alunos.length > 0) {
        const artigoAluno: IArtigo = {
            titulo: 'Alunos',
            item: []
        }
        projeto.alunos.forEach((aluno, i) => {
            artigoAluno.item.push({
                chave: `Aluno ${i + 1}`,
                valor: `${aluno.nome} - ${aluno.camisaTipo} - ${aluno.camisaTamanho}`
            })
        })
        Email.artigo(artigoAluno)
    }

    if (projeto.deficientes) {
        Email.artigo({
            titulo: 'Deficientes',
            descricao: projeto.deficientes
        })
    }

    if (projeto.localEspecifico || projeto.localJustifique) {
        Email.artigo({
            titulo: 'Recursos',
            item: [
                { chave: 'Local Específico', valor: projeto.localEspecifico || 'Não informado' },
                { chave: 'Justificativa', valor: projeto.localJustifique || 'Não informada' }
            ]
        })
    }

    if (projeto.observacoes) {
        Email.artigo({
            titulo: 'Observações',
            descricao: projeto.observacoes
        })
    }

    Email.artigo({
        titulo: 'Termos',
        descricao: 'Afirmo que li e concordo com todas informações do manual de orientações. Declaro serem verídicas as informações acima mencionas, bem como assumo total responsabilidade civil e autoral sobre o tema abordado.'
    })

    Email.rodape()

    return Email.html
}

async function projeto(request: Request, response: Response) {
    const projeto = request.body as IProjeto

    return response.status(403).send({
        erro: 'Inscrições encerradas!'
    })

    // Validar campos
    const retornoValidacao = validacaoCampos(projeto)
    if (retornoValidacao !== '') {
        return response.status(403).send({
            erro: retornoValidacao
        })
    }

    // Enviar email
    const html = construirEmail(projeto)

    const retorno = await enviaEmail({
        destinatario: projeto.professorEmail,
        titulo: 'Projeto: ' + projeto.titulo,
        html
    })

    if (retorno) {
        // Retorna sucesso
        return response.status(200).send({
            sucesso: 'Sua inscrição foi enviada com cópia ao seu e-mail. Favor verificar se foi realizada com sucesso.'
        })
    } 

    return response.status(500).send({
        erro: 'Não foi possível enviar sua inscrição via e-mail, favor entrar em contato com a comissão pelo e-mail fecitec.ufpr@gmail.com!'
    })
}

export default projeto