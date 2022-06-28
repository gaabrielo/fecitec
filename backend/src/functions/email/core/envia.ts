import nodemailer from 'nodemailer'

interface IEnviaEmail {
    destinatario: string
    titulo: string
    html: string
}

function conta() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    })
}

async function enviaEmail({ destinatario, titulo, html }: IEnviaEmail) {
    const transporter = conta()

    const retorno = await transporter.sendMail({
        from: '"Fecitec" <fecitec@ufpr.br>',
        to: 'xfelipesobral@gmail.com, ' + destinatario, // fecitec.ufpr@gmail.com
        subject: titulo,
        html
    })

    console.log('Email enviado: '+retorno.messageId)
}

export { IEnviaEmail, enviaEmail }