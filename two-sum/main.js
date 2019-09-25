
const twoSum = (arr, target) => {
	if(arr.length == 0) {
		return -1;
	}
	
	let first = arr[0];
	let diff = target-first;

	if(arr.slice(1, arr.length).indexOf(diff) == -1) {
		return twoSum(arr.splice(1), target);
	} else {
		return [first, arr[arr.indexOf(diff)]];
	}
};

module.exports = twoSum;