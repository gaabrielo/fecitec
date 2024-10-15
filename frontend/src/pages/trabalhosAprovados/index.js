import React from 'react';

import { Button } from '@mui/material';

import { CloudDownload as CloudDownloadIcon } from '@mui/icons-material';

import Titulo from '../../components/titulo';
import config from '../../json/config.json';

import './style.css';

function TrabalhosAprovados() {
  return (
    <div id="trabalhosAprovados">
      <Titulo
        texto="👩🏼‍🔬👨🏾‍🔬 Trabalhos Aprovados"
        descricao="Projetos aprovados para a Fecitec"
      />

      <div className="documento">
        <object data={config.aprovados} type="application/pdf">
          <p>
            Seu navegador não possui suporte para exibir o arquivo nesta página,
            mas basta clicar no botão "Baixar" aqui em baixo, e então é só abrir
            o arquivo em seu dispositivo.
          </p>
        </object>
      </div>

      <div className="trabalhosBotoes">
        <a href={config.aprovados} download="FECITEC-APROVADOS">
          <Button
            variant="contained"
            color="success"
            startIcon={<CloudDownloadIcon />}
            size="large"
          >
            projetos aprovados
          </Button>
        </a>
        <a href={config.ensalamento} download="FECITEC-ENSALAMENTO">
          <Button
            variant="contained"
            color="success"
            startIcon={<CloudDownloadIcon />}
            size="large"
            style={{ marginLeft: '10px' }}
          >
            ensalamento
          </Button>
        </a>
      </div>
    </div>
  );
}

export default TrabalhosAprovados;
