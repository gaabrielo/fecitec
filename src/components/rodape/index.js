import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

import patrocinadores from '../../json/patrocinadores.json'

import './style.css'

function Rodape() {

    const Patrocinador = (item) => (
        <div key={item.nome}>
            <img src={item.imagem} alt={item.nome} />
        </div>
    )

    return (
        <footer id='rodape'>
            <div className='informacoes'>
                <div className='lista site'>
                    <div>
                        <h3>Endereço</h3>
                        <p>
                            Rua Pioneiro, 2153<br />
                            Jardim Dallas<br />
                            Palotina-PR
                        </p>
                    </div>

                    <div className='fecitec'>
                        <h3>FECITEC</h3>
                        <p>
                            É uma feira de ciência e tecnologia com enfoque em inovação. Ela acontece anualmente desde 2011 na cidade de Palotina-PR. O evento é organizado por professores da Universidade Federal do Paraná.
                        </p>
                    </div>
                </div>

                <div className='lista sociais'>
                    <a href='https://www.facebook.com/fecitecpalotina/' target='_blank' rel='noreferrer'>
                        <FacebookIcon className='social' />
                    </a>
                    <a href='https://www.youtube.com/channel/UCedhLDlFf5lJ4aRUu_4fKGw' target='_blank' rel='noreferrer'>
                        <YouTubeIcon className='social' sx={{ marginLeft: '15px' }} />
                    </a>
                    <a href='https://www.instagram.com/fecitec.palotina/' target='_blank' rel='noreferrer'>
                        <InstagramIcon className='social' sx={{ marginLeft: '15px' }} />
                    </a>
                </div>
            </div>
            <div className='patrocinadores'>
                { patrocinadores.map(Patrocinador) }
            </div>
            <div className='creditos'>
                <a href='https://github.com/xfelipesobral/fecitec' target='_blank' rel='noreferrer'>FECITEC © 2022</a>
            </div>
        </footer>
    )
}

export default Rodape