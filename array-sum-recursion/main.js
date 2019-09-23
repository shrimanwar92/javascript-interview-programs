// --- Directions
// Given an array find the sum of all elelemts in the array
// --- Examples
// arrSum([1,2,3,4,5,1]) --> 16

let sum = 0;

function arrSum(arr) {
	if(arr.length == 0) {
		return sum;
	}

	sum += arr[0] + arrSum(arr.splice(1));
	return sum;
}

module.exports = arrSum;