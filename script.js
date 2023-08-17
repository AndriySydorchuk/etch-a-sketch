const userInput = 16;
const grid = document.querySelector(".grid");

function createGrid() {
  for (let i = 0; i < userInput * userInput; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid__item");
    gridItem.style.width = grid.offsetWidth / userInput + "px";
    gridItem.style.height = gridItem.style.width;
    grid.appendChild(gridItem);
  }
}

createGrid();

const gridItems = document.querySelectorAll(".grid__item");

gridItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#000";
  });
});
