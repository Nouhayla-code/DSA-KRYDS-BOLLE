import * as controller from "./controller.js";

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", clickCell);
});

function clickCell(event) {
  const cell = event.target;
  const row = cell.dataset.row;
  const col = cell.dataset.col;
  console.log("row", row, "col", col);
}
