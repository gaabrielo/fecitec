<?php     

    require_once("../email/Email.php");
    require_once("../email/EmailMensagem.php");

    if(!isset($_POST) || empty($_POST)){
        echo "INVÁLIDO";
        exit;
    }
    function mensagem_componente($titulo, $texto){
        return "<p><strong>$titulo: </strong>$texto</p>";
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

    //OBRIGATÓRIOS
    if(empty($titulo) || empty($resumo) || empty($local) || empty($justifique) || empty($instituicao) || empty($instituicao) ||
       empty($instituicao_nivel) || empty($professor_nome) || empty($professor_email) || empty($professor_telefone) ||
       empty($monitores) || empty($declaracao1) || empty($declaracao2)){
        echo "VALORES INCOMPATÍVEIS";
        exit;
    }else{
        $comp_projeto = ["PROJETO", mensagem_componente("Título", $titulo).mensagem_componente("Resumo", $resumo)];
        $comp_recursos = ["RECURSOS", mensagem_componente("Local específico", $local).mensagem_componente("Justificativa", $justifique)];
        $comp_professor = ["PROFESSOR", mensagem_componente("Nome", $professor_nome).mensagem_componente("E-Mail", $professor_email).mensagem_componente("Telefone", $professor_telefone)];
        $comp_monitores = ["MONITORES UFPR", "<p>$monitores</p>"];
        $comp_declaracao = ["DECLARAÇÕES DE RESPONSABILIDADE", "<p>Afirmo que li e concordo com todas informações do  manual de orientações. <br>Declaro serem verídicas as informações acima mencionas, bem como assumo total responsabilidade civil e autoral sobre o tema abordado.</p>"];
        $msg_instituicao = "<p><strong>Instituição:</strong> $instituicao</p><p><strong>Nível:</strong> $instituicao_nivel</p>";
    }

    if(!empty($instituicao_ano)){
        $msg_instituicao .= "<p><strong>Ano:</strong> $instituicao_ano</p>";
    }

    if(empty($deficientes)){
        $comp_deficientes = ["DEFICIENTES", "<p>Nada informado.</p>"];
    } else {
        $comp_deficientes = ["DEFICIENTES", "<p>$deficientes</p>"];
    }
    
    if(empty($observacoes)){
        $comp_observacoes = ["OBSERVAÇÕES", "<p>Nada informado.</p>"];
    } else {
        $comp_observacoes = ["OBSERVAÇÕES", "<p>$observacoes</p>"];
    }

    // alunos -> [[aluno1, camisa1, tipo1]...]
    if(!empty($alunos)){
        $i = 1;
        $mensagem = "";

        foreach($alunos as $aluno){
            $mensagem .= "<p>(Aluno $i) <strong> Nome:</strong> $aluno[0]";
            $mensagem .= " -<strong> Camiseta:</strong> $aluno[1]";
            $mensagem .= " -<strong> Tamanho:</strong> $aluno[2]</p>";
            $i++;
        }

        $comp_alunos = ["ALUNOS E CAMISETAS", $mensagem];
    }

    $mensagem = new EmailMensagem("<h1>SUCESSO!</h1><h3>Inscrição realizada para a 9ª Fecitec.</h3>");
    $mensagem->corpo([
        $comp_projeto, 
        $comp_recursos,
        ["INSTITUIÇÃO DE ENSINO", $msg_instituicao],
        $comp_professor,
        $comp_monitores,
        $comp_alunos,
        $comp_deficientes,
        $comp_observacoes,
        $comp_declaracao
        ]);
    $mensagem->e_final("<a style='color: #fff'>9ª <strong>FECITEC</strong></a>");
    
    $email = new Email();

    if($email->enviar("INSCRIÇÃO: $titulo", $mensagem->montar(), $professor_email)){
        echo "#true#";
    } else {
        echo "#false#";
    }


    //header("Location: ?pagina=".sha1("mensagem")."&".sha1("msg")."=".sha1("email-false")); 
    

    //echo $mensagem->montar();
