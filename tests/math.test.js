const math = require('../math');

describe('math.add', () => {
    test('2 + 3 = 5', () => {
        expect(math.add(2, 3)).toBe(5);
    });
    test('0 + 0 = 0', () => {
        expect(math.add(0, 0)).toBe(0);
    });
    test('-1 + 1 = 0', () => {
        expect(math.add(-1, 1)).toBe(0);
    });
});

describe('math.subtract', () => {
    test('5 - 3 = 2', () => {
        expect(math.subtract(5, 3)).toBe(2);
    });
    test('0 - 0 = 0', () => {
        expect(math.subtract(0, 0)).toBe(0);
    });
    test('3 - 5 = -2', () => {
        expect(math.subtract(3, 5)).toBe(-2);
    });
});

describe('math.multiply', () => {
    test('2 * 3 = 6', () => {
        expect(math.multiply(2, 3)).toBe(6);
    });
    test('0 * 5 = 0', () => {
        expect(math.multiply(0, 5)).toBe(0);
    });
    test('-2 * 3 = -6', () => {
        expect(math.multiply(-2, 3)).toBe(-6);
    });
});

describe('math.divide', () => {
    test('6 / 3 = 2', () => {
        expect(math.divide(6, 3)).toBe(2);
    });
    test('5 / 2 = 2.5', () => {
        expect(math.divide(5, 2)).toBe(2.5);
    });
    test('0 / 1 = 0', () => {
        expect(math.divide(0, 1)).toBe(0);
    });
    test('division by zero returns Infinity', () => {
        expect(math.divide(5, 0)).toBe(Infinity);
    });
});