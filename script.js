// create loop to create 81 gridBoxes
makeGrid(9);

function makeGrid(boxes) {
  for (let i = 0; i < boxes * boxes; i++) {
    let div = document.createElement("div");
    div.classList.add("gridBox")
    let container = document.querySelector(".container")
    container.appendChild(div);
  }
}
// create an event listener that adds a class "touched" which changes the background color of the div to black
function applyColor(){
  const gridDivs = document.querySelectorAll(".gridBox")
  gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.classList.add("touched");
    });
  });
}

// create event listener that calls applyColor when "Sketch" button is clicked
const sketch = document.querySelector("#sketch");
sketch.addEventListener("click", () => {
  applyColor();
});

// create event listener that calls eraseByMouse when "eraser" button is clicked
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
  removeSketch();
  eraseByMouse();
})

function removeSketch() {
  const gridDivs = document.querySelectorAll(".gridBox")
  gridDivs.forEach((gridDiv) => {
    gridDiv.removeEventListener("mouseover", applyColor);
  });
}

// function that removes ".touched" from previously moused over grid boxes
function eraseByMouse() {
  const gridDivs = document.querySelectorAll(".gridbox")
  gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.classList.remove("touched");
    })
  });
}

// create an event listener that removes the class "touched" from all divs with the class gridBox when the reset button is pressed
const boardWipe = document.querySelector("#boardWipe");
boardWipe.addEventListener("click", () => {
  let gridsToPurge = document.querySelectorAll(".gridBox")
  gridsToPurge.forEach((grid) => {
    grid.classList.remove("touched");
  });
});

// create an event listener that removes the class "touched" from all divs with the class gridBox when the reset button is pressed
// const boardWipe = document.querySelector("#boardWipe");
// let container = document.querySelector(".container")
// boardWipe.addEventListener("click", () => {
//   let gridsToPurge = document.querySelectorAll(".gridBox")
//   gridsToPurge.forEach((grid) => {
//     container.removeChild(grid);
//   });
//
//   makeGrid(prompt("enter a number"));
//   applyColor();
// });
