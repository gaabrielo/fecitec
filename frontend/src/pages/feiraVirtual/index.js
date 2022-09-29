import React from 'react'

import Titulo from '../../components/titulo'

import './style.css'

function FeiraVirtual() {

    return (
        <div id='feiraVirtual'>
            <Titulo descricao='Informações sobre a feira de 17 à 24 de outubro' texto='Feira Virtual' />

            <ul>
                <li>A 12ª FECITEC será no formato híbrido: presencial para Palotina e região (dia 24 de outubro na UFPR, segunda-feira) e virtual (para projetos de outros locais)</li>
                <li>Curta, siga e compartilhe: Facebook (<a href='https://www.facebook.com/fecitecpalotina' target='_BLANK'>@fecitecpalotina</a>) e Instagram (<a href='https://www.instagram.com/fecitec.palotina/' target='_BLANK'>@fecitec.palotina</a>)</li>
                <li>Se tiverem fotos do andamento dos projetos / das atividades realizadas podem nos enviar por e-mail (fecitec.ufpr@gmail.com) que divulgaremos nas redes sociais. Ou ainda podem publicar e marcar a FECITEC. Auxilia na divulgação das ações da escola e da Feira</li>
                <li>Os critérios de avaliação dos projetos são os mesmos das edições anteriores e estão descritos detalhadamente no manual de orientações. Sugerimos uma leitura cautelosa e check list dos itens no seu projeto para aprimoramento antes da Feira. Disponível em <a href='/manual' target='_BLANK'>http://www.fecitec.ufpr.br/manual</a></li>
                <li>Todos os projetos inscritos na modalidade virtual deverão gravar um vídeo, de até 10 minutos, apresentando o projeto e as ideias. Após a conclusão do vídeo, este deverá ser disponibilizado em canal do YouTube e o link de acesso deverá ser encaminhado, até dia 08 de outubro, para a comissão organizadora no e-mail: fecitec.ufpr@gmail.com</li>
                <li>Não há necessidade de envio de materiais extra como o projeto, relatórios, banners, etc.</li>
                <li>Os projetos ficarão disponíveis no site da FECITEC de 17 a 24de outubro e os avaliadores vão ler o resumo e assistir o vídeo</li>
                <li>Não haverá uma sala de interação entre os projetos e avaliadores/visitantes. No entanto, os comentários dos avaliadores sobre o projeto serão enviados, após a feira, para o e-mail cadastrado na inscrição</li>
                <li>Divulgaremos os premiados no dia 24 de outubro através de um vídeo no canal do YouTube - <a href='https://www.youtube.com/channel/UCedhLDlFf5lJ4aRUu_4fKGw' target='_BLANK'>Feira de Ciência e Tecnologia de Palotina</a></li>
                <li>Caso o projeto de vocês seja premiado, entraremos em contato e enviaremos as medalhas, troféus, e outros prêmios pelo correio</li>
            </ul>

            <p>Desde já, agradecemos a participação e em caso de dúvidas estamos à disposição.</p>
        </div>
    )
}

export default FeiraVirtual