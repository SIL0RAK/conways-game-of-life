import getNeighborsCount from './getNeighborsCount';

const live = (matrix: boolean[][]) =>
  matrix.map((row, y) =>
    row.map((alive, x) => {
      const neighbours = getNeighborsCount(matrix, y, x);

      if (neighbours < 2) {
        return false;
      }

      if (neighbours > 3) {
        return false;
      }

      if (alive && neighbours === 2) {
        return true;
      }

      if (neighbours === 3) {
        return true;
      }

      return false;
    })
  );

export default live;
