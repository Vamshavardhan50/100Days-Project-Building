const GenButton = document.querySelector(".genBtn");

const palette = document.querySelector(".palette");
GenButton.addEventListener("click", generatePalette);

function generatePalette() {
  const color = [];

  for (let i = 0; i < 5; i++) {
    color.push(GenerateRadomColor());
  }
  updatePaletteDisplay(color);
}
function GenerateRadomColor() {
  const letter = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updatePaletteDisplay(color) {
  palette.innerHTML = "";

  color.forEach((colorValue) => {
    const div = document.createElement("div");
    div.textContent = colorValue;
    div.classList.add("btn");
    div.style.background = colorValue;

    palette.appendChild(div);
  });
}
