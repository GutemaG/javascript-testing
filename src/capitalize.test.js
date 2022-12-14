const capitalize = require("./capitalize");


test('Capitalize what to What', () => {
    expect(capitalize('what')).toBe('What');
});