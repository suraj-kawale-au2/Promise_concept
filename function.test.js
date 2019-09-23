const functions = require('./function');

test('should add 2+2 = 4 ', () => {
    expect(functions.add(2,2)).toBe(4);
});

//Promise
test('User fetched name should be',()=>{
    sums = [576,21657,21014,8220,9368,508,93,1249,106,715,633,2513,1105,89]
    expect.assertions(2);
    return functions.fetchSum().then(data=>{
        expect(sums).toContain(data)
    })
})