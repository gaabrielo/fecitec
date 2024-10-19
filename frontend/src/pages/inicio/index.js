import React from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import './style.css';

import cartaz from '../../assets/imagens/cartaz/2024.svg';

import imgBiologia from '../../assets/imagens/areas/dna.svg';
import imgFisica from '../../assets/imagens/areas/physics.svg';
import imgQuimica from '../../assets/imagens/areas/chemistry.svg';
import imgMatematica from '../../assets/imagens/areas/geometry.svg';
import imgEmpreendedorismo from '../../assets/imagens/areas/target.svg';
import imgCienciasHumanas from '../../assets/imagens/areas/think.svg';
import imgInovacao from '../../assets/imagens/areas/rocket.png';
import imgSustentabilidade from '../../assets/imagens/areas/sustentabilidade.png';
import imgFoodSafety from '../../assets/imagens/areas/food-safety.svg';

import config from '../../json/config.json';
import Titulo from '../../components/titulo';
import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import { ArrowRight, ArrowRightAlt } from '@mui/icons-material';

const Conteudo = ({ imagem, descricao }) => (
  <div className="materiasItem">
    <img src={imagem} alt={descricao} />
    {!!descricao && (
      <p className="max-sm:text-sm text-center pt-2">{descricao}</p>
    )}
  </div>
);

function Inicio() {
  return (
    <div id="inicio">
      <div className="descricao">
        <div className="relative w-full xl:max-w-[40%] sm:max-w-[70%] max-w-[100%] flex max-sm:flex-col items-center justify-center md:gap-[8%] sm:gap-[10%]">
          <img
            src="imagens/fecitec/mascote.png"
            alt="Fecitequinha"
            className="z-10 w-full md:max-w-[30%] max-w-[25%]"
          />

          <div className="flex flex-col sm:gap-7 gap-1 mb-2 z-10">
            <h2 className="text-2xl max-w-40 font-normal text-gray-50 max-md:text-base">
              Mais informações sobre a 15ª FECITEC (edição 2025): aguarde!
            </h2>

            {/* <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  window.location.href = '/ensalamento';
                }}
                className="w-full rounded-full bg-gray-50 text-slate-700 hover:text-slate-950 py-2 px-4 flex items-center justify-center gap-4 cursor-pointer transition-all"
              >
                Ver ensalamento <ArrowRightAlt />
              </button>
            </div> */}
          </div>

          <img
            src="/imagens/fecitec/fundo.svg"
            alt="Fecitec fundo"
            className="w-full h-auto absolute sm:top-1/2 left-0 right-0 z-0 bottom-0 sm:-translate-y-1/2 max-sm:hidden"
          />

          <img
            src="/imagens/fecitec/fundo2.svg"
            alt="Fecitec fundo"
            className="w-full h-auto absolute sm:hidden left-0 right-0 z-0 bottom-0"
          />
        </div>
      </div>

      <div className="novoConteudo">
        <section className="novaTematica">
          <Conteudo
            // descricao="Alimentos e segurança alimentar"
            imagem={imgFoodSafety}
          />

          <div className="novaTematicaTexto">
            <h3>Nova linha temática:</h3>
            <h1 className="font-bold">Alimentos e segurança alimentar</h1>
          </div>
        </section>

        <div className="apoio">
          <div className="borda"></div>

          <section>
            <span>Apoio:</span>
            <img
              src="/imagens/patrocinadores/brafp2.svg"
              alt="BRAFP"
              className="novoPatrocinadorImg"
            />
          </section>
        </div>
      </div>

      {/* <div id="manual">
        <Titulo texto="Ensalamento" descricao="Edição 2023" />

        <div className="documento">
          <object data={config.ensalamento} type="application/pdf">
            <p>
              Seu navegador não possui suporte para exibir o arquivo nesta
              página, mas basta clicar no botão "Baixar" aqui em baixo, e então
              é só abrir o arquivo em seu dispositivo.
            </p>
          </object>
        </div>

        <a href={config.ensalamento} download="FECITEC-ENSALAMENTO">
          <Button
            variant="contained"
            color="success"
            startIcon={<CloudDownloadIcon />}
            size="large"
          >
            Baixar documento
          </Button>
        </a>
      </div> */}

      <div className="apresentacao">
        <div className="conteudo">
          <div className="info">
            <div className="cartaz">
              <img src={cartaz} alt="Cartaz de apresentação Fecitec" />
            </div>
            <div className="texto">
              <h2>Apresentação</h2>
              <p>
                A Feira de Ciência e Tecnologia de Palotina (FECITEC) é um
                evento que busca incentivar a produção científica nas escolas
                através da apresentação de projetos e experimentos.É um projeto
                de extensão proposto pela Universidade Federal do Paraná (UFPR)
                Setor Palotina, financiado pelo Conselho Nacional de
                Desenvolvimento Científico e Tecnológico (CNPq) e tem como
                principais parceiros: Secretaria Municipal de Educação e Cultura
                de Palotina, C.Vale - Cooperativa Agroindustrial, Jornal Folha
                de Palotina, Jornal Folha da Terra, Pró-Reitoria de Extensão e
                Cultura da UFPR (PROEC), Feira Brasileira de Ciências e
                Engenharia (FEBRACE) e Associação Comercial de Palotina (ACIPA).
                O objetivo da Feira é incentivar o trabalho dos alunos a fim de
                colocar as suas ideias criativas ou inovadoras em prática,
                proporcionando a participação aos vencedores em outras Feiras
                nacionais ou internacionais ou despertando um interesse maior
                pela pesquisa científica através das bolsas de Iniciação
                Científica Júnior para os alunos destaques.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="materias">
        <div className="divisor">
          <Divider>
            <Chip
              label="Conteúdos da feira"
              sx={{
                fontSize: '1rem',
                padding: 4,
                borderRadius: '9999px',
                backgroundColor: '#09090b',
                color: 'white',
              }}
            />
          </Divider>
        </div>
        <div
          // className="lista"
          className="grid-container"
        >
          <Conteudo descricao="Biologia" imagem={imgBiologia} />
          <Conteudo descricao="Física" imagem={imgFisica} />
          <Conteudo descricao="Química" imagem={imgQuimica} />
          <Conteudo descricao="Matemática" imagem={imgMatematica} />
          <Conteudo
            descricao="Empreendendorismo"
            imagem={imgEmpreendedorismo}
          />
          <Conteudo descricao="Ciências humanas" imagem={imgCienciasHumanas} />
          <Conteudo descricao="Inovação" imagem={imgInovacao} />
          <Conteudo descricao="Sustentabilidade" imagem={imgSustentabilidade} />
          <Conteudo
            descricao="Alimentos e segurança alimentar"
            imagem={imgFoodSafety}
          />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
