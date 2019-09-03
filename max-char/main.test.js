const maxChar = require('./main');

test('should retun max occurance of char', () => {
	expect(maxChar('abcccccccd')).toBe('c');
});

test('should retun max occurance of char', () => {
	expect(maxChar('apple 1231111')).toBe('1');
});