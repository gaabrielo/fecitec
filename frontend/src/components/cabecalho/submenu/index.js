import React, { useState } from 'react'

import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'

function Submenu({ navegar, lista, info }) {
    const [anchor, setAnchor] = useState()
    const menu = Boolean(anchor)

    const toggle = (e) => {
        setAnchor(menu ? null : e.currentTarget)
    }

    return (
        <>
            <Button
                id={info.id}
                color='primary'
                className='botao'
                aria-controls={info.id}
                aria-haspopup='true'
                aria-expanded={menu}
                onClick={toggle}
            >
                {info.descricao}
            </Button>
            <Menu
                id={info.id}
                anchorEl={anchor}
                open={menu}
                onClose={toggle}
            >
                {
                    lista.map((item, i) => (
                        <MenuItem key={i} className='cabecalhoSubmenu' onClick={() => navegar(item.link)}>
                            {item.descricao}
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    )
}

export default Submenu