<?php

    class Formulario{
        public function __construct($id){
            echo "<form id='$id'>";
        }

        public function campo_texto($id, $titulo, $tamanho, $tipo, $extra_input, $aviso){
            echo "<div class='$tamanho form-group'>";
            if(!is_null($titulo)){
                echo "<label for='$id'>$titulo</label>";
            }
            echo "<input type='$tipo' class='form-control' id='$id' aria-describedby='$id-H' $extra_input>";
                 
            if(!is_null($aviso)){
                $this->criar_aviso($id, $aviso);
            }

            echo "</div>";
        }

        public function campo_texto_area($id, $titulo, $tamanho, $extra_input, $aviso){
            echo "<div class='$tamanho form-group'>";
            if(!is_null($titulo)){
                echo "<label for='$id'>$titulo</label>";
            }
            echo "<textarea class='form-control' id='$id' aria-describedby='$id-H' $extra_input></textarea>";
                 
            if(!is_null($aviso)){
                $this->criar_aviso($id, $aviso);
            }

            echo "</div>";
        }

        public function campo_selecionar($id, $titulo, $tamanho, $options, $extra, $aviso){
            echo "<div class='form-group $tamanho'>";
            if(!is_null($titulo)){
                echo "<label for='$id'>$titulo</label>";
            }
            echo "<select class='form-control' id='$id' $extra>";

            foreach($options as $option){
                echo "<option value='$option[0]' $option[1]>$option[2]</option>";
            }

            if(!is_null($aviso)){
                $this->criar_aviso($id, $aviso);
            }
            
            echo "</select></div>";
        }

        public function abrir_sessao($titulo){
            echo "<div class='card'>
                    <div class='card-header'>
                        $titulo
                    </div>
                    <div class='card-body row'>";
        }

        public function fechar_sessao(){
            echo "</div></div>";
        }

        public function criar_aviso($id, $mensagem){
            echo $this->criar_alerta("warning", $id, $mensagem);
        }

        private function criar_alerta($tipo, $id, $mensagem){
            return "<div id='$id-H' class='alert alert-$tipo text-muted aviso' role='alert'>
                        <small>$mensagem</small>
                    </div>";
        }

        public function fechar(){
            echo "</form>";
        }
    }