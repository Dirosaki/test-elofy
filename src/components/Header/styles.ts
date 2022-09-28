import styled from 'styled-components'

export const HeaderStyled = styled.header`
	height: 4.375rem;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Nav = styled.ul`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	li {
		list-style: none;

		a {
			text-decoration: none;
			color: #000;
			font-size: 1.25rem;
			font-weight: 500;
		}
	}
`
