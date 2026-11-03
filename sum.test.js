import sum from './sum.js';

describe('Sum function', () => {
    test('adds 2 + 3', () => {
        expect(sum(2, 3)).toBe(5);
    });
    test('adds -5 -5', () => {
        expect(sum(-5, -5)).toBe(-10);
    });
});