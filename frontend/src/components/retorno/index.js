import React from 'react'
import Lottie from 'react-lottie'
import { Dialog } from '@mui/material'

import lottieErro from '../../assets/lottie/82559-error.json'
import lottieSucesso from '../../assets/lottie/96237-success.json'

import './index.css'

const popupBase = { visivel: false, sucesso: false, mensagem: '' }

function Retorno({ popup, estado }) {

    return (
        <Dialog
            open={popup.visivel}
            onClose={() => {
                estado({ ...popupBase, sucesso: popup.sucesso })
            }}
        >
            <div id='retorno'>
                <Lottie
                    options={{
                        loop: !popup.sucesso,
                        autoplay: true,
                        animationData: popup.sucesso ? lottieSucesso : lottieErro,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        }
                    }}
                    width='100%'
                />
                <p>{popup.mensagem}</p>
            </div>
        </Dialog>
    )
}

export { Retorno, popupBase }