document.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById("background");
  const flipperBtn = document.getElementById("flipper");
  const hexColorTxt = document.getElementById("hex-color");

  flipperBtn.addEventListener("click", () => {
    const hexColor = getHexColor();
    background.style.backgroundColor = hexColor;
    hexColorTxt.textContent = hexColor;
  });

  function getHexColor() {
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex.padStart(6, "0").toUpperCase();
  }
});
