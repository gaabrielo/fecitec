<?php 

    require_once("../email/Email.php");

    if(!isset($_POST) || empty($_POST)){
        echo "INVÁLIDO";
        exit;
    }

    // Variáveis
    $titulo = $_POST["projeto_titulo"];
    $resumo = $_POST["projeto_resumo"];
    $local = $_POST["projeto_local"];
    $justifique = $_POST["projeto_justifique"];
    $instituicao = $_POST["projeto_instituicao"];
    $instituicao_nivel = $_POST["projeto_instituicaonivel"];
    $instituicao_ano = $_POST["projeto_instituicaoano"];
    $professor_nome = $_POST["projeto_professornome"];
    $professor_email = $_POST["projeto_professoremail"];
    $professor_telefone = $_POST["projeto_professortelefone"];
    $monitores = $_POST["projeto_monitoresufpr"];
    $alunos = $_POST["alunos"];
    $deficientes = $_POST["projeto_deficientes"];
    $observacoes = $_POST["projeto_observacoes"];
    $declaracao1 = $_POST["projeto_declaracao1"];
    $declaracao2 = $_POST["projeto_declaracao2"];

    $email = new Email;

    $img = "<img src='http://bibliotecaufprpa.hol.es/img/bg.jpg'/>";

    if($email->enviar_teste("Teste AÃAÃÃÃÃ", "EMAIL-TESTE $img", "ntlooknetfs@gmail.com")){
        echo "ENVIADO!";
    } else {
        echo "ALGO DEU ERRADO =(";
    }