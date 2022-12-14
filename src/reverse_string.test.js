const reverseString = require('./reverseString')

test('reverse testing to equal to gnitset', () => {
    expect(reverseString('testing')).toBe('gnitset');
})

test('reverse testing2 not  equal to gnitset2', () => {
    expect(reverseString('testing')).not.toMatch('gnitset2');
})

