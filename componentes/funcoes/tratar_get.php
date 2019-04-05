<?php

    function tratar_get($get){
        $inicio = ["Início", "inicio.html"];
        $formulario = ["Formulário", "formulario.php"];

        if(empty($get)){
            return $inicio;
        }

        switch($get){
            case 1:
                return $formulario;

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