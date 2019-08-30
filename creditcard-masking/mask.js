function mask(str) {
	if(str.length <= 5) {
		return str;
	}

	if(!str || typeof str != 'string') {
		return '';
	}

	const first = str.slice(0, 1);
	const lastFour = str.slice(str.length-4, str.length);
	let result = '';

	for(let i=1; i<str.length-4; i++) {
		let char = str[i];

		if(isNaN(char) || char == '-') {
			result += char;
		} else {
			result += '#';
		}
	}

	return first + result + lastFour;
}

module.exports = mask;