<?php
    function xurl($nome){
        return "?pagina=".sha1($nome);
    }

    function tratar_get($get){
        $inicio = ["Início", "inicio.html"];
        $projeto = ["Formulário", "formulario.php"];
        $apresentacao = ["Apresentação", "apresentacao.html"];
        $orientacoes = ["Orientações", "orientacoes.html"];
        $participantes = ["Participantes", "participantes.html"];
        $mensagem = ["Aviso", "mensagem.php"];
        $contato = ["Contato", "contato.php"];
        $anais = ["Anais", "anais.php"];
        $galeria = ["Galeria", "galeria.html"];

        if(empty($get)){
            return $inicio;
        }

        switch($get){
            case sha1("projeto"):
                return $projeto;

            case sha1("apresentacao"):
                return $apresentacao;
            
            case sha1("orientacoes"):
                return $orientacoes;

            case sha1("participantes");
                return $participantes;
            
            case sha1("mensagem");
                return $mensagem;

            case sha1("contato");
                return $contato;

            case sha1("anais");
                return $anais;

            case sha1("galeria");
                return $galeria;

            default:
                return $inicio;
        }
    }