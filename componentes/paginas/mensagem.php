<?php
    if(empty($_GET[sha1("msg")])){

        header("Location: ?"); 

    } 

    imprimir_aviso($_GET[sha1("msg")]);
    
    
    function imprimir_aviso($mensagem){
        $tipo;

        switch ($mensagem){
            case sha1("email-success"):
                $tipo = "<i class='fas fa-check-circle' style='font-size: 10rem; color: #65b200'></i>";
                $mensagem = "Projeto inscrito com sucesso!<br><strong>Confira seu E-Mail.</strong>";
                break;
            
            case sha1("email-false"):
                $tipo = "<i class='fas fa-times' style='font-size: 10rem; color: #cc0808'></i>";
                $mensagem = "Ops! Algum imprevisto aconteceu, tente novamente ou retorne mais tarde.<br><br><button onclick='window.history.back();' class='btn btn-danger'>Voltar</button>";
                break;
            
            default:
                header("Location: ?");
        }

        echo "
            <div class='container' style='margin-top: 5%; margin-bottom: 5%'>
                <div class='container-fluid banner-s'>
                    <img src='arquivos/imagens/logo-branco.svg' class='img-fluid'>
                </div>
            </div>
        
            <div class='container' style='margin-top: 5%; margin-bottom: 5%'>
                <div style='text-align: center'>
                    <div class='card text-center' style='width: 100%;'>
                        <div class='card-body'>
                            $tipo
                            <h2 class='card-text' style='margin-top: 6%;'>$mensagem</h2>

                        </div>
                    </div>
                    
                </div>
            </div>
        
        ";
    }
    
    
    



    