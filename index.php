<?php

    require_once("componentes/chamadas_padrao.php");

    function imprimir_pagina($pagina){
        include_once "componentes/paginas/$pagina";
    }

    $pagina = tratar_get($_GET["pagina"]);

    criar_cabecalho("Fecitec | $pagina[0]", null);
    criar_menu();

    imprimir_pagina($pagina[1]);

    criar_rodape(null);
