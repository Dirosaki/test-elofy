import { Link } from 'react-router-dom'

import links from 'constants/links.json'

import { HeaderStyled, Nav } from './styles'

export function Header() {
	return (
		<HeaderStyled>
			<Nav>
				{links.map(({ path, title }) => (
					<li key={path}>
						<Link to={path}>{title}</Link>
					</li>
				))}
			</Nav>
		</HeaderStyled>
	)
}
