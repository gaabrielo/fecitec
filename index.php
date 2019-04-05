<?php

    require_once("componentes/chamadas_padrao.php");

    $pagina = tratar_get($_GET["pagina"]);

    criar_cabecalho("Fecitec | $pagina[0]", null);
    criar_menu();

    echo file_get_contents("componentes/paginas/$pagina[1]");

    criar_rodape(null);
?>