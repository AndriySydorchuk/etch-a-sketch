let userInput = 16;
const grid = document.querySelector(".grid");
const newBtn = document.querySelector(".btn__new");
const clearBtn = document.querySelector(".btn__clear");
const erasorBtn = document.querySelector(".btn__erasor");
const colorBtn = document.querySelector(".btn__color");
const rainbowBtn = document.querySelector(".btn__rainbow");
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

function paintRainbow() {
  const gridItems = document.querySelectorAll(".grid__item");

  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const color = getRandomColor();
      item.style.backgroundColor = color;
    });
  });
}

function getRandomColor() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomIndex];
  }
  return hexColor;
}

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

function getUserInput() {
  userInput = prompt("Enter the number of squares per side(max 30):");
  while (userInput <= 0 || userInput > 30) {
    userInput = prompt("Try again:");
  }
}

createGrid(userInput);

newBtn.addEventListener("click", () => {
  getUserInput();
  removeGrid();
  createGrid(userInput);
});

clearBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid__item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "#fff";
    item.replaceWith(item.cloneNode(true));
  });
  resetBtns();
});

erasorBtn.addEventListener("click", () => {
  makeActive(erasorBtn);
  paint("#fff");
});

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

rainbowBtn.addEventListener("click", () => {
  makeActive(rainbowBtn);
  paintRainbow();
});
