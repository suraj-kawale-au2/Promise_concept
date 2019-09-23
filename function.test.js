const functions = require('./function');

test('should add 2+2 = 4 ', () => {
    expect(functions.add(2,2)).toBe(4);
});

//Promise
test('User fetched name should be',()=>{
    expect.assertions(1);
    return functions.fetchUser().then(data=>{
        expect(data.name).toEqual('')
    })
})