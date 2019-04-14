<?php

    function criar_cabecalho($nome_pagina, $extra){
        echo "
        <!doctype html>
        <html lang='pt-br'>
            <head>
                <meta charset='utf-8'>
                <base href='http://www.fecitec.ufpr.br/'/>
                <meta name='keywords' content='fecitec, feira, palotina, feira de ciências, ufpr'>
                <meta property='og:site_name' content='9ª FECITEC'/>
                <meta name='author' content='Felipe V. Sobral - www.github.com/felipe-sobral'/>

                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>

                <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
                <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.1/css/all.css' integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf' crossorigin='anonymous'>
                <link rel='stylesheet' href='arquivos/css/principal.css'>
                <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400' rel='stylesheet'> 
                $extra
                <script src='https://code.jquery.com/jquery-3.3.1.min.js'></script>

                <title>$nome_pagina</title>

                <meta property='og:url' content='http://www.fecitec.ufpr.br/' >
                <meta property='og:title' content='9ª FECITEC' >
                <meta property='og:description' content='9ª FECITEC - PALOTINA PR'>
            </head>
            <body>";
    }

