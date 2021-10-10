import React, { useState } from 'react'

import config from '../../json/config.json'
import anais from '../../json/anais.json'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

import './style.css'

function Cabecalho() {
    const [anchorAnais, setAnchorAnais] = useState(null)
    const menuAnais = Boolean(anchorAnais);

    const toggleAnais = (e) => {
        setAnchorAnais(menuAnais ? null : e.currentTarget)
    }

    const navegarAnais = (objeto) => {
        toggleAnais()
        console.log(objeto)
    }

    return (
        <div id='cabecalho'>
            <AppBar position='fixed' className='barra'>
                <div className='titulo'>
                    <h1>{config.titulo}</h1>
                </div>
                <Toolbar className='corpo'>
                    <div className='btnMenu'>
                        <IconButton edge='start' aria-label='menu'>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className='menu'>
                        <Button color='primary'>Início</Button>
                        <Button color='success'>Trabalhos Aprovados</Button>
                        
                        <Button color='primary'>Galeria</Button>
                        <Button color='primary'>Manual</Button>

                        <Button 
                            id='submenu-anais'
                            color='primary' 
                            aria-controls='submenu-anais' 
                            aria-haspopup='true' 
                            aria-expanded={menuAnais}
                            onClick={toggleAnais}
                        >
                            Anais
                        </Button>

                        <Button color='primary'>Contato</Button>

                        <Menu
                            id='submenu-anais'
                            anchorEl={anchorAnais}
                            open={menuAnais}
                            onClose={toggleAnais}
                        >
                            {
                                anais.map(item => (
                                    <MenuItem key={item.ano} onClick={() => navegarAnais(item)}>{item.ano}</MenuItem>
                                ))
                            }
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Cabecalho