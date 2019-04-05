<?php

    require_once("Menu.php");

    function criar_menu(){
        $menu = new Menu("9ª <strong>FECITEC</strong>");
        //$menu->item("teste", "#");
        $menu->dropdown("Inscrição",[["?pagina=1", "Projeto"], ["#", "Mini-curso"], ["#", "Oficina"], ["#", "Visita"]]);
        $menu->fechar();
    }

    

