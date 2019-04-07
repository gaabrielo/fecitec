<?php
    
    include_once "componentes/formulario/Formulario.php";

    $instituicoes = [
        ["#","selected disabled","Selecionar instituição"],
        ["Convidado",null,"Convidado"],
        ["Centro de Educação Infantil Pingo de Gente",null,"Centro de Educação Infantil Pingo de Gente"],
        ["Centro de Educação Infantil Sementinha do Saber",null,"Centro de Educação Infantil Sementinha do Saber"],
        ["Centro de Excelência em Educação",null,"Centro de Excelência em Educação"],
        ["Centro Educacional Infantil Arco -Íris",null,"Centro Educacional Infantil Arco -Íris"],
        ["Centro Educacional Infantil Raio de Sol",null,"Centro Educacional Infantil Raio de Sol"],
        ["Centro Estadual de Educação Básica para Jovens e Adultos - CEEBJA",null,"Centro Estadual de Educação Básica para Jovens e Adultos - CEEBJA"],
        ["Centro Municipal de Educação Infantil Pequeno Cidadão",null,"Centro Municipal de Educação Infantil Pequeno Cidadão"],
        ["Centro Municipal de Educação Infantil Sonho de Criança",null,"Centro Municipal de Educação Infantil Sonho de Criança"],
        ["Colégio Cecília Meireles",null,"Colégio Cecília Meireles"],
        ["Colégio Dom Bosco",null,"Colégio Dom Bosco"],
        ["Colégio Estadual Agrícola Adroaldo Augusto Colombo",null,"Colégio Estadual Agrícola Adroaldo Augusto Colombo"],
        ["Colégio Estadual Barão do Rio Branco",null,"Colégio Estadual Barão do Rio Branco"],
        ["Colégio Estadual Domingos Francisco Zardo",null,"Colégio Estadual Domingos Francisco Zardo"],
        ["Colégio Estadual Eugenio Garmatz",null,"Colégio Estadual Eugenio Garmatz"],
        ["Colégio Estadual Marechal Gaspar Dutra",null,"Colégio Estadual Marechal Gaspar Dutra"],
        ["Colégio Estadual Pio XII",null,"Colégio Estadual Pio XII"],
        ["Colégio Estadual Santa Tereza",null,"Colégio Estadual Santa Tereza"],
        ["Colégio Estadual Santo Agostinho",null,"Colégio Estadual Santo Agostinho"],
        ["Colégio Estadual Shirlei Saurin",null,"Colégio Estadual Shirlei Saurin"],
        ["Colégio Estadual Tancredo Neves",null,"Colégio Estadual Tancredo Neves"],
        ["Colégio Gabriela Mistral",null,"Colégio Gabriela Mistral"],
        ["Escola de Educação Especial Rouxinol",null,"Escola de Educação Especial Rouxinol"],
        ["Escola Municipal Celino Rocha de Araújo",null,"Escola Municipal Celino Rocha de Araújo"],
        ["Escola Municipal Getúlio Vargas",null,"Escola Municipal Getúlio Vargas"],
        ["Escola Municipal Infantil Vale Verde",null,"Escola Municipal Infantil Vale Verde"],
        ["Escola Municipal Jean Piaget",null,"Escola Municipal Jean Piaget"],
        ["Escola Municipal Joaquim Monteiro Martins Franco",null,"Escola Municipal Joaquim Monteiro Martins Franco"],
        ["Escola Municipal Leonardo da Vinci",null,"Escola Municipal Leonardo da Vinci"],
        ["Escola Municipal Leopoldo Kuroli",null,"Escola Municipal Leopoldo Kuroli"],
        ["Escola Municipal Luiz Moacir Percicoti",null,"Escola Municipal Luiz Moacir Percicoti"],
        ["Escola Municipal Monteiro Lobato",null,"Escola Municipal Monteiro Lobato"],
        ["Escola Municipal Padre Vitorino Roggia",null,"Escola Municipal Padre Vitorino Roggia"],
        ["Escola Municipal Terezinha Giron Agustini",null,"Escola Municipal Terezinha Giron Agustini"],
        ["Escola Terra do Saber",null,"Escola Terra do Saber"]
    ];

    $niveis = [
        ["#", "selected disabled", "Selecionar nível"],
        ["Ensino Infantil", null, "Ensino Infantil"],
        ["Ensino Fundamental I", null, "Ensino Fundamental I"],
        ["Ensino Fundamental II", null, "Ensino Fundamental II"],
        ["Ensino Médio / Técnico", null, "Ensino Médio / Técnico"]
    ];

    $anos = [
        ["#", "selected disabled", "Selecionar ano"],
        ["1° Ano", null, "1° Ano"],
        ["2° Ano", null, "2° Ano"],
        ["3° Ano", null, "3° Ano"]
    ];

    function imprimir_alunos($qtd, $form){
        $camiseta_tipos = [
            ["#", "selected disabled", "Tipo"],
            ["Normal", null, "Normal"],
            ["Baby Look", null, "Baby Look"]
        ];
    
        $camiseta_tamanhos = [
            ["#", "selected disabled", "Tamanho"],
            ["PP", null, "PP"],
            ["P", null, "P"],
            ["M", null, "M"],
            ["G", null, "G"],
            ["GG", null, "GG"],
            ["EG", null, "EG"],
            ["EGG", null, "EGG"]
        ];

        $form->campo_texto("projeto_c_aluno1", "Nome completo", "col-6", "text", "placeholder='Aluno 1'", null);
        $form->campo_selecionar("projeto_c_tipo1", "Tipo", "col-3", $camiseta_tipos, null, null);
        $form->campo_selecionar("projeto_c_tamanho1", "Tamanho", "col-3", $camiseta_tamanhos, null, null);

        for($i = 2; $i < $qtd+1; $i++){
            $form->campo_texto("projeto_c_aluno$i", null, "col-6", "text", "placeholder='Aluno $i'", null);
            $form->campo_selecionar("projeto_c_tipo$i", null, "col-3", $camiseta_tipos, null, null);
            $form->campo_selecionar("projeto_c_tamanho$i", null, "col-3", $camiseta_tamanhos, null, null);
        }
        
        $form->criar_aviso(null, "<strong>ATENÇÃO:</strong> 3 alunos deverão permanecer no estande no período da manhã e 3 no período da tarde.");
    }


?>

<div class="container" style="margin-bottom: 5%">
    <?php
        $form = New Formulario("projeto");
            $form->abrir_sessao("Informações do Projeto", "sessao_informacoesprojeto");
                $form->campo_texto_area("projeto_titulo", "Título", "col-12", "placeholder='Atenção: Depois de enviado o título não poderá ser alterado' maxlength='200' autofocus required", "No resumo, muita atenção para erros ortográficos, abreviações e os limites mínimo e máximo de palavras (de 150 a 400 palavras).");
                $form->campo_texto_area("projeto_resumo", "Resumo", "col-12", "placeholder='De 150 a no máximo 400 palavras' style='height:170px;' required", "Não serão aceitos projetos que utilizam fogo ou qualquer equipamento que possa colocar em risco os participantes da Feira, bem como produtos que possam gerar vapores poluentes ou com odor forte e desagradável.&nbsp;Confira as regras no <a class='text-primary alert-link' href='orientacao.html' target='_blank'>Manual</a>.");
            $form->fechar_sessao();

            $form->abrir_sessao("Recursos", "sessao_recursos");
                $form->campo_texto_area("projeto_localespecifico", "Local específico", "col-12", "required", null);
                $form->campo_texto_area("projeto_justifique", "Justifique", "col-12", "required", "A organização não fornecerá extensões ou qualquer outro material.");
            $form->fechar_sessao();

            $form->abrir_sessao("Instituição de Ensino", "sessao_instituicaoensino");
                $form->campo_selecionar("projeto_instituicao", "Instituição", "col-12", $instituicoes, "required", null);
                $form->campo_selecionar("projeto_instituicaonivel", "Nível", "col-12", $niveis, "onchange='ConfigBy_NivelEscolar()' required", null);
                $form->campo_selecionar("projeto_instituicaoano", "Ano", "col-12", $anos, null, null);
            $form->fechar_sessao();

            $form->abrir_sessao("Professor", "sessao_professor");
                $form->campo_texto("projeto_professornome", "Nome", "col-sm-4", "text", "required", null);
                $form->campo_texto("projeto_professoremail", "E-Mail", "col-sm-5", "email", "required", null);
                $form->campo_texto("projeto_professortelefone", "Telefone", "col-sm-3", "text", "required", null);
                $form->criar_aviso("projeto_professortelefone", "Esteja atento ao e-mail informado. Uma cópia da inscrição será enviada para ele.");
            $form->fechar_sessao();

            $form->abrir_sessao("Monitores UFPR", "sessao_monitores");
                $form->campo_texto_area("projeto_monitoresufpr", "Nome dos monitores", "col-12", "required", null);
            $form->fechar_sessao();

            $form->abrir_sessao("Alunos do projeto e suas camisetas", "sessao_camisetas");
                
                imprimir_alunos(3, $form);            

            $form->fechar_sessao();

            $form->abrir_sessao("Deficientes", "sessao_deficientes");
                $form->campo_texto_area("projeto_deficientes", null, "col-12", "placeholder='Descreva as necessidades caso haja deficiente(s) no grupo'", null);
            $form->fechar_sessao();

            $form->abrir_sessao("Observações", "sessao_observacao");
                $form->campo_texto_area("projeto_observacoes", null, "col-12", null, null);
            $form->fechar_sessao();

            $form->abrir_sessao("Termos", "sessao_termos");
                $form->criar_check("projeto_declaracao1", "Declaro serem verídicas as informações acima mencionadas, bem como assumo total responsabilidade civil e autoral sobre o tema abordado.", "required");
                $form->criar_check("projeto_declaracao2", "Autores concordam com as informações do manual de orientações.", "required");
            $form->fechar_sessao();

            $form->criar_botao_enviar("Enviar");
        $form->fechar();
    ?>
</div>

<script>
    function ConfigBy_NivelEscolar(){
        console.log("atualizou!");
        var x = $("#projeto_instituicaonivel").val();   

        if(x == "Ensino Médio / Técnico"){
            $("#projeto_instituicaoano").prop('disabled', false);
            $("#projeto_instituicaoano").prop('required', true);
        } else {
            $("#projeto_instituicaoano").prop('disabled', true);
            $("#projeto_instituicaoano").val("#");
            $("#projeto_instituicaoano").prop('required', false);
        }

        if(x == "Ensino Fundamental II" || x == "Ensino Médio / Técnico"){
            $("#sessao_camisetas").html("<?php imprimir_alunos(6, $form);?>");
        } else {
            $("#sessao_camisetas").html("<?php imprimir_alunos(3, $form);?>");
        }
    }

    $(document).ready(function(){
        ConfigBy_NivelEscolar();
    });

    $("#projeto").submit(function(){
        /*$.post("xxx",{@parans},function(retorno){

        });*/
        var projeto_titulo = $("#projeto_titulo").val();
        var projeto_resumo = $("#projeto_resumo").val();
        var projeto_local = $("#projeto_localespecifico").val();
        var projeto_justifique = $("#projeto_justifique").val();
        var projeto_instituicao = $("#projeto_instituicao").val();
        var projeto_instituicaonivel = $("#projeto_instituicaonivel").val();
        var projeto_instituicaoano = $("#projeto_instituicaoano").val();
        var projeto_professornome = $("#projeto_professornome").val();
        var projeto_professoremail = $("#projeto_professoremail").val();
        var projeto_professortelefone = $("#projeto_professortelefone").val();
        var projeto_monitoresufpr = $("#projeto_monitoresufpr").val();
        var projeto_c_aluno1 = $("#projeto_c_aluno1").val();
        var projeto_c_tipo1 = $("#projeto_c_tipo1").val();
        var projeto_c_tamanho1 = $("#projeto_c_tamanho1").val();
        var projeto_c_aluno2 = $("#projeto_c_aluno2").val();
        var projeto_c_tipo2 = $("#projeto_c_tipo2").val();
        var projeto_c_tamanho2 = $("#projeto_c_tamanho2").val();
        var projeto_c_aluno3 = $("#projeto_c_aluno3").val();
        var projeto_c_tipo3 = $("#projeto_c_tipo3").val();
        var projeto_c_tamanho3 = $("#projeto_c_tamanho3").val();
        var projeto_c_aluno4 = $("#projeto_c_aluno4").val();
        var projeto_c_tipo4 = $("#projeto_c_tipo4").val();
        var projeto_c_tamanho4 = $("#projeto_c_tamanho4").val();
        var projeto_c_aluno5 = $("#projeto_c_aluno5").val();
        var projeto_c_tipo5 = $("#projeto_c_tipo5").val();
        var projeto_c_tamanho5 = $("#projeto_c_tamanho5").val();
        var projeto_c_aluno6 = $("#projeto_c_aluno6").val();
        var projeto_c_tipo6 = $("#projeto_c_tipo6").val();
        var projeto_c_tamanho6 = $("#projeto_c_tamanho6").val();
        var projeto_deficientes = $("#projeto_deficientes").val();
        var projeto_observacoes = $("#projeto_observacoes").val();
        var projeto_declaracao1 = $("#projeto_declaracao1").val();
        var projeto_declaracao2 = $("#projeto_declaracao2").val();

        $.post("http://localhost/fecitec/componentes/funcoes/enviar_formulario_projeto.php", {
            projeto_titulo:projeto_titulo,
            projeto_resumo:projeto_resumo,
            projeto_local:projeto_local,
            projeto_justifique:projeto_justifique,
            projeto_instituicao:projeto_instituicao,
            projeto_instituicaonivel:projeto_instituicaonivel,
            projeto_instituicaoano:projeto_instituicaoano,
            projeto_professornome:projeto_professornome,
            projeto_professoremail:projeto_professoremail,
            projeto_professortelefone:projeto_professortelefone,
            projeto_monitoresufpr:projeto_monitoresufpr,
            alunos: [[projeto_c_aluno1, projeto_c_tipo1, projeto_c_tamanho1],
                     [projeto_c_aluno2, projeto_c_tipo2, projeto_c_tamanho2],
                     [projeto_c_aluno3, projeto_c_tipo3, projeto_c_tamanho3],
                     [projeto_c_aluno4, projeto_c_tipo4, projeto_c_tamanho4],
                     [projeto_c_aluno5, projeto_c_tipo5, projeto_c_tamanho5],
                     [projeto_c_aluno6, projeto_c_tipo6, projeto_c_tamanho6]],
            projeto_deficientes: projeto_deficientes,
            projeto_observacoes: projeto_observacoes,
            projeto_declaracao1: projeto_declaracao1,
            projeto_declaracao2: projeto_declaracao2
        }, function(retorno){
            alert(retorno);
        });

        
        return false;
    });
</script>
    
