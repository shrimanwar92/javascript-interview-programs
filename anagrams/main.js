// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


const isAnagram = (str1, str2) => {
	const string1 = str1.replace(/[^a-zA-Z0-0]/g, "").split("").sort().join("").toLowerCase(); 
	const string2 = str2.replace(/[^a-zA-Z0-9]/g, "").split("").sort().join("").toLowerCase();

	console.log(string1, string2);

	if(string1 === string2) {
		return true;
	} 

	return false;
};

module.exports = isAnagram;