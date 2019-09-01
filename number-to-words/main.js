const dictionary = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
	20: 'twenty',
	30: 'thirty',
	40: 'fourty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety',
	100: 'one hundred' 
};

function numToWords(str) {
	const s = String(str);
	let result;

	switch(typeof s) {
		case 'number':
			result = processInput(String(s));
		break;
		case 'string':
			result = processInput(s);
		break;

		default:
			return false;
	}

	return result;

}

function processInput(w) {
	const two = (w) => {
		if(dictionary.hasOwnProperty(w)) {
			return dictionary[w];
		} else {
			const last = w % 10;
			const first = w - last;

			return `${dictionary[first]} ${dictionary[last]}`;
		}
	};

	const three = (w3) => {
		const last2 = w % 100;

		if(last2 == 0) {
			return `${dictionary[w3.slice(0,1)]} hundred`;
		} else {
			return `${dictionary[w3.slice(0,1)]} hundred ${two(String(last2))}`;
		}
	};

	const four = (w) => {
		const last3 = w % 1000;

		if(last3 == 0) {
			return `${dictionary[w.slice(0,1)]} thousand`;
		} else {
			return `${dictionary[w.slice(0,1)]} thousand ${three(String(last3))}`;
		}
	};

	const five = (w) => {
		const last3 = w % 1000;
		if(last3 == 0) {
			return `${two(w.slice(0,2))} thousand`;
		} else {
			return `${two(w.slice(0,2))} thousand ${three(String(last3))}`;
		}
	};

	const six = (w) => {
		let last5 = w % 100000;

		if(last5 == 0) {
			return `${dictionary[w.slice(0,1)]} lakhs`;
		} else {
			return `${two(w.slice(0,1))} lakh ${five(String(last5))}`;
		}
	};

	const seven = (w) => {
		let last5 = w % 100000;

		if(last5 == 0) {
			return `${two(w.slice(0,2))} lakhs`;
		} else {
			return `${two(w.slice(0,2))} lakhs ${five(String(last5))}`;
		}
	};
	
	switch(w.length) {
		case 1:
			if(dictionary.hasOwnProperty(w)) {
				return dictionary[w];
			}
		break;
		case 2:
			return two(w);
		break;
		case 3:
			return three(w);
		break;
		case 4:
			return four(w);
		break;
		case 5:
			return five(w);
		break;
		case 6:
			return six(w);
		break;
		case 7:
			return seven(w);
		break;
	}
}

module.exports = numToWords;