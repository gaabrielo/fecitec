import { Request, Response } from 'express'

import { enviaEmail } from './core/envia'
import { Template } from './core/Template'

interface IContato {
    nome: string
    email: string
    telefone: string
    titulo: string
    mensagem: string
}

function validacaoCampos(contato: IContato) {
    if (!contato.nome || !contato.email || !contato.telefone) {
        return 'Campos obrigatórios não preenchidos! É necessário informar seu nome, e-mail e telefone'
    }

    if (!contato.titulo) {
        return 'É necessário informar um título com o objetivo do contato'
    }

    if (!contato.mensagem) {
        return 'É necessário descrever o motivo do contato'
    }

    return ''
}

function construirEmail(contato: IContato) {
    const Email = new Template()

    Email.cabecalho()

    Email.artigo({
        titulo: 'Emitente',
        item: [
            { chave: 'Nome', valor: contato.nome },
            { chave: 'E-Mail', valor: contato.email },
            { chave: 'Telefone', valor: contato.telefone }
        ]
    })

    Email.artigo({
        titulo: 'Mensagem',
        item: [
            { chave: 'Título', valor: contato.titulo },
            { chave: 'Motivo', valor: contato.mensagem }
        ]
    })

    Email.rodape()

    return Email.html
}

async function contato(request: Request, response: Response) {
    const contato = request.body as IContato

    // Valida campos
    const retornoValidacao = validacaoCampos(contato)
    if (retornoValidacao !== '') {
        return response.status(403).send({
            erro: retornoValidacao
        })
    }

    // Enviar email
    const html = construirEmail(contato)

    const retorno = await enviaEmail({
        destinatario: contato.email,
        titulo: 'Contato: ' + contato.titulo,
        html
    })

    if (retorno) {
        // Retorna sucesso
        return response.status(200).send({
            sucesso: 'Recebemos sua mensagem de contato com sucesso, iremos te enviar um e-mail de confirmação'
        })
    } 

    return response.status(500).send({
        erro: 'Não foi possível enviar seu contato, favor entrar em contato com a comissão pelo e-mail fecitec.ufpr@gmail.com!'
    })
}

export default contato