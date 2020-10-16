const mutateMatrix = (
  matrix: Array<Array<boolean>>,
  y: number,
  x: number,
  value: boolean
) =>
  matrix.map((row: Array<boolean>, indexY: number) => {
    if (y === indexY) {
      return row.map((item: boolean, indexX: number) => {
        if (indexX === x) {
          return value;
        }

        return item;
      });
    }

    return row;
  });

export default mutateMatrix;
