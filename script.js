let userInput = 16;
const grid = document.querySelector(".grid");

const colorPicker = document.querySelector(".color-picker__input");

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

const newBtn = document.querySelector(".btn__new");

newBtn.addEventListener("click", () => {
  getUserInput();
  removeGrid();
  createGrid(userInput);
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

function paint(color) {
  const gridItems = document.querySelectorAll(".grid__item");

  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = color;
    });
  });
}

const clearBtn = document.querySelector(".btn__clear");

clearBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid__item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "#fff";
  });
  resetBtns();
});

const erasorBtn = document.querySelector(".btn__erasor");

erasorBtn.addEventListener("click", () => {
  makeActive(erasorBtn);

  paint("#fff");
});

const colorBtn = document.querySelector(".btn__color");

colorBtn.addEventListener("click", () => {
  makeActive(colorBtn);
  let color = colorPicker.value;
  paint(color);

  colorPicker.addEventListener("input", () => {
    makeActive(colorBtn);
    color = colorPicker.value;
    paint(color);
  });
});

function makeActive(pressedBtn) {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.classList.remove("btn--active");
  });
  pressedBtn.classList.add("btn--active");
}

function resetBtns() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.classList.remove("btn--active");
  });
}
