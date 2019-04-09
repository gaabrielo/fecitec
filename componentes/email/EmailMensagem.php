<?php

    /*define(CABECALHO_FECITEC, "<h1>SUCESSO!</h1><h3>Inscrição realizada para a 9ª Fecitec.</h3>");
    define(FOOTER_FECITEC, "<a>9ª <strong>FECITEC</strong></a>");*/

    class EmailMensagem{
        private $mensagem = "";
        
        public function __construct($cabecalho){
            $this->mensagem .= "<table style='border: 0; width: 100%; text-align: center; font-family: Arial'>
                                    <tr>
                                        <td style='background: #a71647; color: #fff; padding: 5%'>
                                            $cabecalho
                                        </td>
                                    </tr>";
        }

        private function componente($titulo, $mensagem){
            return              "<div style='background: #dbdbdb; margin: 3px;'>
                                    <h3 style='background: #a71647; color: #fff; padding: 10px 3px'>$titulo</h3>
                                    <div style='text-align: justify; color: #000; margin: 5%'>
                                        $mensagem
                                    </div>
                                    <br>
                                </div>";
        }

        // $componentes -> [[titulo, mensagem]...]
        public function corpo($componentes){
            $this->mensagem .= "<tr>
                                    <td style='background: #f2efef;'>";

            foreach($componentes as $componente){
                $this->mensagem .= $this->componente($componente[0], $componente[1]);
            }
            
            $this->mensagem .= "    </td>
                                </tr>";
        }

        public function final($mensagem){
            $this->mensagem .= "<tr>
                                    <td style='background: #262626; color: #fff; padding: 2%;'>
                                        $mensagem
                                    </td>
                                </tr>

                            </table>";
        }

        public function montar(){
            return $this->mensagem;
        }
    }