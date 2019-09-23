beforeEach(() => {
  jest.resetModules();
});

test('should give sum of all elements in the array', () => {
  const arrSum = require('./main');
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = arrSum(arr);

  expect(sum).toEqual(55);
});

test('should give sum of empty array', () => {
  const arrSum = require('./main');
  const arr = [];
  const sum = arrSum(arr);

  expect(sum).toEqual(0);
});

test('should give sum of negative array', () => {
  const arrSum = require('./main');
  const arr = [1,2,3,4,5,-1,-2,-3,-4];
  const sum = arrSum(arr);

  expect(sum).toEqual(5);
});
