const capitalize = require('./main');

test('should capitalize setences', () => {
	expect(capitalize('a short sentence')).toBe("A Short Sentence");
	expect(capitalize('a lazy fox')).toBe("A Lazy Fox");
	expect(capitalize('look, it is working!')).toBe('Look, It Is Working!');
});

test('should throw error on non-string params', () => {
	expect(() => {
    	capitalize({});
  	}).toThrow();

  	expect(() => {
    	capitalize([]);
  	}).toThrow();

  	expect(() => {
    	capitalize(123456);
  	}).toThrow();
});