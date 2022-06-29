import React, { useEffect, useState } from 'react'

import config from '../../json/config.json'
import anais from '../../json/anais.json'
import menu from '../../json/menu.json'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Grow from '@mui/material/Grow'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'

import logo from '../../assets/imagens/fecitec/logo.svg'

import Submenu from './submenu'

import './style.css'

function anaisToSubmenu() {
    const lista = []

    anais.forEach(({ ano }) => {
        lista.push({
            descricao: ano,
            link: '/anais/' + ano
        })
    })

    return lista
}



function Cabecalho() {
    const [listaMenu, setListaMenu] = useState([])
    const [posicao, setPosicao] = useState(0)
    const [drawer, setDrawer] = useState(false)

    const topo = 100

    useEffect(() => {
        window.addEventListener('scroll', scroll, { passive: true })

        const listaMenu = menu

        // Formata anais para o padrão dos submenus
        const anaisItem = listaMenu.find(item => item?.submenu === '{anais}')
        if (anaisItem) anaisItem.submenu = anaisToSubmenu()

        setListaMenu(listaMenu)

        return () => {
            window.removeEventListener('scroll', scroll)
        }
    }, [])

    const scroll = () => {
        const y = window.pageYOffset
        setPosicao(y)
    }

    const navegar = (link) => {
        window.location.href = link
    }

    const MenuItem = ({ id, descricao, link, submenu }) => {
        if (submenu) {
            return (
                <Submenu key={id+descricao} navegar={navegar} lista={submenu} info={{ id, descricao }} />
            )
        }

        return (
            <>
                <Button
                    color='primary'
                    className='botao'
                    onClick={() => navegar(link)}
                    key={id+descricao}
                >
                    {descricao}
                </Button>
            </>
        )
    }

    const Menu = ({ tipo }) => (
        <div className={tipo}>
            {
                tipo === 'cabecalhoDrawer' &&
                <div>
                    <img src={logo} alt={config.titulo} />
                    <Divider className='divisor' />
                </div>
            }

            {
                listaMenu.map(MenuItem)
            }
        </div>
    )

    return (
        <div id='cabecalho'>
            <Drawer anchor='left' open={drawer} onClose={() => setDrawer(false)}>
                <Menu tipo='cabecalhoDrawer' />
            </Drawer>
            <AppBar position='fixed' className={posicao > topo ? 'barraEscura' : 'barra'}>
                <Grow in={posicao > topo && !drawer}>
                    <div className='titulo'>
                        <img src={logo} alt={config.titulo} />
                    </div>
                </Grow>

                <Toolbar className='corpo'>
                    <div className='btnMenu'>
                        <IconButton edge='start' aria-label='menu' onClick={() => setDrawer(true)}>
                            <MenuIcon style={{ color: posicao > topo ? '#000' : '#fff' }} />
                        </IconButton>
                    </div>
                    <Menu tipo='menu' />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Cabecalho