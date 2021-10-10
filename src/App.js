import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Routes from './routes'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'

import './css/master.css'

const theme = createTheme({
	palette: {
		primary: {
			light: '#4f5b62',
			main: '#263238',
			dark: '#000a12',
			contrastText: '#fff',
		}
	}
})

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Cabecalho />
				<Routes />
				<Rodape />
			</ThemeProvider>
		</div>
	);
}

export default App;
