const mask = require('./mask');

describe('Mask credit card', function() {
  it('should mask input', function() {
    expect(mask('12345')).toBe('12345');
    expect(mask(true)).toBe('');
    expect(mask({})).toBe('');

    //valid scenarios
    expect(mask('6473896736723456')).toBe('6###########3456');
    expect(mask('6473-8967-3672-3456')).toBe('6###-####-####-3456');
    expect(mask('64rt45rt56yu7686y')).toBe('6#rt##rt##yu#686y');
    expect(mask('123456')).toBe('1#3456');
  });
});