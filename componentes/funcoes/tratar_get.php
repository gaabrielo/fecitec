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

            default:
                return $inicio;
        }
    }

    function imprimir_pagina($pagina){
        $extensao = explode(".", $pagina);

        switch($extensao[1]){
            case "html":
                echo file_get_contents("componentes/paginas/$pagina");
                break;

            case "php":
                include_once "componentes/paginas/$pagina";
                break;

            default:
                echo "Método inválido";
                break;

        }
    }