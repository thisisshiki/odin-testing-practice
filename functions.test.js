import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions.js';

test('capitalize function', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});

test('reverseString function', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
});

test('calculator object', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(6, 3)).toBe(2);
});

test('caesarCipher function', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyzeArray function', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});