const userInput = 16;
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

const gridItems = document.querySelectorAll(".grid__item");

gridItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#000";
  });
});
