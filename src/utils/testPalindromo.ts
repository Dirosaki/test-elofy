/* eslint-disable no-plusplus */
export function testePalindromo(text: string) {
	const formattedText = text.toLowerCase()

	let value: string = ''

	for (let i = formattedText.length - 1; i >= 0; i--) {
		value += formattedText[i]
	}

	return value === formattedText
}
