import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from 'layout/DefaultLayout'

import { Contato } from 'pages/Contato'
import { Home } from 'pages/Home'
import { Sobre } from 'pages/Sobre'

export function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/sobre" element={<Sobre />} />
			</Route>
		</Routes>
	)
}
