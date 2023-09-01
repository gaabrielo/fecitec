import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import config from '../../json/config.json';
import Titulo from '../../components/titulo';

import '../manual/style.css';

function Ensalamento() {
  return (
    <div id="manual">
      <Titulo texto="Ensalamento" descricao="Edição 2023" />

      <div className="documento">
        <object data={config.ensalamento} type="application/pdf">
          <p>
            Seu navegador não possui suporte para exibir o arquivo nesta página,
            mas basta clicar no botão "Baixar" aqui em baixo, e então é só abrir
            o arquivo em seu dispositivo.
          </p>
        </object>
      </div>

      <a href={config.manual} download="FECITEC-ORIENTACOES">
        <Button
          variant="contained"
          color="success"
          startIcon={<CloudDownloadIcon />}
          size="large"
        >
          Baixar documento
        </Button>
      </a>
    </div>
  );
}

export default Ensalamento;
