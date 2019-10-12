<div class="container-fluid banner-s">
    <img src="arquivos/imagens/logo-branco.svg" class="img-fluid">
</div>

<?php
    function imprime_pdf($ano){
        $caminho = "arquivos/documentos/anais/$ano.pdf";

        echo "
        <div class='container' style='text-align: center'>
            <hr style='width: 50%'>
            <h1 class='display-4' style='font-weight: 100'>$ano</h1>
            <a style='font-weight: 300'>FECITEC</a>
            <hr style='width: 50%'>
        </div>
        <div class='container' style='margin-bottom: 10%'>
            <div class='card'>
                <div class='card-header'>
                    Anual - PDF
                </div>
                <div class='card-body'>
                    <object data='$caminho' type='application/pdf' style='width: 100%; height: 800px'>
                        <div class='alert alert-warning' role='alert' style='text-align: justify'>
                            Seu navegador não possui suporte para exibir o arquivo nesta página, mas basta clicar no botão 'Baixar' aqui em baixo, e então é só abrir o arquivo em seu dispositivo.
                        </div>
                    </object>
                    <p class='card-text' style='text-align: center; color: #fff'>
                        <a class='btn btn-success btn-lg' href='$caminho' download='FECITEC-ANUAL-$ano'><i class='fas fa-file-download'></i> Baixar</a>
                    </p>
                </div>
            </div>
        </div>
        ";
    }

    function imprimir_lista(){
        $lista = "";

        for($i = 2019; $i > 2011-1; $i--){
            $lista .= "<li><a href='".xurl("anais")."&ano=$i'>$i</a></li>";
        }

        return $lista;
    }

    function imprime_menu(){
        echo "
        <div class='container' style='text-align: center'>
            <hr style='width: 50%'>
            <h1 class='display-4' style='font-weight: 100'>ANAIS</h1>
            <a style='font-weight: 300'>2019 - 2011</a>
            <hr style='width: 50%'>
        </div>
        <div class='container' style='margin-bottom: 10%'>
            <div class='card'>
                <div class='card-header'>
                    Anais disponíveis
                </div>
                <div class='card-body'>
                    

                    <div>
                        <h1 class='display-4'>Anais disponíveis</h1>
                        <p class='lead'>Olá, tudo bem? No momento apenas estes anais estão disponíveis!</p>
                        <hr class='my-4'>
                        <ul>
                            ".imprimir_lista()."
                        </ul>
                    </div>


                </div>
            </div>
        </div>
        ";
    }


    $ano = $_GET["ano"];

    if(empty($ano) || $ano > 2019 || $ano < 2011){
        imprime_menu();
    } else {
        imprime_pdf($ano);
    }

