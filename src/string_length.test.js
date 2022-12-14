const stringLength = require('./stringLength')

test('Length of testing to equal to 7', () => {
    expect(stringLength('testing')).toBe(7);
})


test('Length of string error', ()=> {
    expect( ()=> stringLength('')).toThrow();
});

test('Length of string error', ()=> {
    expect( ()=> stringLength('string length greater than 10')).toThrow();
});