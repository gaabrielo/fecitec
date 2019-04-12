<?php

    /*ini_set('display_errors',1);
    ini_set('display_startup_erros',1);
    error_reporting(E_ALL);*/

    require_once("../email/Email.php");
    require_once("../email/EmailMensagem.php");

    if(!isset($_POST) || empty($_POST)){
        echo "INVÁLIDO";
        exit;
    }

    $nome = $_POST["nome"];
    $email_d = $_POST["email"];
    $titulo = $_POST["titulo"];
    $mensagem_d = $_POST["mensagem"];

    if(empty($nome) || empty($email_d) || empty($titulo) || empty($mensagem_d)){
        echo "VALORES INCOMPATÍVEIS";
        exit;
    }

    $mensagem = new EmailMensagem("<h1>CONTATO!</h1>");
    $mensagem->corpo([["REMETENTE", "<p><strong>Nome</strong>: $nome</p><p><strong>E-Mail</strong>: $email_d</p>"],
                     ["MENSAGEM", "<p><strong>Título</strong>: $titulo</p><p><strong>Mensagem</strong>: $mensagem_d</p>"]]);
    $mensagem->e_final("<a style='color: #fff'>9ª <strong>FECITEC</strong></a>");

    $email = new Email();
    $email->enviar("CONTATO: $titulo", $mensagem->montar(), $email_d);

    //echo $mensagem->montar();

    