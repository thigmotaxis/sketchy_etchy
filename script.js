// create loop to create 16 gridBoxes
for (let i = 0; i < 16; i++) {
  let div = document.createElement("div");
  div.classList.add("gridBox")
  div.textContent = `${i + 1}`;
  let container = document.querySelector(".container")
  container.appendChild(div);
}
