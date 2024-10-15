import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material';

import config from '../../json/config.json';
import Titulo from '../../components/titulo';
import projetos from '../../json/trabalhos.json';

// import '../manual/style.css';
import '../trabalhosAprovados/style.css';

import {
  CloudDownload as CloudDownloadIcon,
  YouTube as YouTubeIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

function Ensalamento() {
  const [expandido, setExpandido] = useState('Ensino Infantil');

  const expandir = (modulo) => (event, expandido) => {
    setExpandido(expandido ? modulo : false);
  };

  const getCodigoYoutube = (link = '') => {
    // https://youtu.be/{id}
    // https://www.youtube.com/watch?v={id}&feature=youtu.be&ab_channel=
    // https://www.youtube.com/watch?v={id}
    if (link.match('https://youtu.be/'))
      return link.replace('https://youtu.be/', '');

    const id = link.replace('https://www.youtube.com/watch?v=', '').split('&');
    return id[0];
  };

  const Projeto = ({ nome, colegio, video }) => (
    <div key={nome} className="projeto">
      <div className="projetoVideo">
        <a href={video} target="_BLANK">
          <img
            src={`https://img.youtube.com/vi/${getCodigoYoutube(
              video
            )}/hqdefault.jpg`}
            alt={nome}
          />
        </a>
      </div>
      <div className="projetoDescricao">
        <p>{nome}</p>
        <span>{colegio}</span>
      </div>
    </div>
  );

  const Ensalamento = ({ descricao, projetos }) => (
    <div key={descricao} className="ensalamento">
      <p>{descricao}</p>
      <ul>
        {projetos.map((projeto) => (
          <li key={projeto}>• {projeto}</li>
        ))}
      </ul>
    </div>
  );

  const Modulo = ({ modulo, orientacoes, projetos, ensalamentos }) => (
    <Accordion
      key={modulo}
      expanded={expandido === modulo}
      onChange={expandir(modulo)}
      className="projetosAccordion"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={modulo + '-content'}
        id={modulo + '-header'}
      >
        <p>{modulo}</p>
      </AccordionSummary>
      <AccordionDetails className="projetos">
        {!!orientacoes && (
          <div className="orientacoes">
            <p>{orientacoes}</p>
          </div>
        )}
        {expandido === modulo && ensalamentos.length > 0
          ? ensalamentos.map(Ensalamento)
          : projetos.filter(({ video }) => !!video).map(Projeto)}
      </AccordionDetails>
    </Accordion>
  );

  return (
    <div id="trabalhosAprovados">
      <Titulo texto="Ensalamento" descricao="Edição 2024" />

      <div className="conteudo">{projetos.map(Modulo)}</div>

      <div className="documento">
        <object data={config.ensalamento} type="application/pdf">
          <p>
            Seu navegador não possui suporte para exibir o arquivo nesta página,
            mas basta clicar no botão "Baixar" aqui em baixo, e então é só abrir
            o arquivo em seu dispositivo.
          </p>
        </object>
      </div>

      <a href={config.ensalamento} download="FECITEC-ENSALAMENTO">
        <Button
          variant="contained"
          color="success"
          startIcon={<CloudDownloadIcon />}
          size="large"
          style={{ marginBottom: '1rem' }}
        >
          Baixar documento
        </Button>
      </a>
    </div>
  );
}

export default Ensalamento;
