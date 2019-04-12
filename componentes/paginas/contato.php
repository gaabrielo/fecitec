<div class="container-fluid banner-s">
    <img src="arquivos/imagens/logo-branco.svg" class="img-fluid">
</div>

<div class="container">
    <?php
        
        include_once "componentes/formulario/Formulario.php";
        $id = "contato";

        $form = new Formulario($id);

            $form->abrir_sessao("<h3 style='text-align: center'>Alguma <strong>dúvida</strong>? Entre em contato conosco!</h3>", "sessao_contato");
                $form->campo_texto("$id-nome", "Nome completo", "col-sm-6", "text", "placeholder='Informe seu nome completo.' required", null);
                $form->campo_texto("$id-email", "Seu e-mail", "col-sm-6", "email", "placeholder='Informe seu e-mail. (precisa ser válido)'  required", null);
                $form->espacador();
                $form->campo_texto("$id-titulo", "Título da mensagem", "col-12", "text", "placeholder='Digite o título da sua mensagem.' required", null);
                $form->campo_texto_area("$id-mensagem", null, "col-12", "placeholder='Digite aqui sua mensagem!' style='height: 200px' required", null);
            
                $form->criar_botao_enviar("Enviar");
            $form->fechar_sessao();

        $form->fechar();
    ?>
</div>

<script>

    $("#contato").submit(function(){
        $("#contato-botao").prop("disabled", true);
        $("#contato-botao").html("<div class='spinner-border' role='status'><span class='sr-only'>Enviando</span></div>");

        var url = "componentes/funcoes/enviar_f_contato.php"

        $.post(url, {nome: $("#contato-nome").val(), email: $("#contato-email").val(), titulo: $("#contato-titulo").val(), mensagem: $("#contato-mensagem").val()}, function(retorno){

            if(retorno == "#true#"){
                alert("Mensagem enviada. Confira seu e-mail!");
                
                $("#contato-nome").val("");
                $("#contato-email").val("");
                $("#contato-titulo").val("");
                $("#contato-mensagem").val("");
            }

            alert("Ops! Algum dado está incorreto =(");
            $("#contato-botao").prop("disabled", false);
            $("#contato-botao").html("Enviar");
        }).fail(function(){

            alert("Ops! Problemas técnicos, tente novamente mais tarde.");
            $("#contato-botao").prop("disabled", false);
            $("#contato-botao").html("Enviar");

        });

        return false;
    });

</script>