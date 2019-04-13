<?php

    require_once("componentes/chamadas_padrao.php");

    function imprimir_pagina($pagina){
        $extensao = explode(".", $pagina);

        switch($extensao[1]){
            case "html":
                echo file_get_contents("componentes/paginas/$pagina");
                break;

            case "php":
                include_once "componentes/paginas/$pagina";
                break;

            default:
                echo "Método inválido";
                break;

        }
    }

    $pagina = tratar_get($_GET["pagina"]);

    criar_cabecalho("Fecitec | $pagina[0]", null);
    criar_menu();

    imprimir_pagina($pagina[1]);

    criar_rodape(null);
