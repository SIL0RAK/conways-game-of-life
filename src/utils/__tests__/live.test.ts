import live from '../live';

describe('should return matrix after life cycle', () => {
    test.each([
        [
            [
                [false, true, false],
                [false, true, false],
                [false, true, false],
            ],
            [
                [false, false, false],
                [true, true, true],
                [false, false, false],
            ],
        ],
    ])('should return updated matrix', (matrixBefore, expectedOutcome) => {
        expect(live(matrixBefore)).toEqual(expectedOutcome);
    })
});