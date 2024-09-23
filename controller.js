"use strict";

import * as view from "./view.js";
import * as model from "./model.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log("App initialized");

  window.model = model;
}

document.querySelectorAll(".cell").forEach((cell) =>
  cell.addEventListener("click", (e) => {
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;
    setCell(row, col);
  })
);

function setCell(row, col) {
  model.writeToCell(row, col, "X");
  model.dump();
}
