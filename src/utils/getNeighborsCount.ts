const getNeighborsCount = (
  matrix: Array<Array<boolean>>,
  x: number,
  y: number
) =>
  [
    matrix[x - 1]?.[y - 1],
    matrix[x - 1]?.[y],
    matrix[x - 1]?.[y + 1],

    matrix[x]?.[y + 1],

    matrix[x + 1]?.[y - 1],
    matrix[x + 1]?.[y],
    matrix[x + 1]?.[y + 1],

    matrix[x]?.[y - 1]
  ].filter((item) => {
    return Boolean(item);
  }).length;

export default getNeighborsCount;
