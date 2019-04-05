<?php
    
    include_once "componentes/formulario/Formulario.php";

    $instituicoes = [
        ["Selecionar instituição","selected disabled","Selecionar instituição"],
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
        ["Selecionar nível", "selected disabled", "Selecionar nível"],
        ["Ensino Infantil", null, "Ensino Infantil"],
        ["Ensino Fundamental I", null, "Ensino Fundamental I"],
        ["Ensino Fundamental II", null, "Ensino Fundamental II"],
        ["Ensino Médio / Técnico", null, "Ensino Médio / Técnico"]
    ];

    $anos = [
        ["Selecionar ano", "selected disabled", "Selecionar ano"],
        ["1° Ano", null, "1° Ano"],
        ["2° Ano", null, "2° Ano"],
        ["3° Ano", null, "3° Ano"]
    ];
?>

<div class="container">
    <?php
        $form = New Formulario("projeto");
            $form->abrir_sessao("Informações do Projeto");
                $form->campo_texto_area("projeto_titulo", "Título", "col-12", "placeholder='Atenção: Depois de enviado o título não poderá ser alterado' maxlength='200' autofocus required", "No resumo, muita atenção para erros ortográficos, abreviações e os limites mínimo e máximo de palavras (de 150 a 400 palavras).");
                $form->campo_texto_area("projeto_resumo", "Resumo", "col-12", "placeholder='De 150 a no máximo 400 palavras' style='height:170px;' required", "Não serão aceitos projetos que utilizam fogo ou qualquer equipamento que possa colocar em risco os participantes da Feira, bem como produtos que possam gerar vapores poluentes ou com odor forte e desagradável.&nbsp;Confira as regras no <a class='text-primary alert-link' href='orientacao.html' target='_blank'>Manual</a>.");
            $form->fechar_sessao();

            $form->abrir_sessao("Recursos");
                $form->campo_texto_area("projeto_localespecifico", "Local específico", "col-12", "required", null);
                $form->campo_texto_area("projeto_justifique", "Justifique", "col-12", "required", "A organização não fornecerá extensões ou qualquer outro material.");
            $form->fechar_sessao();

            $form->abrir_sessao("Instituição de Ensino");
                $form->campo_selecionar("projeto_instituicao", "Instituição", "col-12", $instituicoes, "required", null);
                $form->campo_selecionar("projeto_instituicaonivel", "Nível", "col-12", $niveis, "required", null);
                $form->campo_selecionar("projeto_instituicaoano", "Ano", "col-12", $anos, "required", null);
            $form->fechar_sessao();

            $form->abrir_sessao("Professor");
                $form->campo_texto("projeto_professornome", "Nome", "col-sm-4", "text", "required", null);
                $form->campo_texto("projeto_professoremail", "E-Mail", "col-sm-5", "email", "required", null);
                $form->campo_texto("projeto_professortelefone", "Telefone", "col-sm-3", "text", "required", null);
            $form->fechar_sessao();
        $form->fechar();
    ?>
</div>
    
