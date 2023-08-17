let userInput = 16;
const grid = document.querySelector(".grid");

function createGrid(sizePerSide) {
  for (let i = 0; i < sizePerSide * sizePerSide; i++) {
    const gridItem = document.createElement("div");
    calcSquareSize(gridItem, sizePerSide);
    grid.appendChild(gridItem).className = "grid__item";
  }
}

function calcSquareSize(element, sizePerSide) {
  element.style.width = grid.offsetWidth / sizePerSide + "px";
  element.style.height = element.style.height;
}

createGrid(userInput);
paint();

const newBtn = document.querySelector(".btn__new");

newBtn.addEventListener("click", () => {
  userInput = prompt("Enter the number of squares per side:");
  removeGrid();
  createGrid(userInput);
  paint();
});

function removeGrid() {
  const gridItems = document.querySelectorAll(".grid__item");
  gridItems.forEach((item) => {
    item.remove();
  });
}

function paint() {
  const gridItems = document.querySelectorAll(".grid__item");

  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "#000";
    });
  });
}
