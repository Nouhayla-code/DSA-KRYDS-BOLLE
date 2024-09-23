const grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

function init() {}

function writeToCell(row, col, value) {
  grid[row][col] = value;
}

function readFromCell(row, col) {
  return grid[row][col];
}

function dump() {
  console.log(grid);
}

export { init, writeToCell, readFromCell, dump };
