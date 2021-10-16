import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Titulo from '../../components/titulo'
import galeria from '../../json/galeria.json'

import './style.css'

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])

function Galeria() {

    return (
        <div id='galeria'>
            <Titulo descricao='Galeria de fotos das edições anteriores da Fecitec' texto='Galeria' />

            <Swiper 
                navigation={true} 
                pagination={true}
                keyboard={true} 
                autoplay={true}
                loop={true}
                className='slide'
            >
                {
                    galeria.map((imagem, i) => (
                        <SwiperSlide key={i}>
                            <img src={imagem} alt={`Imagem ${i} do slide`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <ul>
                <a href='https://drive.google.com/drive/folders/1vb79T5ivOpR-mgABNUEHn6JNp-3T3JpR?usp=sharing' target='_blank' rel='noreferrer'><li>Fecitec 2019</li></a>
                <a href='https://www.facebook.com/pg/Fecitec-600812453274934/photos/?ref=page_internal' target='_blank' rel='noreferrer'><li>Facebook</li></a>
                <a href='https://www.flickr.com/photos/135134963@N04/albums' target='_blank' rel='noreferrer'><li>Flickr</li></a>
            </ul>
        </div>
    )
}

export default Galeria