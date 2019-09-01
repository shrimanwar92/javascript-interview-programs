const numToWords = require('./main');

test('should display single digit words', function() {
	expect(numToWords(3)).toBe('three');
});

test('should display double digit words', function() {
	expect(numToWords(30)).toBe('thirty');
	expect(numToWords(23)).toBe('twenty three');
	expect(numToWords(99)).toBe('ninety nine');
});

test('should display three digit words', function() {
	expect(numToWords(300)).toBe('three hundred');
	expect(numToWords(323)).toBe('three hundred twenty three');
	expect(numToWords(999)).toBe('nine hundred ninety nine');
});

test('should display 4 digit words', function() {
	expect(numToWords(3000)).toBe('three thousand');
	expect(numToWords(1323)).toBe('one thousand three hundred twenty three');
});

test('should display 5 digit words', function() {
	expect(numToWords(55000)).toBe('fifty five thousand');
	expect(numToWords(11323)).toBe('eleven thousand three hundred twenty three');
});

test('should display 5 digit words', function() {
	expect(numToWords(600000)).toBe('six lakhs');
	expect(numToWords(111323)).toBe('one lakh eleven thousand three hundred twenty three');
});

test('should display 7 digit words', function() {
	expect(numToWords(6500000)).toBe('sixty five lakhs');
	expect(numToWords(7111323)).toBe('seventy one lakhs eleven thousand three hundred twenty three');
});