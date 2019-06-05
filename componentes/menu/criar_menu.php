<?php

    require_once("Menu.php");

    function criar_menu(){
        $menu = new Menu("9ª <strong>FECITEC</strong>");
        //$menu->item("teste", "#");
        //$menu->item("Inscrição", xurl("projeto"));
        //$menu->dropdown("Inscrição",[[xurl("projeto"), "Projeto"], ["#", "Mini-curso"], ["#", "Oficina"], ["#", "Visita"]]);
        $menu->item("Manual", xurl("orientacoes"));
        $menu->dropdown("Informações", [[xurl("apresentacao"), "Apresentação"], [xurl("participantes"), "Participantes"]]);
        $menu->dropdown("Anais", [[xurl("anais")."&ano=2018", "2018"], [xurl("anais")."&ano=2017", "2017"], [xurl("anais")."&ano=2016", "2016"], [xurl("anais")."&ano=2015", "2015"], [xurl("anais")."&ano=2014", "2014"], [xurl("anais")."&ano=2013", "2013"], [xurl("anais")."&ano=2012", "2012"], [xurl("anais")."&ano=2011", "2011"]]);
        $menu->item("Galeria", xurl("galeria"));
        //$menu->item("Notícias", "#");
        //$menu->item("Apoiadores", "#");
        $menu->item("Contato", xurl("contato"));
        $menu->fechar();
    }

    

