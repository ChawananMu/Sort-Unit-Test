const { merge } = require('./merge');

describe('merge function', () => {
    test('merge three sorted arrays', () => {
        const collection1 = [1, 5, 9];
        const collection2 = [2, 3, 6];
        const collection3 = [8, 4, 0];
        
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 8, 9]);
    });

    test('handle empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const collection3: number[] = [];
        
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([]);
    });

    test('handle arrays of different lengths', () => {
        const collection1 = [1, 5];
        const collection2 = [2];
        const collection3 = [6, 4, 0];
        
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([0, 1, 2, 4, 5, 6]);
    });

    test('handle arrays with duplicate values', () => {
        const collection1 = [1, 2, 2];
        const collection2 = [2, 4, 4];
        const collection3 = [3, 2, 1];
        
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 1, 2, 2, 2, 2, 3, 4, 4]);
    });
});