// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const findOccurances = (acc, val) => {
	if(acc.hasOwnProperty(val)) {
		acc[val] += 1;
	} else {
		acc[val] = 1;
	}

	return acc;
};

function maxChar(str) {
	let result = str.split("").reduce(findOccurances, {});
	let max = 0;
	let maxChar = '';

	for (let key in result) {
		if(result[key] > max) {
			max = result[key];
			maxChar = key;
		}
	}

	return maxChar;
}

module.exports = maxChar;