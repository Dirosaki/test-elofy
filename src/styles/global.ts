import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body, input, button, textarea {
		font-family: 'Montserrat', sans-serif;
		font-size: 1rem;
		line-height: 1.3;
	}
`
