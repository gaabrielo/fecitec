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
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })
}

async function enviaEmail({ destinatario, titulo, html }: IEnviaEmail) {
    const transporter = conta()

    try {
        const retorno = await transporter.sendMail({
            from: '"Fecitec" <fecitec@ufpr.br>',
            to: 'xfelipesobral@gmail.com, ' + destinatario, // fecitec.ufpr@gmail.com
            subject: titulo,
            html
        })

        return true
    } catch (e) {
        return false
    }
}

export { IEnviaEmail, enviaEmail }