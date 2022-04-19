// create loop to create 81 gridBoxes
makeGrid(9);

function makeGrid(boxes) {
  for (let i = 0; i < boxes * boxes; i++) {
    let div = document.createElement("div");
    div.classList.add("gridBox")
    const dimensions = 90/boxes;
    div.setAttribute("style", `width: ${dimensions}%; padding-top: ${dimensions}%;`)
    let container = document.querySelector(".container")
    container.appendChild(div);
  };
};
// create an event listener that adds a class "touched" which changes the background color of the div to black

// create event listener that calls applyColor when "Sketch" button is clicked
const sketch = document.querySelector("#sketch");
sketch.addEventListener("click", applyColor);

// function that removes ".touched" from previously moused over grid boxes
function eraseByMouse() {
  const gridDivs = document.querySelectorAll(".gridBox")
  gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.classList.remove("touched");
    })
  });
}

// create event listener that calls eraseByMouse when "eraser" button is clicked
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
  eraseByMouse();
})

function applyColor(){
  const gridDivs = document.querySelectorAll(".gridBox")
  gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.classList.add("touched");
    });
  });
}


// this is suppposed to remove the event listener added to each gridBox when the sketch button is clicked
function removeSketch() {
  const gridDivs = document.querySelectorAll(".gridBox")
  gridDivs.forEach((gridDiv) => {
    gridDiv.removeEventListener("mouseover", applyColor);
  });
};


// create an event listener that removes the class "touched" from all divs with the class gridBox when the reset button is pressed
// const boardWipe = document.querySelector("#boardWipe");
// boardWipe.addEventListener("click", () => {
//   let gridsToPurge = document.querySelectorAll(".gridBox")
//   gridsToPurge.forEach((grid) => {
//     grid.classList.remove("touched");
//     removeSketch();
//   });
// });

// create an event listener that removes the class "touched" from all divs with the class gridBox when the reset button is pressed
const boardWipe = document.querySelector("#boardWipe");
let container = document.querySelector(".container")
boardWipe.addEventListener("click", () => {
  let newDimensions = prompt("Enter a number from 1-30")
  if (newDimensions > 30) {
    alert("Too high. Try again, maybe?");
    return;
  }
  if (newDimensions < 1) {
    alert("Too low. Try again, maybe?");
    return;
  }
  alert("Ok, sure. Gimme a second...")
  let gridsToPurge = document.querySelectorAll(".gridBox")
  gridsToPurge.forEach((grid) => {
    container.removeChild(grid);
  });
  makeGrid(newDimensions);
});
