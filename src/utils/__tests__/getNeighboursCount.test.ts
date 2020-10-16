import getNeighborsCount from '../getNeighborsCount';

describe('getNeighborsCount should return number or neighbours', () => {
    test.each([
        [
            [
                [false, false, false],
                [false, false, false],
                [false, false, false],
            ],
            0,
        ],
        [
            [
                [true, false, false],
                [false, false, false],
                [false, false, false],
            ],
            1,
        ],
        [
            [
                [true, false, false],
                [false, false, false],
                [false, false, true],
            ],
            2,
        ],
        [
            [
                [false, false, false],
                [false, true, false],
                [false, true, false],
            ],
            1,
        ],
        [
            [
                [false, false, false],
                [false, true, false],
                [false, false, false],
            ],
            0,
        ],
        [
            [
                [false, false, false],
                [false, true, false],
                [false, false, false],
            ],
            0,
        ],
        [
            [
                [false, false, false],
                [true, true, true],
                [false, false, false],
            ],
            2,
        ],
        [
            [
                [false, false, false],
                [true, false, false],
                [false, false, false],
            ],
            1,
        ]
        
    ])('should return count of surounding true neighours', (matrix: boolean[][], expectedCount: number) => {
        expect(getNeighborsCount(matrix, 1, 1)).toBe(expectedCount);
    })

    test('should return neighbour as false if he is out of matrix', () => {
        const matrix = [
            [false, true, false],
            [false, true, false],
            [false, true, false],
        ];
        
        expect(getNeighborsCount(matrix, 0, 1)).toBe(1);
        expect(getNeighborsCount(matrix, 1, 0)).toBe(3);
    })
});