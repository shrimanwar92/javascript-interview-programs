const isAnagram = require('./main');

test('should test anagrams', () => {
	expect(isAnagram('rail safety', 'fairy tales')).toBe(true);
	expect(isAnagram('RAIL! SAFETY!', 'fairy tales')).toBe(true);
	expect(isAnagram('Hi there', 'Bye there')).toBe(false);
});