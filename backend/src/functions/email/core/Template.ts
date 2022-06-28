interface IArtigo {
    titulo?: string
    descricao?: string
    item?: {
        chave: string
        valor: string
    }[]
}

class Template {
    html: string

    constructor() {
        this.html = ''
    }

    cabecalho() {
        this.html += `
        <!doctype html>
        <html>
    
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>FECITEC</title>
            <style>
                .fecitecEmailCorpo {
                    background-color: #e7e7e7;
                    font-family: sans-serif;
                    margin: 0;
                    padding: 20px 30px;
                    line-height: 1rem;
                }
        
                .fecitecEmailCorpo * {
                    margin: 0;
                    padding: 0;
                }
        
                .fecitecEmail {
                    background-color: #fff;
                    max-width: 680px;
                    width: 100%;
                    padding: 1rem;
                    border-radius: 5px;
                }
        
                .fecitecEmail article {
                    margin: 15px 0;
                }
        
                .fecitecEmail article h2 {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin: 10px 0;
                }
        
                .fecitecEmail article p {
                    font-size: 1rem;
                    margin: 5px 0;
                }
        
                .fecitecEmail article ul {
                    margin: 5px 0;
                    line-height: 1.4rem;
                }
        
                .fecitecEmail article li {
                    list-style: none;
                }
        
                .fecitecEmail article li span {
                    font-weight: bold;
                }
        
                .fecitecEmailLogo {
                    width: 200px;
                    text-align: center;
                    margin: 15px 0;
                }
        
                .fecitecEmailRodape {
                    text-align: center;
                    font-size: 0.8rem;
                    margin-top: 5px;
                    color: #888888;
                    max-width: 500px;
                }
        
                .fecitecEmailRodape p {
                    margin: 5px 0;
                }
            </style>
        </head>
    
        <body class="fecitecEmailCorpo">
            <div class="fecitecEmail">
                <img class="fecitecEmailLogo" src="https://i.imgur.com/Con3bPa.png" alt="FECITEC - Feira de Ciência e Tecnologia" />
        `
    }

    rodape() {
        this.html += `
            </div>
            <div class="fecitecEmailRodape">
                <p>Feira de ciência e tecnologia com enfoque em inovação. Acontece anualmente desde 2011 na cidade de Palotina-PR. O evento é organizado por professores da Universidade Federal do Paraná.</p>
                <p>Rua Pioneiro, 2153. Jardim Dallas, Palotina-PR</p>
                <p>www.fecitec.ufpr.br</p>
            </div>
        </body>
    
        </html>
        `
    }

    artigo({ titulo, descricao, item }: IArtigo) {
        this.html += '<article>'

        if (titulo) this.html += `<h2>${titulo}</h2>`
        if (descricao) this.html += `<p>${descricao}</p>`

        if (item?.length > 0) {
            this.html += '<ul>'
            item.forEach(({ chave, valor }) => {
                this.html += `<li><span>${chave}: </span>${valor}</li>`
            })
            this.html += '</ul>'
        }

        this.html += '</article>'
    }
}

export { IArtigo, Template }