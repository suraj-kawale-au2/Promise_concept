const functions = require('./function');

test('should add 2+2 = 4 ', () => {
    expect(functions.add(2,2)).toBe(4);
});
