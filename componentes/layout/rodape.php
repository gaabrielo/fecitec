<?php

    function criar_rodape($extra){
        echo "  <div class='rodapeC'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-sm-3'>
                                <h6><strong>Endereço</strong></h6>
                                <p class='footerText'>
                                    Rua Pioneiro, 2153<br>
                                    Jardim Dallas<br>
                                    Palotina-PR<br>
                                </p>
                            </div>
                            <div class='col-sm-9'>
                                <h6><strong>FECITEC</strong></h6>
                                <p style='text-align:justify' class='footerText'>É uma feira de ciência e tecnologia com enfoque em inovação. Ela acontece anualmente desde 2011 na cidade de Palotina-PR. O evento é organizado por professores da Universidade Federal do Paraná.</p>
                            </div>
                        </div>
                        <div style='text-align: center'>
                            <a href='https://www.facebook.com/Fecitec-600812453274934/' target='_BLANK'><i class='fab fa-facebook-f icone'></i></a>
                            <!--<a href='#'><i class='fab fa-github icone'></i></a>-->
                        </div>
                        
                    </div>
                </div>

                <div id='patrocinadores'>
                    <div class='container'>
                        <div class='row align-items-center' style='text-align: center'>
                            <div class='col'>
                                <img src='arquivos/imagens/patrocinadores/acipa.png' class='pt-image'/>
                            </div>
                            <div class='col'>
                                <img src='arquivos/imagens/patrocinadores/biopark.jpg' class='pt-image'/>
                            </div>
                            <div class='col'>
                                <img src='arquivos/imagens/patrocinadores/cnpq.jpg' class='pt-image'/>
                            </div>
                            <div class='col'>
                                <img src='arquivos/imagens/patrocinadores/logo_upfr_palotina.png' class='pt-image'/>
                            </div>
                            <div class='col'>
                                <img src='arquivos/imagens/patrocinadores/prefeitura.png' class='pt-image' style='width: 80px'/>
                            </div>
                            <div class='col'>
                                <img src='arquivos/imagens/patrocinadores/cvale.jpg' class='pt-image'/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class='rodapeR'>
                    <div class='container'>
                        <h6 style='text-align: center;'><strong>FECITEC</strong> © 2019</h6>
                    </div>
                </div>
        
                <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script>
                <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>
                $extra
            </body>
        </html>";
    }