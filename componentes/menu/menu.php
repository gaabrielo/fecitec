<?php

    require_once("Menu.php");

    function criar_menu(){
        $menu = new Menu("9ª <strong>FECITEC</strong>");
        //$menu->item("teste", "#");
        $menu->item("Inscrição", xurl("projeto"));
        //$menu->dropdown("Inscrição",[[xurl("projeto"), "Projeto"], ["#", "Mini-curso"], ["#", "Oficina"], ["#", "Visita"]]);
        $menu->item("Manual", xurl("orientacoes"));
        $menu->dropdown("Informações", [[xurl("apresentacao"), "Apresentação"], [xurl("participantes"), "Participantes"]]);
        //$menu->dropdown("Anais", [["#", "2018"], ["#", "2017"], ["#", "2016"], ["#", "2015"], ["#", "2014"], ["#", "2013"], ["#", "2012"], ["#", "2011"]]);
        //$menu->item("Galeria", "#");
        //$menu->item("Notícias", "#");
        //$menu->item("Apoiadores", "#");
        $menu->item("Contato", xurl("contato"));
        $menu->fechar();
    }

    

