import { testePalindromo } from 'utils/testPalindromo'

export function App() {
	console.log(testePalindromo('Anilin'))
	console.log(testePalindromo('Arar'))
	console.log(testePalindromo('Ess'))
	console.log(testePalindromo('Revive'))

	return <h1>Hello World</h1>
}
