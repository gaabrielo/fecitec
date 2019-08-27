<?php

    require_once("componentes/chamadas_padrao.php");

    function imprimir_pagina($pagina){
        include_once "componentes/paginas/$pagina";
    }

    $pg = empty($_GET["pagina"]) ? "null" : $_GET["pagina"];

    $pagina = tratar_get($pg);

    criar_cabecalho("Fecitec | $pagina[0]", null);
    criar_menu();

    imprimir_pagina($pagina[1]);

    criar_rodape(null);
