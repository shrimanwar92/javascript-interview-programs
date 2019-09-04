// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
	if(typeof str != 'string') {
		throw new Error('not a string');
	}
	
	const strArr = str.split(" ");

	return strArr.map(str => {
		const first = str.slice(0,1).toUpperCase();
		const remaining = str.slice(1, str.length);

		return first + remaining;
	}).join(" ");
};

module.exports = capitalize;