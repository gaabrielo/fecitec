import React from 'react'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

import './style.css'

import cartaz from '../../assets/imagens/cartaz/2022.svg'

import imgBiologia from '../../assets/imagens/areas/dna.svg'
import imgFisica from '../../assets/imagens/areas/physics.svg'
import imgQuimica from '../../assets/imagens/areas/chemistry.svg'
import imgMatematica from '../../assets/imagens/areas/geometry.svg'
import imgEmpreendedorismo from '../../assets/imagens/areas/target.svg'
import imgCienciasHumanas from '../../assets/imagens/areas/think.svg'
import imgInovacao from '../../assets/imagens/areas/rocket.png'

const Conteudo = ({ imagem, descricao }) => (
    <div className='materiasItem'>
        <img src={imagem} alt={descricao} />
        <p>{descricao}</p>
    </div>
)

function Inicio() {

    return (
        <div id='inicio'>
            <div className='descricao'>
                <h2>17 a 24 de outubro - Virtual</h2>
                <h2>24 de outubro - Presencial</h2>
                <a href='/' className='btnBranco'>INSCRIÇÕES DE 01/07 À 28/08</a>
            </div>

            <div className='apresentacao'>
                <div className='conteudo'>
                    {/* <div>
                        <div className='g-ytsubscribe' data-channelid='UCedhLDlFf5lJ4aRUu_4fKGw' data-layout='full'
                            data-count='hidden'></div>
                        <iframe width='100%' height='600px' src='https://www.youtube.com/embed/u5CNOD34DvY' frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen title='Canal do YouTube'></iframe>
                    </div> */}

                    <div className='info'>
                        <div className='cartaz'>
                            <img src={cartaz} alt='Cartaz de apresentação Fecitec' />
                        </div>
                        <div className='texto'>
                            <h2>Apresentação</h2>
                            <p>
                                A Feira de Ciência e Tecnologia de Palotina (FECITEC) é um evento que busca incentivar a
                                produção científica nas escolas através da apresentação de projetos e experimentos.É um projeto
                                de extensão proposto pela Universidade Federal do Paraná (UFPR) Setor Palotina, financiado pelo
                                Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) e tem como principais
                                parceiros: Secretaria Municipal de Educação e Cultura de Palotina, C.Vale - Cooperativa
                                Agroindustrial, Jornal Folha de Palotina, Jornal Folha da Terra, Pró-Reitoria de Extensão e
                                Cultura da UFPR (PROEC), Feira Brasileira de Ciências e Engenharia (FEBRACE) e Associação
                                Comercial de Palotina (ACIPA). O objetivo da Feira é incentivar o trabalho dos alunos a fim de
                                colocar as suas ideias criativas ou inovadoras em prática, proporcionando a participação aos
                                vencedores em outras Feiras nacionais ou internacionais ou despertando um interesse maior pela
                                pesquisa científica através das bolsas de Iniciação Científica Júnior para os alunos destaques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='materias'>
                <div className='divisor'>
                    <Divider>
                        <Chip label='Conteúdos da feira' sx={{ fontSize: '1.2rem', padding: '25px 25px' }} />
                    </Divider>
                </div>
                <div className='lista'>
                    <Conteudo descricao='Biologia' imagem={imgBiologia} />
                    <Conteudo descricao='Física' imagem={imgFisica} />
                    <Conteudo descricao='Química' imagem={imgQuimica} />
                    <Conteudo descricao='Matemática' imagem={imgMatematica} />
                    <Conteudo descricao='Empreendedorismo' imagem={imgEmpreendedorismo} />
                    <Conteudo descricao='Ciências humanas' imagem={imgCienciasHumanas} />
                    <Conteudo descricao='Inovação' imagem={imgInovacao} />
                </div>
            </div>
        </div>
    )
}

export default Inicio