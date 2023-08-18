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
  getUserInput();
  removeGrid();
  createGrid(userInput);
  paint();
});

function getUserInput() {
  userInput = prompt("Enter the number of squares per side(max 30):");
  while (userInput <= 0 || userInput > 30) {
    userInput = prompt("Try again:");
  }
}

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

const clearBtn = document.querySelector(".btn__clear");

clearBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid__item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "#fff";
  });
});

const erasorBtn = document.querySelector(".btn__erasor");

erasorBtn.addEventListener("click", () => {
  erasorBtn.classList.add("btn--active");
  const gridItems = document.querySelectorAll(".grid__item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "#fff";
    });
  });
});
