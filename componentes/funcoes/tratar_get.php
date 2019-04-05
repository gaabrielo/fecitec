<?php

    function tratar_get($get){
        $inicio = ["Início", "inicio.html"];
        $formulario = ["Formulário", "formulario.html"];

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