<?php

    class Menu{

        public function __construct($nome){
            echo "<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a class='navbar-brand' href='?'>$nome</a>
                    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse' id='navbarNav'>
                        <ul class='navbar-nav'>";
        }

        public function fechar(){
            echo "</ul></div></nav>";
        }

        public function item($texto, $link){
            echo "<li class='nav-item'>
                    <a class='nav-link' href='$link' role='button'>$texto</a>
                  </li>";
        }

        public function dropdown($nome, $itens){
            echo "<li class='nav-item dropdown'>
                   <a class='nav-link dropdown-toggle' id='$nome' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' role='button' style='cursor: pointer'>
                    $nome
                   </a>
                   <div class='dropdown-menu' aria-labelledby='$nome'>";

            foreach($itens as $item){
                echo "<a class='dropdown-item' href='".$item[0]."'>".$item[1]."</a>";
            }

            echo "</div>
                </li>";
        }

/*
<li class='nav-item dropdown'>
    <a class='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
        Dropdown link
    </a>
    <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
        <a class='dropdown-item' href='#'>Action</a>
        <a class='dropdown-item' href='#'>Another action</a>
        <a class='dropdown-item' href='#'>Something else here</a>
    </div>
</li>
*/

    }


/*
<nav class='navbar navbar-expand-lg navbar-light bg-light'>
  <a class='navbar-brand' href='#'>Navbar</a>
  <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
    <span class='navbar-toggler-icon'></span>
  </button>
  <div class='collapse navbar-collapse' id='navbarNav'>
    <ul class='navbar-nav'>
      <li class='nav-item active'>
        <a class='nav-link' href='#'>Home <span class='sr-only'>(current)</span></a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='#'>Features</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='#'>Pricing</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link disabled' href='#' tabindex='-1' aria-disabled='true'>Disabled</a>
      </li>
    </ul>
  </div>
</nav>
*/