/* eslint-disable no-console */
import { BrowserRouter } from 'react-router-dom'

import { MainRoutes } from 'Router'

import { testePalindromo } from 'utils/testPalindromo'

import { GlobalStyle } from 'styles/global'

export function App() {
	console.log(testePalindromo('Anilin'))
	console.log(testePalindromo('Arar'))
	console.log(testePalindromo('Ess'))
	console.log(testePalindromo('Revive'))

	return (
		<BrowserRouter>
			<MainRoutes />
			<GlobalStyle />
		</BrowserRouter>
	)
}
