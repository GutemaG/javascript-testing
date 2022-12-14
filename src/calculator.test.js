const { add, subtract, multiply, divide } = require("./calculator");

describe('Testing my calculator', () => {
    test('two plus three is five', () => {
        expect(add(2, 3)).toBe(5)
    });

    test('two minus three is minus 1', () => {
        expect(subtract(2, 3)).toBe(-1)
    });

    test('two times three is 6', () => {
        expect(multiply(2, 3)).toBe(6)
    });

    test('two divide by two is 1', () => {
        expect(divide(2, 2)).toBe(1)
    });

    test('two divide by zero throw error', () => {
        expect(()=> divide(2,0)).toThrow();
    });
});