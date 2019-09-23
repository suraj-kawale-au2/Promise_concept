const fetch = require('node-fetch');
const swapi = require('./Promise');

it('calls swapi api sucessfully',()=>{
    expect.assertions(2);
    return swapi.getPeople(fetch).then(data =>{
        expect(data.count).toEqual(87);
        expect(data.height).toEqual(172);
        expect(data.species).toEqual(1);
        expect(data.vehicles).toEqual(2);
        expect(data.starships).toEqual(2);
    })
})